import datetime
import sqlite3
import json
from flask import Flask, render_template, request, make_response
from peewee import *
from playhouse.flask_utils import FlaskDB
from playhouse.shortcuts import model_to_dict, dict_to_model

DATABASE = 'sqlite:///talbotracing.db'

app = Flask(__name__)
app.config.from_object(__name__)

db_wrapper = FlaskDB(app)

class Pass(db_wrapper.Model):
    track = CharField()
    lane = CharField()
    reaction_time = DoubleField()
    et_60 = DoubleField()
    et_330 = DoubleField()
    et_660 = DoubleField()
    mph_660 = DoubleField()
    et_1000 = DoubleField()
    et_1320 = DoubleField()
    mph_1320 = DoubleField()
    full_pass = BooleanField()
    temperature = DoubleField()
    humidity = DoubleField()
    density_altitute = IntegerField()
    barametric_pressure = DoubleField()
    wind_speed = DoubleField()
    wind_direction = CharField()
    timestamp = DateTimeField(default=datetime.datetime.now)
    note = TextField()

def create_tables():
    db_wrapper.database.create_tables([Pass])

@app.route('/api/passes/', methods=['POST', 'GET'])
def get_passes():
    if request.method == 'POST':
        passes = []
        test_pass = json.loads('[{"track": "GBM", "lane": "L", "reaction_time": 0.001, "et_60": 2.143, "et_330": 5.567, "et_660": 8.746, "mph_660": 84.51, "et_1000": 10.655, "et_1320": 13.144, "mph_1320": 104.94, "full_pass": true, "temperature": 82.5, "humidity": 38.5, "density_altitute": 2413, "barametric_pressure": 24.53, "wind_speed": 6.4, "wind_direction": "tail", "timestamp": "2019-04-25 13:39", "note": "testpass"}]')
        for pass_json in test_pass:
            pass_model = dict_to_model(Pass, pass_json)
            passes.append(pass_model)
        created = Pass.bulk_create(passes)
        return make_response('OK', 200)
    else:
        len = request.args.get('length', -1)
        passes = (Pass.select().order_by(Pass.timestamp.desc()).limit(len))
        runs = []
        for run in passes:
            run_dict = model_to_dict(run)
            run_dict['timestamp'] = datetime.datetime.strftime(run_dict['timestamp'], '%Y-%m-%d %H:%M')
            runs.append(run_dict)
        return json.dumps(runs)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def path(path):
    return render_template('index.html')
