System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Collider2D, Contact2DType, v3, _decorator, Component, NodeEventType, _dec, _class, _crd, ccclass, property, paiYidongowoefowfowwoiew;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      v3 = _cc.v3;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      NodeEventType = _cc.NodeEventType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75642NVI9lDKIiazbZAQ+CH", "paiYidongowoefowfowwoiew", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("paiYidongowoefowfowwoiew", paiYidongowoefowfowwoiew = (_dec = ccclass('paiYidongowoefowfowwoiew'), _dec(_class = class paiYidongowoefowfowwoiew extends Component {
        start() {}

        onEnable() {
          this.node.on(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
          this.node.on(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
          this.node.on(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this); // 注册单个碰撞体的回调函数

          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }
        }

        onDisable() {
          this.node.off(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
          this.node.off(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
          this.node.off(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);
        }

        moveWIIioiofweofoiw(event) {
          let posV2 = event.getUILocation();
          this.node.setWorldPosition(v3(posV2.x, posV2.y));
        }

        endEoifofoweofiodfsod(event) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          console.log('onBeginContact111111');
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7c9f6c77f404fd2485b0bd12cb3d02367081cf9.js.map