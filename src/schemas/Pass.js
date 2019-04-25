import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-bootstrap4/LongTextField';

const Pass = new SimpleSchema({
  track: {
    type: String,
    allowedValues: ['Grand Bend', 'Toronto'],
    defaultValue: 'Grand Bend',
  },
  lane: {
    type: String,
    allowedValues: ['Left', 'Right'],
    defaultValue: 'Right',
  },
  reaction_time: Number,
  et_60: Number,
  et_330: Number,
  et_660: Number,
  mph_660: Number,
  et_1000: Number,
  et_1320: Number,
  mph_1320: Number,
  full_pass: {
    type: Boolean,
    defaultValue: true,
  },
  temperature: Number,
  humidity: Number,
  density_altitute: SimpleSchema.Integer,
  barametric_pressure: Number,
  wind_speed: Number,
  wind_direction: {
    type: String,
    allowedValues: ['Head', 'Cross-Head', 'Cross-Tail', 'Tail', 'Cross'],
    defaultValue: 'Head',
  },
  timestamp: {
    type: Date,
    defaultValue: new Date(),
  },
  note: {
    type: String,
    uniforms: LongTextField,
    optional: true,
  },
});

export default Pass;
