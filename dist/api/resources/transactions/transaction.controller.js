"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transaction = _interopRequireDefault(require("./transaction.model"));

var _transaction2 = _interopRequireDefault(require("./transaction.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  findAll: function findAll(req, res) {
    _transaction["default"].find().then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  create: function create(req, res) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _transactionService$v, error, value;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _transactionService$v = _transaction2["default"].validationSchema(req.body), error = _transactionService$v.error, value = _transactionService$v.value;

              if (!(error && error.details)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(500).json(error.details));

            case 4:
              _context.next = 6;
              return _transaction["default"].create(value).then(function (employee) {
                return res.json(employee);
              })["catch"](function (err) {
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
  findMyTransaction: function findMyTransaction(req, res, next) {
    var id = req.params.id;
    var _req$query = req.query,
        _req$query$page = _req$query.page,
        page = _req$query$page === void 0 ? 1 : _req$query$page,
        _req$query$perPage = _req$query.perPage,
        perPage = _req$query$perPage === void 0 ? 10 : _req$query$perPage;
    var options = {
      page: parseInt(page, 10),
      limit: parseInt(perPage, 10),
      populate: 'userId refId'
    }; // Transaction.find({'userId':id}).then(
    //     data => res.json(data)
    // )

    _transaction["default"].paginate({
      'userId': id
    }, options).then(function (data) {
      return res.json(data);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJUcmFuc2FjdGlvbiIsImZpbmQiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJlcnIiLCJzdGF0dXMiLCJjcmVhdGUiLCJ0cmFuc2FjdGlvblNlcnZpY2UiLCJ2YWxpZGF0aW9uU2NoZW1hIiwiYm9keSIsImVycm9yIiwidmFsdWUiLCJkZXRhaWxzIiwiZW1wbG95ZWUiLCJjb25zb2xlIiwibG9nIiwiZmluZE15VHJhbnNhY3Rpb24iLCJuZXh0IiwiaWQiLCJwYXJhbXMiLCJxdWVyeSIsInBhZ2UiLCJwZXJQYWdlIiwib3B0aW9ucyIsInBhcnNlSW50IiwibGltaXQiLCJwb3B1bGF0ZSIsInBhZ2luYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7O2VBRWU7QUFDWEEsRUFBQUEsT0FEVyxtQkFDSEMsR0FERyxFQUNDQyxHQURELEVBQ0s7QUFDWkMsNEJBQVlDLElBQVosR0FBbUJDLElBQW5CLENBQXdCLFVBQUFDLElBQUk7QUFBQSxhQUFFSixHQUFHLENBQUNLLElBQUosQ0FBU0QsSUFBVCxDQUFGO0FBQUEsS0FBNUIsV0FFSSxVQUFBRSxHQUFHO0FBQUEsYUFBSU4sR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUo7QUFBQSxLQUZQO0FBSUgsR0FOVTtBQU9MRSxFQUFBQSxNQVBLLGtCQU9FVCxHQVBGLEVBT09DLEdBUFAsRUFPVztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUVTUyx5QkFBbUJDLGdCQUFuQixDQUFvQ1gsR0FBRyxDQUFDWSxJQUF4QyxDQUZULEVBRVBDLEtBRk8seUJBRVBBLEtBRk8sRUFFQUMsS0FGQSx5QkFFQUEsS0FGQTs7QUFBQSxvQkFHVkQsS0FBSyxJQUFJQSxLQUFLLENBQUNFLE9BSEw7QUFBQTtBQUFBO0FBQUE7O0FBQUEsK0NBSUhkLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXNCTyxLQUFLLENBQUNFLE9BQTVCLENBSkc7O0FBQUE7QUFBQTtBQUFBLHFCQU1aYix3QkFBWU8sTUFBWixDQUFtQkssS0FBbkIsRUFDTFYsSUFESyxDQUNBLFVBQUFZLFFBQVE7QUFBQSx1QkFBSWYsR0FBRyxDQUFDSyxJQUFKLENBQVNVLFFBQVQsQ0FBSjtBQUFBLGVBRFIsV0FFQyxVQUFBVCxHQUFHO0FBQUEsdUJBQUdOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFIO0FBQUEsZUFGSixDQU5ZOztBQUFBO0FBVWRVLGNBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaO0FBVmM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZZEcsY0FBQUEsT0FBTyxDQUFDQyxHQUFSOztBQVpjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZXJCLEdBdEJVO0FBdUJYQyxFQUFBQSxpQkF2QlcsNkJBdUJPbkIsR0F2QlAsRUF1QllDLEdBdkJaLEVBdUJnQm1CLElBdkJoQixFQXVCcUI7QUFBQSxRQUN2QkMsRUFEdUIsR0FDakJyQixHQUFHLENBQUNzQixNQURhLENBQ3ZCRCxFQUR1QjtBQUFBLHFCQUVDckIsR0FBRyxDQUFDdUIsS0FGTDtBQUFBLHFDQUVyQkMsSUFGcUI7QUFBQSxRQUVyQkEsSUFGcUIsZ0NBRWYsQ0FGZTtBQUFBLHdDQUVaQyxPQUZZO0FBQUEsUUFFWkEsT0FGWSxtQ0FFSixFQUZJO0FBRzVCLFFBQU1DLE9BQU8sR0FBQztBQUNWRixNQUFBQSxJQUFJLEVBQUVHLFFBQVEsQ0FBQ0gsSUFBRCxFQUFNLEVBQU4sQ0FESjtBQUVWSSxNQUFBQSxLQUFLLEVBQUNELFFBQVEsQ0FBQ0YsT0FBRCxFQUFTLEVBQVQsQ0FGSjtBQUdWSSxNQUFBQSxRQUFRLEVBQUM7QUFIQyxLQUFkLENBSDRCLENBUzVCO0FBQ0E7QUFDQTs7QUFDQTNCLDRCQUFZNEIsUUFBWixDQUFxQjtBQUFDLGdCQUFTVDtBQUFWLEtBQXJCLEVBQW1DSyxPQUFuQyxFQUE0Q3RCLElBQTVDLENBQ0ksVUFBQUMsSUFBSTtBQUFBLGFBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRCxJQUFULENBQUo7QUFBQSxLQURSLFdBSUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FKUDtBQU1IO0FBekNVLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSAnLi90cmFuc2FjdGlvbi5tb2RlbCc7XG5pbXBvcnQgdHJhbnNhY3Rpb25TZXJ2aWNlIGZyb20gJy4vdHJhbnNhY3Rpb24uc2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaW5kQWxsKHJlcSxyZXMpe1xuICAgICAgICBUcmFuc2FjdGlvbi5maW5kKCkudGhlbihkYXRhPT5yZXMuanNvbihkYXRhKSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKTtcbiAgICB9LFxuICAgIGFzeW5jIGNyZWF0ZShyZXEsIHJlcyl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7ZXJyb3IsIHZhbHVlfSA9IHRyYW5zYWN0aW9uU2VydmljZS52YWxpZGF0aW9uU2NoZW1hKHJlcS5ib2R5KTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5kZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5qc29uKCBlcnJvci5kZXRhaWxzICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGF3YWl0IFRyYW5zYWN0aW9uLmNyZWF0ZSh2YWx1ZSlcbiAgICAgICAgLnRoZW4oZW1wbG95ZWUgPT4gcmVzLmpzb24oZW1wbG95ZWUpKVxuICAgICAgICAuY2F0Y2goZXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICBcbiAgICB9LFxuICAgIGZpbmRNeVRyYW5zYWN0aW9uKHJlcSwgcmVzLG5leHQpe1xuICAgICAgICBsZXQge2lkfSA9IHJlcS5wYXJhbXM7XG4gICAgICAgIGNvbnN0IHtwYWdlID0xLCBwZXJQYWdlPTEwfT0gcmVxLnF1ZXJ5O1xuICAgICAgICBjb25zdCBvcHRpb25zPXtcbiAgICAgICAgICAgIHBhZ2U6IHBhcnNlSW50KHBhZ2UsMTApLFxuICAgICAgICAgICAgbGltaXQ6cGFyc2VJbnQocGVyUGFnZSwxMCksXG4gICAgICAgICAgICBwb3B1bGF0ZTondXNlcklkIHJlZklkJ1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVHJhbnNhY3Rpb24uZmluZCh7J3VzZXJJZCc6aWR9KS50aGVuKFxuICAgICAgICAvLyAgICAgZGF0YSA9PiByZXMuanNvbihkYXRhKVxuICAgICAgICAvLyApXG4gICAgICAgIFRyYW5zYWN0aW9uLnBhZ2luYXRlKHsndXNlcklkJzppZH0sb3B0aW9ucykudGhlbihcbiAgICAgICAgICAgIGRhdGEgPT4gcmVzLmpzb24oZGF0YSlcbiAgICAgICAgKVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfVxufSJdfQ==