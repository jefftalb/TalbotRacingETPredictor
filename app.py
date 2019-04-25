import datetime
import sqlite3
from flask import Flask
from peewee import *
from playhouse.flask_utils import FlaskDB

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

@app.route('/test')

@app.route('/')
def hello_world():
    return 'Hello, World!'
