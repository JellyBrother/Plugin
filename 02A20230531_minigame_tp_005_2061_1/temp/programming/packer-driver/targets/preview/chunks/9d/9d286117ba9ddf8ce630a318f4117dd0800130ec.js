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
        } //写法要改


        moveWIIioiofweofoiw(event) {
          if (this.isMoveweofoiweofoiwofso) {
            var posV2 = event.getUILocation();
            this.node.setWorldPosition(v3(posV2.x, posV2.y));
          }
        } //写法要改
        // let nowRect = this.nowPai.getComponent(UITransform).getBoundingBoxToWorld();
        // for (let i = 0; i < len; i++) {
        //     let now = this.zhuanP.children[i];
        //     let is = now.getComponent(UITransform).getBoundingBoxToWorld().intersects(nowRect);
        //     if (is) {
        //         jiaoNode.push(now)
        //     }
        // }


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

        changePosesoeoiweofwoiefwwoei(node, parent) {
          var pos1 = node.parent.getComponent(UITransform).convertToWorldSpaceAR(node.getPosition());
          var pos2 = parent.parent.getComponent(UITransform).convertToNodeSpaceAR(pos1);
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
//# sourceMappingURL=9d286117ba9ddf8ce630a318f4117dd0800130ec.js.map