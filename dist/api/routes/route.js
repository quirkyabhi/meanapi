"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _user = _interopRequireDefault(require("../controllers/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var router = express.Router();
exports.router = router;
router.get('/users', _user["default"].findAll);
router.post('/users', _user["default"].create);
router.get('/users/:id', _user["default"].findOne);
router["delete"]('/users/:id', _user["default"].findOne);
router.put('/users/:id', _user["default"].update);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvcm91dGVzL3JvdXRlLmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwicm91dGVyIiwiUm91dGVyIiwiZ2V0IiwidXNlckNvbnRyb2xsZXIiLCJmaW5kQWxsIiwicG9zdCIsImNyZWF0ZSIsImZpbmRPbmUiLCJwdXQiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQURBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBdkI7O0FBRU8sSUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLE1BQVIsRUFBZjs7QUFFUEQsTUFBTSxDQUFDRSxHQUFQLENBQVcsUUFBWCxFQUFvQkMsaUJBQWVDLE9BQW5DO0FBQ0FKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFFBQVosRUFBcUJGLGlCQUFlRyxNQUFwQztBQUNBTixNQUFNLENBQUNFLEdBQVAsQ0FBVyxZQUFYLEVBQXdCQyxpQkFBZUksT0FBdkM7QUFDQVAsTUFBTSxVQUFOLENBQWMsWUFBZCxFQUEyQkcsaUJBQWVJLE9BQTFDO0FBQ0FQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFlBQVgsRUFBd0JMLGlCQUFlTSxNQUF2QyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbmltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy91c2VyLmNvbnRyb2xsZXInXG5leHBvcnQgY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLmdldCgnL3VzZXJzJyx1c2VyQ29udHJvbGxlci5maW5kQWxsKVxucm91dGVyLnBvc3QoJy91c2VycycsdXNlckNvbnRyb2xsZXIuY3JlYXRlKVxucm91dGVyLmdldCgnL3VzZXJzLzppZCcsdXNlckNvbnRyb2xsZXIuZmluZE9uZSlcbnJvdXRlci5kZWxldGUoJy91c2Vycy86aWQnLHVzZXJDb250cm9sbGVyLmZpbmRPbmUpXG5yb3V0ZXIucHV0KCcvdXNlcnMvOmlkJyx1c2VyQ29udHJvbGxlci51cGRhdGUpIl19