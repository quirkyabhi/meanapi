"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _employee = _interopRequireDefault(require("../models/employee.model"));

var _findAll$findOne$find;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_findAll$findOne$find = {
  findAll: function findAll(req, res) {
    // res.json({msg:"find all users"});
    _employee["default"].find().then(function (employee) {
      return res.json(employee);
    })["catch"](function (err) {
      return res.status(500).json(err);
    });
  },
  findOne: function findOne(req, res) {
    var id = req.params.id;

    _employee["default"].findById(id).then(function (employee) {
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

  _employee["default"].findByIdAndRemove(id).then(function (employee) {
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

  _employee["default"].findByIdAndUpdate({
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
      no = _req$body.no,
      name = _req$body.name,
      salary = _req$body.salary,
      role = _req$body.role,
      age = _req$body.age,
      gender = _req$body.gender;

  if (!name) {
    return res.status(400).json({
      err: "name is required."
    });
  }

  if (!salary) {
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

  if (!age) {
    return res.status(400).json({
      err: "age is required."
    });
  }

  if (!gender) {
    return res.status(400).json({
      err: "gender is required."
    });
  }

  _employee["default"].create({
    no: no,
    name: name,
    salary: salary,
    role: role,
    age: age,
    gender: gender
  }).then(function (employee) {
    return res.json(employee);
  })["catch"](function (arr) {
    return res.status(500).json(err);
  });
}), _findAll$findOne$find);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hcGkvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImZpbmRBbGwiLCJyZXEiLCJyZXMiLCJFbXBsb3llZSIsImZpbmQiLCJ0aGVuIiwiZW1wbG95ZWUiLCJqc29uIiwiZXJyIiwic3RhdHVzIiwiZmluZE9uZSIsImlkIiwicGFyYW1zIiwiZmluZEJ5SWQiLCJmaW5kQnlJZEFuZFJlbW92ZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiX2lkIiwiJHNldCIsImJvZHkiLCJubyIsIm5hbWUiLCJzYWxhcnkiLCJyb2xlIiwiYWdlIiwiZ2VuZGVyIiwiY3JlYXRlIiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUVJQSxFQUFBQSxPLG1CQUFRQyxHLEVBQUlDLEcsRUFBSTtBQUNaO0FBQ0FDLHlCQUFTQyxJQUFULEdBQWdCQyxJQUFoQixDQUFxQixVQUFBQyxRQUFRO0FBQUEsYUFBRUosR0FBRyxDQUFDSyxJQUFKLENBQVNELFFBQVQsQ0FBRjtBQUFBLEtBQTdCLFdBRUksVUFBQUUsR0FBRztBQUFBLGFBQUlOLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JGLElBQWhCLENBQXFCQyxHQUFyQixDQUFKO0FBQUEsS0FGUDtBQUlILEc7QUFDREUsRUFBQUEsTyxtQkFBUVQsRyxFQUFJQyxHLEVBQUk7QUFDWixRQUFNUyxFQUFFLEdBQUdWLEdBQUcsQ0FBQ1csTUFBSixDQUFXRCxFQUF0Qjs7QUFDQVIseUJBQVNVLFFBQVQsQ0FBa0JGLEVBQWxCLEVBQXNCTixJQUF0QixDQUNJLFVBQUFDLFFBQVEsRUFBRztBQUNQLFVBQUcsQ0FBQ0EsUUFBSixFQUFhO0FBQ1QsZUFBT0osR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FDSDtBQUFFQyxVQUFBQSxHQUFHLEVBQUM7QUFBTixTQURHLENBQVA7QUFHSCxPQUpELE1BS0k7QUFDQSxlQUFPTixHQUFHLENBQUNL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QUFHLEVBQUM7QUFBTCxLQUFyQixDQUFQO0FBQ0g7O0FBQ0QsTUFBSSxDQUFDZSxHQUFMLEVBQVU7QUFDTixXQUFPckIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUI7QUFBQ0MsTUFBQUEsR0FBRyxFQUFDO0FBQUwsS0FBckIsQ0FBUDtBQUNIOztBQUNELE1BQUksQ0FBQ2dCLE1BQUwsRUFBYTtBQUNULFdBQU90QixHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFDQyxNQUFBQSxHQUFHLEVBQUM7QUFBTCxLQUFyQixDQUFQO0FBQ0g7O0FBQ0RMLHVCQUFTc0IsTUFBVCxDQUFnQjtBQUFDTixJQUFBQSxFQUFFLEVBQUZBLEVBQUQ7QUFBSUMsSUFBQUEsSUFBSSxFQUFKQSxJQUFKO0FBQVNDLElBQUFBLE1BQU0sRUFBTkEsTUFBVDtBQUFnQkMsSUFBQUEsSUFBSSxFQUFKQSxJQUFoQjtBQUFzQkMsSUFBQUEsR0FBRyxFQUFIQSxHQUF0QjtBQUEyQkMsSUFBQUEsTUFBTSxFQUFOQTtBQUEzQixHQUFoQixFQUFvRG5CLElBQXBELENBQXlELFVBQUFDLFFBQVE7QUFBQSxXQUFJSixHQUFHLENBQUNLLElBQUosQ0FBU0QsUUFBVCxDQUFKO0FBQUEsR0FBakUsV0FBK0YsVUFBQW9CLEdBQUc7QUFBQSxXQUFHeEIsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkYsSUFBaEIsQ0FBcUJDLEdBQXJCLENBQUg7QUFBQSxHQUFsRztBQUVILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW1wbG95ZWUgZnJvbSAnLi4vbW9kZWxzL2VtcGxveWVlLm1vZGVsJ1xuZXhwb3J0IGRlZmF1bHR7XG4gICAgZmluZEFsbChyZXEscmVzKXtcbiAgICAgICAgLy8gcmVzLmpzb24oe21zZzpcImZpbmQgYWxsIHVzZXJzXCJ9KTtcbiAgICAgICAgRW1wbG95ZWUuZmluZCgpLnRoZW4oZW1wbG95ZWU9PnJlcy5qc29uKGVtcGxveWVlKSlcbiAgICAgICAgLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICAgZmluZE9uZShyZXEscmVzKXtcbiAgICAgICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIEVtcGxveWVlLmZpbmRCeUlkKGlkKS50aGVuKFxuICAgICAgICAgICAgZW1wbG95ZWUgPT57XG4gICAgICAgICAgICAgICAgaWYoIWVtcGxveWVlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBlcnI6XCJlbXBsb3llZSBub3QgZm91bmRcIiB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKGVtcGxveWVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKS5jYXRjaChcbiAgICAgICAgICAgIGVyciA9PiByZXMuc3RhdHVzKDUwMCkuanNvbihlcnIpXG4gICAgICAgIClcbiAgICB9LFxuICAgIGZpbmRPbmUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBFbXBsb3llZS5maW5kQnlJZEFuZFJlbW92ZShpZCkudGhlbihcbiAgICAgICAgICAgIGVtcGxveWVlID0+e1xuICAgICAgICAgICAgICAgIGlmKCFlbXBsb3llZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXJyOlwiZW1wbG95ZWUgbm90IGZvdW5kXCIgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihlbXBsb3llZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goXG4gICAgICAgICAgICBlcnIgPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKVxuICAgICAgICApXG4gICAgfSxcbiAgICB1cGRhdGUocmVxLHJlcyl7XG4gICAgICAgIGNvbnN0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBFbXBsb3llZS5maW5kQnlJZEFuZFVwZGF0ZSh7X2lkOmlkfSx7JHNldDpyZXEuYm9keX0se25ldzogdHJ1ZX0pLnRoZW4oXG4gICAgICAgICAgICBlbXBsb3llZSA9PntcbiAgICAgICAgICAgICAgICBpZighZW1wbG95ZWUpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGVycjpcImVtcGxveWVlIG5vdCBmb3VuZFwiIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oZW1wbG95ZWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLmNhdGNoKFxuICAgICAgICAgICAgZXJyID0+IHJlcy5zdGF0dXMoNTAwKS5qc29uKGVycilcbiAgICAgICAgKVxuICAgIH0sXG4gICAgY3JlYXRlKHJlcSwgcmVzKXtcbiAgICAgICAgbGV0e25vLG5hbWUsc2FsYXJ5LHJvbGUsIGFnZSwgZ2VuZGVyfT0gcmVxLmJvZHk7XG4gICAgICAgIGlmKCFuYW1lKXtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbihcbiAgICAgICAgICAgICAgICB7IGVycjpcIm5hbWUgaXMgcmVxdWlyZWQuXCJ9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2FsYXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcInNhbGFyeSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbm8pIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwibm8gaXMgcmVxdWlyZWQuXCJ9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJvbGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7ZXJyOlwicm9sZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImFnZSBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZ2VuZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oe2VycjpcImdlbmRlciBpcyByZXF1aXJlZC5cIn0pO1xuICAgICAgICB9XG4gICAgICAgIEVtcGxveWVlLmNyZWF0ZSh7bm8sbmFtZSxzYWxhcnkscm9sZSwgYWdlLCBnZW5kZXJ9KS50aGVuKGVtcGxveWVlID0+IHJlcy5qc29uKGVtcGxveWVlKSkuY2F0Y2goYXJyPT4gcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyKSk7XG4gICAgICAgIFxuICAgIH1cbn07Il19