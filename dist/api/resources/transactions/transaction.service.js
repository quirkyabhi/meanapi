"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  validationSchema: function validationSchema(body) {
    var schema = _joi["default"].object().keys({
      userId: _joi["default"].string().required(),
      refId: _joi["default"].string().required(),
      transferAmount: _joi["default"].number().required(),
      initialAmount: _joi["default"].number().required(),
      transactionType: _joi["default"].string().required(),
      date: _joi["default"].date().required()
    });

    var _Joi$validate = _joi["default"].validate(body, schema),
        error = _Joi$validate.error,
        value = _Joi$validate.value;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbInZhbGlkYXRpb25TY2hlbWEiLCJib2R5Iiwic2NoZW1hIiwiSm9pIiwib2JqZWN0Iiwia2V5cyIsInVzZXJJZCIsInN0cmluZyIsInJlcXVpcmVkIiwicmVmSWQiLCJ0cmFuc2ZlckFtb3VudCIsIm51bWJlciIsImluaXRpYWxBbW91bnQiLCJ0cmFuc2FjdGlvblR5cGUiLCJkYXRlIiwidmFsaWRhdGUiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O2VBQ2M7QUFDVkEsRUFBQUEsZ0JBRFUsNEJBQ09DLElBRFAsRUFDWTtBQUNsQixRQUFNQyxNQUFNLEdBQUdDLGdCQUFJQyxNQUFKLEdBQWFDLElBQWIsQ0FBa0I7QUFDN0JDLE1BQUFBLE1BQU0sRUFBRUgsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQURxQjtBQUU3QkMsTUFBQUEsS0FBSyxFQUFFTixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBRnNCO0FBRzdCRSxNQUFBQSxjQUFjLEVBQUNQLGdCQUFJUSxNQUFKLEdBQWFILFFBQWIsRUFIYztBQUk3QkksTUFBQUEsYUFBYSxFQUFFVCxnQkFBSVEsTUFBSixHQUFhSCxRQUFiLEVBSmM7QUFLN0JLLE1BQUFBLGVBQWUsRUFBRVYsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUxZO0FBTTdCTSxNQUFBQSxJQUFJLEVBQUVYLGdCQUFJVyxJQUFKLEdBQVdOLFFBQVg7QUFOdUIsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBV0lMLGdCQUFJWSxRQUFKLENBQWFkLElBQWIsRUFBbUJDLE1BQW5CLENBWEo7QUFBQSxRQVdYYyxLQVhXLGlCQVdYQSxLQVhXO0FBQUEsUUFXSkMsS0FYSSxpQkFXSkEsS0FYSTs7QUFZbEIsUUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQW5CLEVBQTJCO0FBQ3ZCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFQO0FBRUg7QUFsQlMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb2kgZnJvbSAnam9pJztcbmV4cG9ydCBkZWZhdWx0e1xuICAgIHZhbGlkYXRpb25TY2hlbWEoYm9keSl7XG4gICAgICAgIGNvbnN0IHNjaGVtYSA9IEpvaS5vYmplY3QoKS5rZXlzKHtcbiAgICAgICAgICAgIHVzZXJJZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICByZWZJZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICB0cmFuc2ZlckFtb3VudDpKb2kubnVtYmVyKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGluaXRpYWxBbW91bnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgdHJhbnNhY3Rpb25UeXBlOiBKb2kuc3RyaW5nKCkucmVxdWlyZWQoKSxcbiAgICAgICAgICAgIGRhdGU6IEpvaS5kYXRlKCkucmVxdWlyZWQoKSxcblxuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdHsgZXJyb3IsIHZhbHVlfT0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xuXG4gICAgfVxufSJdfQ==