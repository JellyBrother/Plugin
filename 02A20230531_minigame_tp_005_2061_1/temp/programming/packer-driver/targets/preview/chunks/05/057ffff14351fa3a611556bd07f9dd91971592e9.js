System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, game, tween, UITransform, v3, _decorator, Component, Node, NodeEventType, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, paiYidongowoefowfowwoiew;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75642NVI9lDKIiazbZAQ+CH", "paiYidongowoefowfowwoiew", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("paiYidongowoefowfowwoiew", paiYidongowoefowfowwoiew = (_dec = ccclass('paiYidongowoefowfowwoiew'), _dec2 = property(Node), _dec(_class = (_class2 = class paiYidongowoefowfowwoiew extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mubiaorongqiNNshangWoisoeowoefos", _descriptor, this);

          this.kaisPoswoeoeofwoeofowe = null;
          this.isMoveweofoiweofoiwofso = false;
          this.paizhiOIIIWeoifoiweoifuiwe = null;
        }

        start() {}

        onEnable() {
          this.node.on(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
          this.node.on(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);
        }

        onDisable() {
          this.node.off(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
          this.node.off(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);
        }

        moveWIIioiofweofoiw(event) {
          if (this.isMoveweofoiweofoiwofso) {
            var posV2 = event.getUILocation();
            var pos = this.changePosesoeoiweofwoiefwwoei_eiojwfiij(this.node, posV2);
            this.node.setPosition(pos);
          }
        }

        endEoifofoweofiodfsod(event) {
          var length = this.mubiaorongqiNNshangWoisoeowoefos.children.length;
          var xiangjiao = false;
          var box = this.node.getComponent(UITransform).getBoundingBoxToWorld();
          var index = 0;

          for (var i = 0; i < 4; i++) {
            var rongqi = this.mubiaorongqiNNshangWoisoeowoefos.children[i];

            if (rongqi.children[0] == undefined) {
              xiangjiao = rongqi.getComponent(UITransform).getBoundingBoxToWorld().intersects(box);
              index = i;

              if (xiangjiao) {
                break;
              }
            }
          }

          if (xiangjiao) {
            this.node.parent = this.mubiaorongqiNNshangWoisoeowoefos.children[index];
            this.node.setPosition(v3(0, 0));
            this.isMoveweofoiweofoiwofso = false;
            game.emit("jiancejieguo_weiowefweiofjiowiofg");
          } else {
            tween(this.node).to(0.1, {
              position: this.kaisPoswoeoeofwoeofowe
            }).start();
          }
        }

        changePosesoeoiweofwoiefwwoei_eiojwfiij(node, pos1) {
          var pos2 = node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos1.x, pos1.y));
          return pos2;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mubiaorongqiNNshangWoisoeowoefos", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=057ffff14351fa3a611556bd07f9dd91971592e9.js.map