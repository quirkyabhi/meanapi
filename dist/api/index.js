"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = require("./resources/users/user.router");

var _transaction = require("./resources/transactions/transaction.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var restRouter = _express["default"].Router();

exports.restRouter = restRouter;
restRouter.use('/users', _user.userRouter);
restRouter.use('/transactions', _transaction.transactionRouter);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvaW5kZXguanMiXSwibmFtZXMiOlsicmVzdFJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJ1c2UiLCJ1c2VyUm91dGVyIiwidHJhbnNhY3Rpb25Sb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUNPLElBQU1BLFVBQVUsR0FBR0Msb0JBQVFDLE1BQVIsRUFBbkI7OztBQUNQRixVQUFVLENBQUNHLEdBQVgsQ0FBZSxRQUFmLEVBQXdCQyxnQkFBeEI7QUFDQUosVUFBVSxDQUFDRyxHQUFYLENBQWUsZUFBZixFQUErQkUsOEJBQS9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQge3VzZXJSb3V0ZXJ9IGZyb20gJy4vcmVzb3VyY2VzL3VzZXJzL3VzZXIucm91dGVyJztcbmltcG9ydCB7dHJhbnNhY3Rpb25Sb3V0ZXIgfSBmcm9tICcuL3Jlc291cmNlcy90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24ucm91dGVyJ1xuZXhwb3J0IGNvbnN0IHJlc3RSb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xucmVzdFJvdXRlci51c2UoJy91c2VycycsdXNlclJvdXRlcik7XG5yZXN0Um91dGVyLnVzZSgnL3RyYW5zYWN0aW9ucycsdHJhbnNhY3Rpb25Sb3V0ZXIpO1xuIl19