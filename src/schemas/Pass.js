import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-bootstrap4/LongTextField';

const Pass = new SimpleSchema({
  track: {
    type: String,
    allowedValues: ['Grand Bend', 'Toronto'],
  },
  lane: {
    type: String,
    allowedValues: ['Left', 'Right'],
  },
  reaction_time: Number,
  et_60: Number,
  et_330: Number,
  et_660: Number,
  mph_660: Number,
  et_1000: Number,
  et_1320: Number,
  mph_1320: Number,
  full_pass: Boolean,
  temperature: Number,
  humidity: Number,
  density_altitute: SimpleSchema.Integer,
  barametric_pressure: Number,
  wind_speed: Number,
  wind_direction: String,
  timestamp: Date,
  note: {
    type: String,
    uniforms: LongTextField,
  },
});

export default Pass;
