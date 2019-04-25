import datetime
import sqlite3
import json
from flask import Flask, render_template, request
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

@app.route('/passes/', methods=['GET'])
def get_passes():
    len = request.args.get('length', -1)
    passes = (Pass.select().order_by(Pass.timestamp.desc()).limit(len))
    runs = []
    for run in passes:
        run_dict = model_to_dict(run)
        run_dict['timestamp'] = datetime.datetime.strftime(run_dict['timestamp'], '%Y-%m-%d %H:%M')
        runs.append(run_dict)
    return json.dumps(runs)

@app.route('/')
def hello_world():
    return render_template('index.html')
