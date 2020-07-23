"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.model"));

var _user2 = _interopRequireDefault(require("./user.service"));

var _express = require("express");

var _transaction = _interopRequireDefault(require("../transactions/transaction.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
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
  },
  // delete(req,res){
  //     const id = req.params.id
  //     User.findByIdAndRemove(id).then(
  //         employee =>{
  //             if(!employee){
  //                 return res.status(400).json(
  //                     { err:"employee not found" }
  //                 )
  //             }
  //             else{
  //                 return res.json(employee)
  //             }
  //         }
  //     ).catch(
  //         err => res.status(500).json(err)
  //     )
  // },
  update: function update(req, res) {
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
  },
  create: function create(req, res) {
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
  },
  signup: function signup(req, res) {
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
  },
  login: function login(req, res) {
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
              console.log(value);
              return _context2.abrupt("return", res.json(user));

            case 17:
              _context2.next = 22;
              break;

            case 19:
              _context2.prev = 19;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 22:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 19]]);
    }))();
  },
  // delete(req, res){
  //     const id= req.params.id
  //     Transaction.deleteMany({'refId':id}, function (error, result){
  //         if(error){
  //             console.log(error)
  //             return;
  //         }else{
  //             Transaction.deleteMany({'userId':id}, function (error, result) {
  //                 if (error) {
  //                     console.log(error);
  //                     return;
  //                 } else {
  //                     console.log("all transactions deleted successfully")
  //                 }
  //                     })
  //         }
  //     })
  //     User.findByIdAndRemove({'_id':id}).then(
  //                 data =>{
  //                     if(!data){
  //                         return res.status(400).json(
  //                             { err:"user not found" }
  //                         )
  //                     }
  //                     else{
  //                         return res.json(data)
  //                     }
  //                 }
  //             ).catch(
  //                 err => res.status(500).json(err)
  //             )
  // }
  "delete": function _delete(req, res) {
    var id = req.params.id;

    _transaction["default"].deleteMany({
      'refId': id
    }, function (error, result) {
      if (error) {
        console.log(error);
        return;
      } else {
        _transaction["default"].deleteMany({
          'userId': id
        }, function (error, result) {
          if (error) {
            console.log(error);
            return;
          } else {
            console.log("all transaction deleted successfully");
          }
        });
      }
    });

    _user["default"].findByIdAndRemove({
      '_id': id
    }).then(function (data) {
      if (!data) {
        return res.status(400).json({
          err: "user not found"
        });
      } else {
        return res.json(data);
      }
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3VzZXJzL3VzZXIuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmaW5kQWxsIiwicmVxIiwicmVzIiwiVXNlciIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJ1cGRhdGUiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsIl9pZCIsIiRzZXQiLCJib2R5IiwiY3JlYXRlIiwibmFtZSIsImVtYWlsIiwicm9sZSIsImFtb3VudCIsInBhc3N3b3JkIiwibm8iLCJzaWdudXAiLCJ1c2VyU2VydmljZSIsInZhbGlkYXRpb25TY2hlbWEiLCJlcnJvciIsInZhbHVlIiwiZGV0YWlscyIsImFyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInZhbGlkYXRpb25Mb2dpblNjaGVtYSIsInVzZXIiLCJUcmFuc2FjdGlvbiIsImRlbGV0ZU1hbnkiLCJyZXN1bHQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7ZUFDYztBQUNWQSxFQUFBQSxPQURVLG1CQUNGQyxHQURFLEVBQ0VDLEdBREYsRUFDTTtBQUNaO0FBQ0FDLHFCQUFLQyxJQUFMLEdBQVlDLElBQVosQ0FBaUIsVUFBQUMsUUFBUTtBQUFBLGFBQUVKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxRQUFULENBQUY7QUFBQSxLQUF6QixXQUVJLFVBQUFFLEdBQUc7QUFBQSxhQUFJTixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSjtBQUFBLEtBRlA7QUFJSCxHQVBTO0FBUVZFLEVBQUFBLE9BUlUsbUJBUUZULEdBUkUsRUFRRUMsR0FSRixFQVFNO0FBQ1osUUFBTVMsRUFBRSxHQUFHVixHQUFHLENBQUNXLE1BQUosQ0FBV0QsRUFBdEI7O0FBQ0FSLHFCQUFLVSxRQUFMLENBQWNGLEVBQWQsRUFBa0JOLElBQWxCLENBQ0ksVUFBQUMsUUFBUSxFQUFHO0FBQ1AsVUFBRyxDQUFDQSxRQUFKLEVBQWE7QUFDVCxlQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUNIO0FBQUVDLFVBQUFBLEdBQUcsRUFBQztBQUFOLFNBREcsQ0FBUDtBQUdILE9BSkQsTUFLSTtBQUNBLGVBQU9OLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxRQUFULENBQVA7QUFDSDtBQUNKLEtBVkwsV0FZSSxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQVpQO0FBY0gsR0F4QlM7QUF5QlY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBTSxFQUFBQSxNQTFDVSxrQkEwQ0hiLEdBMUNHLEVBMENDQyxHQTFDRCxFQTBDSztBQUNYLFFBQU1TLEVBQUUsR0FBR1YsR0FBRyxDQUFDVyxNQUFKLENBQVdELEVBQXRCOztBQUNBUixxQkFBS1ksaUJBQUwsQ0FBdUI7QUFBQ0MsTUFBQUEsR0FBRyxFQUFDTDtBQUFMLEtBQXZCLEVBQWdDO0FBQUNNLE1BQUFBLElBQUksRUFBQ2hCLEdBQUcsQ0FBQ2lCO0FBQVYsS0FBaEMsRUFBZ0Q7QUFBQyxhQUFLO0FBQU4sS0FBaEQsRUFBNkRiLElBQTdELENBQ0ksVUFBQUMsUUFBUSxFQUFHO0FBQ1AsVUFBRyxDQUFDQSxRQUFKLEVBQWE7QUFDVCxlQUFPSixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUNIO0FBQUVDLFVBQUFBLEdBQUcsRUFBQztBQUFOLFNBREcsQ0FBUDtBQUdILE9BSkQsTUFLSTtBQUNBLGVBQU9OLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxRQUFULENBQVA7QUFDSDtBQUNKLEtBVkwsV0FZSSxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQVpQO0FBY0gsR0ExRFM7QUEyRFhXLEVBQUFBLE1BM0RXLGtCQTJESmxCLEdBM0RJLEVBMkRDQyxHQTNERCxFQTJESztBQUFBLG9CQUM4QkQsR0FBRyxDQUFDaUIsSUFEbEM7QUFBQSxRQUNQRSxJQURPLGFBQ1BBLElBRE87QUFBQSxRQUNGQyxLQURFLGFBQ0ZBLEtBREU7QUFBQSxRQUNLQyxJQURMLGFBQ0tBLElBREw7QUFBQSxRQUNXQyxNQURYLGFBQ1dBLE1BRFg7QUFBQSxRQUNtQkMsUUFEbkIsYUFDbUJBLFFBRG5COztBQUVYLFFBQUcsQ0FBQ0osSUFBSixFQUFTO0FBQ0wsYUFBT2xCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQ0g7QUFBRUMsUUFBQUEsR0FBRyxFQUFDO0FBQU4sT0FERyxDQUFQO0FBR0g7O0FBQ0QsUUFBSSxDQUFDYSxLQUFMLEVBQVk7QUFDUixhQUFPbkIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFDO0FBQUwsT0FBckIsQ0FBUDtBQUNIOztBQUNELFFBQUksQ0FBQ2lCLEVBQUwsRUFBUztBQUNMLGFBQU92QixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxRQUFBQSxHQUFHLEVBQUM7QUFBTCxPQUFyQixDQUFQO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDYyxJQUFMLEVBQVc7QUFDUCxhQUFPcEIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFDO0FBQUwsT0FBckIsQ0FBUDtBQUNIOztBQUNELFFBQUksQ0FBQ2UsTUFBTCxFQUFhO0FBQ1QsYUFBT3JCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFFBQUFBLEdBQUcsRUFBQztBQUFMLE9BQXJCLENBQVA7QUFDSDs7QUFDRCxRQUFJLENBQUNnQixRQUFMLEVBQWU7QUFDWCxhQUFPdEIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsUUFBQUEsR0FBRyxFQUFDO0FBQUwsT0FBckIsQ0FBUDtBQUNIO0FBRUosR0FsRlM7QUFtRkprQixFQUFBQSxNQW5GSSxrQkFtRkd6QixHQW5GSCxFQW1GUUMsR0FuRlIsRUFtRlk7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FFU3lCLGtCQUFZQyxnQkFBWixDQUE2QjNCLEdBQUcsQ0FBQ2lCLElBQWpDLENBRlQsRUFFUFcsS0FGTyx5QkFFUEEsS0FGTyxFQUVBQyxLQUZBLHlCQUVBQSxLQUZBOztBQUFBLG9CQUdWRCxLQUFLLElBQUlBLEtBQUssQ0FBQ0UsT0FITDtBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FJSDdCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXNCc0IsS0FBSyxDQUFDRSxPQUE1QixDQUpHOztBQUFBO0FBQUE7QUFBQSxxQkFNWjVCLGlCQUFLZ0IsTUFBTCxDQUFZVyxLQUFaLEVBQ0x6QixJQURLLENBQ0EsVUFBQUMsUUFBUTtBQUFBLHVCQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFKO0FBQUEsZUFEUixXQUVDLFVBQUEwQixHQUFHO0FBQUEsdUJBQUc5QixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQkMsR0FBckIsQ0FBSDtBQUFBLGVBRkosQ0FOWTs7QUFBQTtBQVVkeUIsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFWYztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlkRyxjQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlckIsR0FsR1M7QUFtR0pDLEVBQUFBLEtBbkdJLGlCQW1HRWxDLEdBbkdGLEVBbUdPQyxHQW5HUCxFQW1HVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVVeUIsa0JBQVlTLHFCQUFaLENBQWtDbkMsR0FBRyxDQUFDaUIsSUFBdEMsQ0FGVixFQUVOVyxLQUZNLDBCQUVOQSxLQUZNLEVBRUNDLEtBRkQsMEJBRUNBLEtBRkQ7O0FBQUEsb0JBR1RELEtBQUssSUFBSUEsS0FBSyxDQUFDRSxPQUhOO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUlGN0IsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBc0JzQixLQUFLLENBQUNFLE9BQTVCLENBSkU7O0FBQUE7QUFBQTtBQUFBLHFCQU1NNUIsaUJBQUtPLE9BQUwsQ0FBYTtBQUFDVyxnQkFBQUEsS0FBSyxFQUFFUyxLQUFLLENBQUNUO0FBQWQsZUFBYixDQU5OOztBQUFBO0FBTVBnQixjQUFBQSxJQU5POztBQUFBLGtCQU9UQSxJQVBTO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQVFGbkMsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsZ0JBQUFBLEdBQUcsRUFBQztBQUFMLGVBQXJCLENBUkU7O0FBQUE7QUFBQSxvQkFVTDZCLElBQUksQ0FBQ2IsUUFBTCxJQUFpQk0sS0FBSyxDQUFDTixRQVZsQjtBQUFBO0FBQUE7QUFBQTs7QUFBQSxnREFXRnRCLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLGdCQUFBQSxHQUFHLEVBQUM7QUFBTCxlQUFyQixDQVhFOztBQUFBO0FBY1R5QixjQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUosS0FBWjtBQWRTLGdEQWVGNUIsR0FBRyxDQUFDSyxJQUFKLENBQ0Y4QixJQURFLENBZkU7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXFCYkosY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQXJCYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCcEIsR0EzSFM7QUE0SFY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNKVSw2QkE0SkhqQyxHQTVKRyxFQTRKQ0MsR0E1SkQsRUE0Sks7QUFBRSxRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDYjJCLDRCQUFZQyxVQUFaLENBQXVCO0FBQUMsZUFBUTVCO0FBQVQsS0FBdkIsRUFBb0MsVUFBU2tCLEtBQVQsRUFBZVcsTUFBZixFQUFzQjtBQUN0RCxVQUFHWCxLQUFILEVBQVM7QUFDTEksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7QUFDQTtBQUNILE9BSEQsTUFJSTtBQUNBUyxnQ0FBWUMsVUFBWixDQUF1QjtBQUFDLG9CQUFTNUI7QUFBVixTQUF2QixFQUFxQyxVQUFTa0IsS0FBVCxFQUFlVyxNQUFmLEVBQXNCO0FBQ3ZELGNBQUdYLEtBQUgsRUFBUztBQUNMSSxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBO0FBQ0gsV0FIRCxNQUdNO0FBQ0ZJLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHNDQUFaO0FBQ0g7QUFDSixTQVBEO0FBUUg7QUFDSixLQWZEOztBQWlCQS9CLHFCQUFLc0MsaUJBQUwsQ0FBdUI7QUFBQyxhQUFNOUI7QUFBUCxLQUF2QixFQUNDTixJQURELENBQ00sVUFBQXFDLElBQUksRUFBRztBQUNULFVBQUcsQ0FBQ0EsSUFBSixFQUFTO0FBQ0wsZUFBT3hDLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCO0FBQUNDLFVBQUFBLEdBQUcsRUFBQztBQUFMLFNBQXJCLENBQVA7QUFDSCxPQUZELE1BRU07QUFDRixlQUFPTixHQUFHLENBQUNLLElBQUosQ0FBU21DLElBQVQsQ0FBUDtBQUNIO0FBQ0osS0FQRDtBQVFIO0FBdExTLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuL3VzZXIubW9kZWwnXG5pbXBvcnQgdXNlclNlcnZpY2UgZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgcmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCBUcmFuc2FjdGlvbiBmcm9tICcuLi90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb24ubW9kZWwnXG5leHBvcnQgZGVmYXVsdHtcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xuICAgICAgICAvLyByZXMuanNvbih7bXNnOlwiZmluZCBhbGwgdXNlcnNcIn0pO1xuICAgICAgICBVc2VyLmZpbmQoKS50aGVuKGVtcGxveWVlPT5yZXMuanNvbihlbXBsb3llZSkpXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuICAgIGZpbmRPbmUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBVc2VyLmZpbmRCeUlkKGlkKS50aGVuKFxuICAgICAgICAgICAgZW1wbG95ZWUgPT57XG4gICAgICAgICAgICAgICAgaWYoIWVtcGxveWVlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnI6XCJlbXBsb3llZSBub3QgZm91bmRcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcGxveWVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuICAgIC8vIGRlbGV0ZShyZXEscmVzKXtcbiAgICAvLyAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgLy8gICAgIFVzZXIuZmluZEJ5SWRBbmRSZW1vdmUoaWQpLnRoZW4oXG4gICAgLy8gICAgICAgICBlbXBsb3llZSA9PntcbiAgICAvLyAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB7IGVycjpcImVtcGxveWVlIG5vdCBmb3VuZFwiIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgKVxuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNle1xuICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICApLmNhdGNoKFxuICAgIC8vICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAvLyAgICAgKVxuICAgIC8vIH0sXG4gICAgdXBkYXRlKHJlcSxyZXMpe1xuICAgICAgICBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgVXNlci5maW5kQnlJZEFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzogdHJ1ZX0pLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcImVtcGxveWVlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICBjcmVhdGUocmVxLCByZXMpe1xuICAgICAgICBsZXR7bmFtZSxlbWFpbCwgcm9sZSwgYW1vdW50LCBwYXNzd29yZH09IHJlcS5ib2R5O1xuICAgICAgICBpZighbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgeyBlcnI6XCJuYW1lIGlzIHJlcXVpcmVkLlwifVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInNhbGFyeSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm8pIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwibm8gaXMgcmVxdWlyZWQuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJvbGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwicm9sZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYW1vdW50KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImFnZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiZ2VuZGVyIGlzIHJlcXVpcmVkLlwifSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfSxcbiAgICBhc3luYyBzaWdudXAocmVxLCByZXMpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qge2Vycm9yLCB2YWx1ZX0gPSB1c2VyU2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKCBlcnJvci5kZXRhaWxzICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGF3YWl0IFVzZXIuY3JlYXRlKHZhbHVlKVxuICAgICAgICAudGhlbihlbXBsb3llZSA9PiByZXMuanNvbihlbXBsb3llZSkpXG4gICAgICAgIC5jYXRjaChhcnI9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpKTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGFzeW5jIGxvZ2luKHJlcSwgcmVzKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHtlcnJvciwgdmFsdWV9ID0gdXNlclNlcnZpY2UudmFsaWRhdGlvbkxvZ2luU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKCBlcnJvci5kZXRhaWxzICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHtlbWFpbDogdmFsdWUuZW1haWx9KTtcbiAgICAgICAgICAgIGlmKCF1c2VyKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcIkludmFsaWQgRW1haWxcIn0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKHVzZXIucGFzc3dvcmQgIT0gdmFsdWUucGFzc3dvcmQpe1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwiSW52YWxpZCBQYXNzd29yZFwifSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgdXNlclxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIC8vIGRlbGV0ZShyZXEsIHJlcyl7XG4gICAgLy8gICAgIGNvbnN0IGlkPSByZXEucGFyYW1zLmlkXG4gICAgLy8gICAgIFRyYW5zYWN0aW9uLmRlbGV0ZU1hbnkoeydyZWZJZCc6aWR9LCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCl7XG4gICAgLy8gICAgICAgICBpZihlcnJvcil7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICAgICAgfWVsc2V7XG4gICAgLy8gICAgICAgICAgICAgVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7J3VzZXJJZCc6aWR9LCBmdW5jdGlvbiAoZXJyb3IsIHJlc3VsdCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHRyYW5zYWN0aW9ucyBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKVxuICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9KVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgICBVc2VyLmZpbmRCeUlkQW5kUmVtb3ZlKHsnX2lkJzppZH0pLnRoZW4oXG4gICAgLy8gICAgICAgICAgICAgICAgIGRhdGEgPT57XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZighZGF0YSl7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcInVzZXIgbm90IGZvdW5kXCIgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGRhdGEpXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICApLmNhdGNoKFxuICAgIC8vICAgICAgICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgIC8vICAgICAgICAgICAgIClcbiAgICAvLyB9XG4gICAgZGVsZXRlKHJlcSxyZXMpeyBjb25zdCBpZCA9IHJlcS5wYXJhbXMuaWQgXG4gICAgICAgIFRyYW5zYWN0aW9uLmRlbGV0ZU1hbnkoeydyZWZJZCc6aWR9LGZ1bmN0aW9uKGVycm9yLHJlc3VsdCl7IFxuICAgICAgICAgICAgaWYoZXJyb3IpeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZXsgXG4gICAgICAgICAgICAgICAgVHJhbnNhY3Rpb24uZGVsZXRlTWFueSh7J3VzZXJJZCc6aWR9LGZ1bmN0aW9uKGVycm9yLHJlc3VsdCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVycm9yKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNleyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWxsIHRyYW5zYWN0aW9uIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5XCIpOyBcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgKSBcbiAgICAgICAgVXNlci5maW5kQnlJZEFuZFJlbW92ZSh7J19pZCc6aWR9KVxuICAgICAgICAudGhlbihkYXRhID0+eyBcbiAgICAgICAgICAgIGlmKCFkYXRhKXsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtlcnI6XCJ1c2VyIG5vdCBmb3VuZFwifSk7IFxuICAgICAgICAgICAgfSBlbHNleyBcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZGF0YSk7IFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSkgXG4gICAgfSBcblxuXG59OyJdfQ==