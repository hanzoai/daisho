// Generated by CoffeeScript 1.12.4
var Counter, Dynamic, Tween,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Dynamic = require('../dynamic');

Tween = require('tween.js');

module.exports = Counter = (function(superClass) {
  extend(Counter, superClass);

  function Counter() {
    return Counter.__super__.constructor.apply(this, arguments);
  }

  Counter.prototype.tag = 'daisho-graphics-counter';

  Counter.prototype.html = require('../../templates/graphics/counter');

  Counter.prototype.value0 = 0;

  Counter.prototype.value1 = 0;

  Counter.prototype.tween0 = null;

  Counter.prototype.tween1 = null;

  Counter.prototype.timer = 1000;

  Counter.prototype.init = function() {
    return Counter.__super__.init.apply(this, arguments);
  };

  Counter.prototype._refresh = function() {
    var data, self, value0, value1;
    data = this.data;
    self = this;
    if (!this.tween0 && data.get('0')) {
      value0 = data.get(0 + '.ys.0');
      if (value0 && value0 !== this.value0) {
        this.tween0 = new Tween.Tween({
          v: this.value0
        }).to({
          v: value0
        }, this.timer).onUpdate(function() {
          self.value0 = this.v;
          return requestAnimationFrame(function() {
            return self.update();
          });
        }).onComplete((function(_this) {
          return function() {
            _this.tween0 = null;
            _this.value0 = value0;
            return requestAnimationFrame(function() {
              return _this.update();
            });
          };
        })(this)).start();
      }
    }
    if (!this.tween1 && data.get('1')) {
      value1 = data.get(1 + '.ys.0');
      if (value1 && value1 !== this.value1) {
        return this.tween1 = new Tween.Tween({
          v: this.value1
        }).to({
          v: value1
        }, this.timer).onUpdate(function() {
          self.value1 = this.v;
          return requestAnimationFrame(function() {
            return self.update();
          });
        }).onComplete((function(_this) {
          return function() {
            _this.tween1 = null;
            _this.value1 = value1;
            return requestAnimationFrame(function() {
              return _this.update();
            });
          };
        })(this)).start();
      }
    }
  };

  Counter.prototype.getNumber = function(index) {
    if (index === 0) {
      if (!this.data.get(0 + '.fmt.y')) {
        return this.value0;
      }
      return this.data.get(0 + '.fmt.y')(this.value0);
    } else {
      if (!this.data.get(1 + '.fmt.y')) {
        return this.value1;
      }
      return this.data.get(1 + '.fmt.y')(this.value1);
    }
  };

  return Counter;

})(Dynamic);

//# sourceMappingURL=counter.js.map