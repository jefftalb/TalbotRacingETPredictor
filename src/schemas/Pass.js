import SimpleSchema from 'simpl-schema';
import LongTextField from 'uniforms-bootstrap4/LongTextField';

const Pass = new SimpleSchema({
  track: {
    type: String,
    allowedValues: ['GBM', 'TMP', 'STP', 'US131', 'Other'],
    defaultValue: 'GBM',
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
  wind_speed: Number,
  wind_direction: {
    type: String,
    allowedValues: ['Head', 'Cross-Head', 'Cross-Tail', 'Tail', 'Cross'],
    defaultValue: 'Head',
  },
  temperature: Number,
  humidity: Number,
  density_altitute: SimpleSchema.Integer,
  barametric_pressure: Number,
  timestamp: {
    type: Date,
    defaultValue: new Date(),
  },
  full_pass: {
    type: Boolean,
    defaultValue: true,
  },
  note: {
    type: String,
    uniforms: LongTextField,
    optional: true,
  },
});

Pass.labels({
  reaction_time: "R/T",
  et_60: "60\'",
  et_330: "330\'",
  et_660: "1/8 ET",
  mph_660: "1/8 MPH",
  et_1000: "1000\'",
  et_1320: "1/4 ET",
  mph_1320: "1/4 MPH",
  timestamp: "Date & Time"
})

export default Pass;
