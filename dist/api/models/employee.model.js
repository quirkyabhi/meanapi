"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var empSchema = new schema({
  no: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  }
}, {
  collection: 'employee'
});

var _default = _mongoose["default"].model('Employee', empSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvbW9kZWxzL2VtcGxveWVlLm1vZGVsLmpzIl0sIm5hbWVzIjpbInNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1wU2NoZW1hIiwibm8iLCJ0eXBlIiwiTnVtYmVyIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwic2FsYXJ5Iiwicm9sZSIsImFnZSIsImdlbmRlciIsImNvbGxlY3Rpb24iLCJtb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHQyxxQkFBU0MsTUFBeEI7QUFDQSxJQUFNQyxTQUFTLEdBQUUsSUFBSUgsTUFBSixDQUNiO0FBQ0lJLEVBQUFBLEVBQUUsRUFBQztBQUFDQyxJQUFBQSxJQUFJLEVBQUVDLE1BQVA7QUFBZUMsSUFBQUEsUUFBUSxFQUFFO0FBQXpCLEdBRFA7QUFFSUMsRUFBQUEsSUFBSSxFQUFFO0FBQUVILElBQUFBLElBQUksRUFBQ0ksTUFBUDtBQUFlRixJQUFBQSxRQUFRLEVBQUU7QUFBekIsR0FGVjtBQUdJRyxFQUFBQSxNQUFNLEVBQUU7QUFBRUwsSUFBQUEsSUFBSSxFQUFDQyxNQUFQO0FBQWVDLElBQUFBLFFBQVEsRUFBRTtBQUF6QixHQUhaO0FBSUlJLEVBQUFBLElBQUksRUFBQztBQUFFTixJQUFBQSxJQUFJLEVBQUNJLE1BQVA7QUFBZUYsSUFBQUEsUUFBUSxFQUFFO0FBQXpCLEdBSlQ7QUFLSUssRUFBQUEsR0FBRyxFQUFFO0FBQUVQLElBQUFBLElBQUksRUFBQ0MsTUFBUDtBQUFnQkMsSUFBQUEsUUFBUSxFQUFFO0FBQTFCLEdBTFQ7QUFNSU0sRUFBQUEsTUFBTSxFQUFFO0FBQUVSLElBQUFBLElBQUksRUFBQ0ksTUFBUDtBQUFnQkYsSUFBQUEsUUFBUSxFQUFFO0FBQTFCO0FBTlosQ0FEYSxFQVVqQjtBQUFDTyxFQUFBQSxVQUFVLEVBQUM7QUFBWixDQVZpQixDQUFqQjs7ZUFhZWIscUJBQVNjLEtBQVQsQ0FBZSxVQUFmLEVBQTBCWixTQUExQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuY29uc3Qgc2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuY29uc3QgZW1wU2NoZW1hPSBuZXcgc2NoZW1hKFxuICAgIHsgICBcbiAgICAgICAgbm86e3R5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICBuYW1lOiB7IHR5cGU6U3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgIHNhbGFyeTogeyB0eXBlOk51bWJlciwgcmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICByb2xlOnsgdHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgYWdlOiB7IHR5cGU6TnVtYmVyICwgcmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICBnZW5kZXI6IHsgdHlwZTpTdHJpbmcgLCByZXF1aXJlZDogdHJ1ZX1cbiAgICB9XG4sXG57Y29sbGVjdGlvbjonZW1wbG95ZWUnfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnRW1wbG95ZWUnLGVtcFNjaGVtYSkiXX0=