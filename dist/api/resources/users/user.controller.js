"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = _interopRequireDefault(require("./user.service"));

var _express = require("express");

var _findAll$findOne$find;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (_findAll$findOne$find = {
  findAll: function findAll(req, res) {
    // res.json({msg:"find all users"});
    _user["default"].find().then(function (employee) {
      return res.json(employee);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _user["default"].findById(id).then(function (employee) {
      if (!employee) {
        return res.status(400).json({
          err: "employee not found"
        });
      } else {
        return res.json(employee);
      }
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
}, _defineProperty(_findAll$findOne$find, "findOne", function findOne(req, res) {
  var id = req.params.id;

  _user["default"].findByIdAndRemove(id).then(function (employee) {
    if (!employee) {
      return res.status(400).json({
        err: "employee not found"
      });
    } else {
      return res.json(employee);
    }
  })["catch"](function (err) {
    return res.status(500).json(err);
  });
}), _defineProperty(_findAll$findOne$find, "update", function update(req, res) {
  var id = req.params.id;

  _user["default"].findByIdAndUpdate({
    _id: id
  }, {
    $set: req.body
  }, {
    "new": true
  }).then(function (employee) {
    if (!employee) {
      return res.status(400).json({
        err: "employee not found"
      });
    } else {
      return res.json(employee);
    }
  })["catch"](function (err) {
    return res.status(500).json(err);
  });
}), _defineProperty(_findAll$findOne$find, "create", function create(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      email = _req$body.email,
      role = _req$body.role,
      amount = _req$body.amount,
      password = _req$body.password;

  if (!name) {
    return res.status(400).json({
      err: "name is required."
    });
  }

  if (!email) {
    return res.status(400).json({
      err: "salary is required."
    });
  }

  if (!no) {
    return res.status(400).json({
      err: "no is required."
    });
  }

  if (!role) {
    return res.status(400).json({
      err: "role is required."
    });
  }

  if (!amount) {
    return res.status(400).json({
      err: "age is required."
    });
  }

  if (!password) {
    return res.status(400).json({
      err: "gender is required."
    });
  }
}), _defineProperty(_findAll$findOne$find, "signup", function signup(req, res) {
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _userService$validati, error, value;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _userService$validati = _user2["default"].validationSchema(req.body), error = _userService$validati.error, value = _userService$validati.value;

            if (!(error && error.details)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(500).json(error.details));

          case 4:
            _context.next = 6;
            return _user["default"].create(value).then(function (employee) {
              return res.json(employee);
            })["catch"](function (arr) {
              return res.status(500).json(err);
            });

          case 6:
            console.log(value);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }))();
}), _defineProperty(_findAll$findOne$find, "login", function login(req, res) {
  return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _userService$validati2, error, value, user;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _userService$validati2 = _user2["default"].validationLoginSchema(req.body), error = _userService$validati2.error, value = _userService$validati2.value;

            if (!(error && error.details)) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(500).json(error.details));

          case 4:
            _context2.next = 6;
            return _user["default"].findOne({
              email: value.email
            });

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 11;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              err: "Invalid Email"
            }));

          case 11:
            if (!(user.password != value.password)) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              err: "Invalid Password"
            }));

          case 15:
            return _context2.abrupt("return", res.json(user));

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }))();
}), _findAll$findOne$find);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiVXNlciIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImJvZHkiLCJuYW1lIiwiZW1haWwiLCJyb2xlIiwiYW1vdW50IiwicGFzc3dvcmQiLCJubyIsInVzZXJTZXJ2aWNlIiwidmFsaWRhdGlvblNjaGVtYSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiY3JlYXRlIiwiYXJyIiwiY29uc29sZSIsImxvZyIsInZhbGlkYXRpb25Mb2dpblNjaGVtYSIsInVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQUVJQSxFQUFBQSxPLG1CQUFRQyxHLEVBQUlDLEcsRUFBSTtBQUNaO0FBQ0FDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGFBQUVKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxRQUFULENBQUY7QUFBQSxLQUF6QixXQUVJLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRlA7QUFJSCxHO0FBQ0RFLEVBQUFBLE8sbUJBQVFULEcsRUFBSUMsRyxFQUFJO0FBQ1osUUFBTVMsRUFBRSxHQUFHVixHQUFHLENBQUNXLE1BQUosQ0FBV0QsRUFBdEI7O0FBQ0FSLHFCQUFLVSxRQUFMLENBQWNGLEVBQWQsRUFBa0JOLElBQWxCLENBQ0ksVUFBQUMsUUFBUSxFQUFHO0FBQ1AsVUFBRyxDQUFDQSxRQUFKLEVBQWE7QUFD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RyxDQUFDSyxJQUFKLENBQ0Y0QixJQURFLENBZEU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQW9CYkgsWUFBQUEsT0FBTyxDQUFDQyxHQUFSOztBQXBCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVCcEIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4vdXNlci5tb2RlbCdcbmltcG9ydCB1c2VyU2VydmljZSBmcm9tICcuL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyByZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgZmluZEFsbChyZXEscmVzKXtcbiAgICAgICAgLy8gcmVzLmpzb24oe21zZzpcImZpbmQgYWxsIHVzZXJzXCJ9KTtcbiAgICAgICAgVXNlci5maW5kKCkudGhlbihlbXBsb3llZT0+cmVzLmpzb24oZW1wbG95ZWUpKVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgICBmaW5kT25lKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgVXNlci5maW5kQnlJZChpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgICBmaW5kT25lKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgVXNlci5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgICB1cGRhdGUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHtfaWQ6aWR9LHskc2V0OnJlcS5ib2R5fSx7bmV3OiB0cnVlfSkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgIGNyZWF0ZShyZXEsIHJlcyl7XG4gICAgICAgIGxldHtuYW1lLGVtYWlsLCByb2xlLCBhbW91bnQsIHBhc3N3b3JkfT0gcmVxLmJvZHk7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICB7IGVycjpcIm5hbWUgaXMgcmVxdWlyZWQuXCJ9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwic2FsYXJ5IGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFubykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJubyBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcm9sZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJyb2xlIGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiYWdlIGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJnZW5kZXIgaXMgcmVxdWlyZWQuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9LFxuICAgIGFzeW5jIHNpZ251cChyZXEsIHJlcyl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHVzZXJTZXJ2aWNlLnZhbGlkYXRpb25TY2hlbWEocmVxLmJvZHkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oIGVycm9yLmRldGFpbHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYXdhaXQgVXNlci5jcmVhdGUodmFsdWUpXG4gICAgICAgIC50aGVuKGVtcGxveWVlID0+IHJlcy5qc29uKGVtcGxveWVlKSlcbiAgICAgICAgLmNhdGNoKGFycj0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycikpO1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgYXN5bmMgbG9naW4ocmVxLCByZXMpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSB1c2VyU2VydmljZS52YWxpZGF0aW9uTG9naW5TY2hlbWEocmVxLmJvZHkpO1xuICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmRldGFpbHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oIGVycm9yLmRldGFpbHMgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsOiB2YWx1ZS5lbWFpbH0pO1xuICAgICAgICAgICAgaWYoIXVzZXIpe1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiSW52YWxpZCBFbWFpbFwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYodXNlci5wYXNzd29yZCAhPSB2YWx1ZS5wYXNzd29yZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJJbnZhbGlkIFBhc3N3b3JkXCJ9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICB1c2VyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cblxuICAgIH1cblxufTsiXX0=