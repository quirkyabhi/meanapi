"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var schema = _mongoose["default"].Schema;
var empSchema = new schema({
  // no:{type: Number, required: true},
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  amount: {
    type: String,
    required: true
  },
  // salary: { type:Number, required: true},
  role: {
    type: String
  } // age: { type:Number , required: true},
  // gender: { type:String , required: true}

}, {
  collection: 'users'
});

var _default = _mongoose["default"].model('User', empSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIubW9kZWwuanMiXSwibmFtZXMiOlsic2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJlbXBTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwYXNzd29yZCIsImFtb3VudCIsInJvbGUiLCJjb2xsZWN0aW9uIiwibW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBLElBQU1BLE1BQU0sR0FBR0MscUJBQVNDLE1BQXhCO0FBQ0EsSUFBTUMsU0FBUyxHQUFFLElBQUlILE1BQUosQ0FDYjtBQUNJO0FBQ0FJLEVBQUFBLElBQUksRUFBRTtBQUFFQyxJQUFBQSxJQUFJLEVBQUNDLE1BQVA7QUFBZUMsSUFBQUEsUUFBUSxFQUFFO0FBQXpCLEdBRlY7QUFHSUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVILElBQUFBLElBQUksRUFBQ0MsTUFBUDtBQUFlQyxJQUFBQSxRQUFRLEVBQUU7QUFBekIsR0FIWDtBQUlJRSxFQUFBQSxRQUFRLEVBQUU7QUFBRUosSUFBQUEsSUFBSSxFQUFDQyxNQUFQO0FBQWVDLElBQUFBLFFBQVEsRUFBRTtBQUF6QixHQUpkO0FBS0lHLEVBQUFBLE1BQU0sRUFBRTtBQUFFTCxJQUFBQSxJQUFJLEVBQUNDLE1BQVA7QUFBZUMsSUFBQUEsUUFBUSxFQUFFO0FBQXpCLEdBTFo7QUFPSTtBQUNBSSxFQUFBQSxJQUFJLEVBQUM7QUFBRU4sSUFBQUEsSUFBSSxFQUFDQztBQUFQLEdBUlQsQ0FTSTtBQUNBOztBQVZKLENBRGEsRUFjakI7QUFBQ00sRUFBQUEsVUFBVSxFQUFDO0FBQVosQ0FkaUIsQ0FBakI7O2VBaUJlWCxxQkFBU1ksS0FBVCxDQUFlLE1BQWYsRUFBc0JWLFNBQXRCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBlbXBTY2hlbWE9IG5ldyBzY2hlbWEoXG4gICAgeyAgIFxuICAgICAgICAvLyBubzp7dHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgIG5hbWU6IHsgdHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgZW1haWw6IHsgdHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTpTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgICAgICAgYW1vdW50OiB7IHR5cGU6U3RyaW5nLCByZXF1aXJlZDogdHJ1ZX0sXG5cbiAgICAgICAgLy8gc2FsYXJ5OiB7IHR5cGU6TnVtYmVyLCByZXF1aXJlZDogdHJ1ZX0sXG4gICAgICAgIHJvbGU6eyB0eXBlOlN0cmluZ31cbiAgICAgICAgLy8gYWdlOiB7IHR5cGU6TnVtYmVyICwgcmVxdWlyZWQ6IHRydWV9LFxuICAgICAgICAvLyBnZW5kZXI6IHsgdHlwZTpTdHJpbmcgLCByZXF1aXJlZDogdHJ1ZX1cbiAgICB9XG4sXG57Y29sbGVjdGlvbjondXNlcnMnfVxuKVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnVXNlcicsZW1wU2NoZW1hKSJdfQ==