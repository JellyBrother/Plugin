System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, UITransform, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, gamewooweuioasdlkjwojsdfiwoe;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "846dcBqXJ9H86YMlbMyOI+R", "gamewooweuioasdlkjwojsdfiwoe", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gamewooweuioasdlkjwojsdfiwoe", gamewooweuioasdlkjwojsdfiwoe = (_dec = ccclass('gamewooweuioasdlkjwojsdfiwoe'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class gamewooweuioasdlkjwojsdfiwoe extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shangWoisoeowoefos", _descriptor, this);

          _initializerDefineProperty(this, "xiaSelfrtghntWoisoeowoefos", _descriptor2, this);

          _initializerDefineProperty(this, "zhongwefWoisoeowoefos", _descriptor3, this);

          _initializerDefineProperty(this, "fapaiwefWoisoerwfeowoefos", _descriptor4, this);

          _initializerDefineProperty(this, "winsoieoNIdoeoi", _descriptor5, this);

          this.paizhiAllwoeoeifowowe = null;
          this.shangPos_weifiwoiweioodifer = null;
          this.xiaPos_wiefoiweoiis = null;
        }

        start() {
          this.kaishiyouxiowqiioweofowoiew();
          this.paizhiAllwoeoeifowowe = this.getPaizhiAll12312fwef3r();
          this.playkaisoewoiwoiwefwwofoiww();
        }

        playkaisoewoiwoiwefwwofoiww() {
          for (let i = 0; i < 5; i++) {}
        }

        getPaizhiAll12312fwef3r() {
          let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];
          return all;
        } //初始化


        kaishiyouxiowqiioweofowoiew() {
          this.shangWoisoeowoefos.children.forEach(item => {
            item.active = false;
            this.shangPos_weifiwoiweioodifer.push(item, this.node);
          });
          this.xiaSelfrtghntWoisoeowoefos.children.forEach(item => {
            item.active = false;
            this.xiaPos_wiefoiweoiis.push(item, this.node);
          });
        }

        update(deltaTime) {} //局部坐标转换


        changePosesoeoiweofwoiefwwoei(node, parent) {
          var pos1 = node.parent.getComponent(UITransform).convertToWorldSpaceAR(node.getPosition());
          var pos2 = parent.parent.getComponent(UITransform).convertToNodeSpaceAR(pos1);
          return pos2;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "shangWoisoeowoefos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "xiaSelfrtghntWoisoeowoefos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zhongwefWoisoeowoefos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fapaiwefWoisoerwfeowoefos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winsoieoNIdoeoi", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89dcdf2bf5e606b226d927d7aa0d86c386ba2a28.js.map