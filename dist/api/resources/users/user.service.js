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
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required(),
      role: _joi["default"].string().required(),
      name: _joi["default"].string().required(),
      amount: _joi["default"].number().required()
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
  },
  validationLoginSchema: function validationLoginSchema(body) {
    var schema = _joi["default"].object().keys({
      email: _joi["default"].string().email().required(),
      password: _joi["default"].string().required() // role=

    });

    var _Joi$validate2 = _joi["default"].validate(body, schema),
        error = _Joi$validate2.error,
        value = _Joi$validate2.value;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuc2VydmljZS5qcyJdLCJuYW1lcyI6WyJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsInNjaGVtYSIsIkpvaSIsIm9iamVjdCIsImtleXMiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJyb2xlIiwibmFtZSIsImFtb3VudCIsIm51bWJlciIsInZhbGlkYXRlIiwiZXJyb3IiLCJ2YWx1ZSIsImRldGFpbHMiLCJ2YWxpZGF0aW9uTG9naW5TY2hlbWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztlQUNjO0FBQ1ZBLEVBQUFBLGdCQURVLDRCQUNPQyxJQURQLEVBQ1k7QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxLQUFLLEVBQUVILGdCQUFJSSxNQUFKLEdBQWFELEtBQWIsR0FBcUJFLFFBQXJCLEVBRHNCO0FBRTdCQyxNQUFBQSxRQUFRLEVBQUVOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGbUI7QUFHN0JFLE1BQUFBLElBQUksRUFBQ1AsZ0JBQUlJLE1BQUosR0FBYUMsUUFBYixFQUh3QjtBQUk3QkcsTUFBQUEsSUFBSSxFQUFFUixnQkFBSUksTUFBSixHQUFhQyxRQUFiLEVBSnVCO0FBSzdCSSxNQUFBQSxNQUFNLEVBQUVULGdCQUFJVSxNQUFKLEdBQWFMLFFBQWI7QUFMcUIsS0FBbEIsQ0FBZjs7QUFEa0Isd0JBU0lMLGdCQUFJVyxRQUFKLENBQWFiLElBQWIsRUFBbUJDLE1BQW5CLENBVEo7QUFBQSxRQVNYYSxLQVRXLGlCQVNYQSxLQVRXO0FBQUEsUUFTSkMsS0FUSSxpQkFTSkEsS0FUSTs7QUFVbEIsUUFBSUQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BQW5CLEVBQTJCO0FBQ3ZCLGFBQU87QUFBQ0YsUUFBQUEsS0FBSyxFQUFMQTtBQUFELE9BQVA7QUFDSDs7QUFDRCxXQUFPO0FBQUNDLE1BQUFBLEtBQUssRUFBTEE7QUFBRCxLQUFQO0FBRUgsR0FoQlM7QUFpQlZFLEVBQUFBLHFCQWpCVSxpQ0FpQllqQixJQWpCWixFQWlCaUI7QUFDdkIsUUFBTUMsTUFBTSxHQUFHQyxnQkFBSUMsTUFBSixHQUFhQyxJQUFiLENBQWtCO0FBQzdCQyxNQUFBQSxLQUFLLEVBQUVILGdCQUFJSSxNQUFKLEdBQWFELEtBQWIsR0FBcUJFLFFBQXJCLEVBRHNCO0FBRTdCQyxNQUFBQSxRQUFRLEVBQUVOLGdCQUFJSSxNQUFKLEdBQWFDLFFBQWIsRUFGbUIsQ0FHN0I7O0FBSDZCLEtBQWxCLENBQWY7O0FBRHVCLHlCQU9ETCxnQkFBSVcsUUFBSixDQUFhYixJQUFiLEVBQW1CQyxNQUFuQixDQVBDO0FBQUEsUUFPaEJhLEtBUGdCLGtCQU9oQkEsS0FQZ0I7QUFBQSxRQU9UQyxLQVBTLGtCQU9UQSxLQVBTOztBQVF2QixRQUFJRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FBbkIsRUFBMkI7QUFDdkIsYUFBTztBQUFDRixRQUFBQSxLQUFLLEVBQUxBO0FBQUQsT0FBUDtBQUNIOztBQUNELFdBQU87QUFBQ0MsTUFBQUEsS0FBSyxFQUFMQTtBQUFELEtBQVA7QUFFSDtBQTlCUyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEpvaSBmcm9tICdqb2knO1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgdmFsaWRhdGlvblNjaGVtYShib2R5KXtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICByb2xlOkpvaS5zdHJpbmcoKS5yZXF1aXJlZCgpLFxuICAgICAgICAgICAgbmFtZTogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBhbW91bnQ6IEpvaS5udW1iZXIoKS5yZXF1aXJlZCgpXG5cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0eyBlcnJvciwgdmFsdWV9PSBKb2kudmFsaWRhdGUoYm9keSwgc2NoZW1hKTtcbiAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpe1xuICAgICAgICAgICAgcmV0dXJuIHtlcnJvcn07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt2YWx1ZX07XG5cbiAgICB9LFxuICAgIHZhbGlkYXRpb25Mb2dpblNjaGVtYShib2R5KXtcbiAgICAgICAgY29uc3Qgc2NoZW1hID0gSm9pLm9iamVjdCgpLmtleXMoe1xuICAgICAgICAgICAgZW1haWw6IEpvaS5zdHJpbmcoKS5lbWFpbCgpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICBwYXNzd29yZDogSm9pLnN0cmluZygpLnJlcXVpcmVkKCksXG4gICAgICAgICAgICAvLyByb2xlPVxuXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdHsgZXJyb3IsIHZhbHVlfT0gSm9pLnZhbGlkYXRlKGJvZHksIHNjaGVtYSk7XG4gICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKXtcbiAgICAgICAgICAgIHJldHVybiB7ZXJyb3J9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7dmFsdWV9O1xuXG4gICAgfVxufSJdfQ==