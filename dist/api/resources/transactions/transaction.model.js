"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("../users/user.model"));

var _mongoosePaginate = _interopRequireDefault(require("mongoose-paginate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var transactionSchema = new Schema({
  userId: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  refId: {
    ref: 'User',
    type: Schema.Types.ObjectId,
    required: true
  },
  transferAmount: {
    type: Number,
    required: true
  },
  transactionType: {
    type: String,
    required: true
  },
  initialAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  collection: 'transactions'
});
transactionSchema.plugin(_mongoosePaginate["default"]);

var _default = new _mongoose["default"].model('Transaction', transactionSchema);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcGkvcmVzb3VyY2VzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi5tb2RlbC5qcyJdLCJuYW1lcyI6WyJTY2hlbWEiLCJtb25nb29zZSIsInRyYW5zYWN0aW9uU2NoZW1hIiwidXNlcklkIiwicmVmIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZXF1aXJlZCIsInJlZklkIiwidHJhbnNmZXJBbW91bnQiLCJOdW1iZXIiLCJ0cmFuc2FjdGlvblR5cGUiLCJTdHJpbmciLCJpbml0aWFsQW1vdW50IiwiZGF0ZSIsIkRhdGUiLCJjb2xsZWN0aW9uIiwicGx1Z2luIiwibW9uZ29vc2VQYWdpbmF0ZSIsIm1vZGVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSxJQUFNQSxNQUFNLEdBQUdDLHFCQUFTRCxNQUF4QjtBQUNBLElBQU1FLGlCQUFpQixHQUFFLElBQUlGLE1BQUosQ0FBVztBQUNoQ0csRUFBQUEsTUFBTSxFQUFFO0FBQ0pDLElBQUFBLEdBQUcsRUFBQyxNQURBO0FBRUpDLElBQUFBLElBQUksRUFBQ0wsTUFBTSxDQUFDTSxLQUFQLENBQWFDLFFBRmQ7QUFHSkMsSUFBQUEsUUFBUSxFQUFFO0FBSE4sR0FEd0I7QUFNaENDLEVBQUFBLEtBQUssRUFBQztBQUNGTCxJQUFBQSxHQUFHLEVBQUMsTUFERjtBQUVGQyxJQUFBQSxJQUFJLEVBQUNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxRQUZoQjtBQUdGQyxJQUFBQSxRQUFRLEVBQUU7QUFIUixHQU4wQjtBQVdoQ0UsRUFBQUEsY0FBYyxFQUFDO0FBQ1hMLElBQUFBLElBQUksRUFBRU0sTUFESztBQUVYSCxJQUFBQSxRQUFRLEVBQUU7QUFGQyxHQVhpQjtBQWVoQ0ksRUFBQUEsZUFBZSxFQUFDO0FBQ1pQLElBQUFBLElBQUksRUFBQ1EsTUFETztBQUVaTCxJQUFBQSxRQUFRLEVBQUU7QUFGRSxHQWZnQjtBQW1CaENNLEVBQUFBLGFBQWEsRUFBQztBQUNWVCxJQUFBQSxJQUFJLEVBQUVNLE1BREk7QUFFVkgsSUFBQUEsUUFBUSxFQUFFO0FBRkEsR0FuQmtCO0FBdUJoQ08sRUFBQUEsSUFBSSxFQUFFO0FBQ0ZWLElBQUFBLElBQUksRUFBQ1csSUFESDtBQUVGUixJQUFBQSxRQUFRLEVBQUU7QUFGUjtBQXZCMEIsQ0FBWCxFQTJCdkI7QUFBQ1MsRUFBQUEsVUFBVSxFQUFFO0FBQWIsQ0EzQnVCLENBQXpCO0FBNkJBZixpQkFBaUIsQ0FBQ2dCLE1BQWxCLENBQXlCQyw0QkFBekI7O2VBQ2UsSUFBSWxCLHFCQUFTbUIsS0FBYixDQUFtQixhQUFuQixFQUFpQ2xCLGlCQUFqQyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi4vdXNlcnMvdXNlci5tb2RlbCdcbmltcG9ydCBtb25nb29zZVBhZ2luYXRlIGZyb20gJ21vbmdvb3NlLXBhZ2luYXRlJ1xuY29uc3QgU2NoZW1hID0gbW9uZ29vc2UuU2NoZW1hO1xuY29uc3QgdHJhbnNhY3Rpb25TY2hlbWE9IG5ldyBTY2hlbWEoe1xuICAgIHVzZXJJZDogeyBcbiAgICAgICAgcmVmOidVc2VyJywgXG4gICAgICAgIHR5cGU6U2NoZW1hLlR5cGVzLk9iamVjdElkLCBcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUgXG4gICAgfSxcbiAgICByZWZJZDp7XG4gICAgICAgIHJlZjonVXNlcicsXG4gICAgICAgIHR5cGU6U2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH0sXG4gICAgdHJhbnNmZXJBbW91bnQ6e1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICB0cmFuc2FjdGlvblR5cGU6e1xuICAgICAgICB0eXBlOlN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9LFxuICAgIGluaXRpYWxBbW91bnQ6e1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgfSxcbiAgICBkYXRlOiB7XG4gICAgICAgIHR5cGU6RGF0ZSxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICB9XG59LHtjb2xsZWN0aW9uOiAndHJhbnNhY3Rpb25zJ30pO1xuXG50cmFuc2FjdGlvblNjaGVtYS5wbHVnaW4obW9uZ29vc2VQYWdpbmF0ZSlcbmV4cG9ydCBkZWZhdWx0IG5ldyBtb25nb29zZS5tb2RlbCgnVHJhbnNhY3Rpb24nLHRyYW5zYWN0aW9uU2NoZW1hKTsiXX0=