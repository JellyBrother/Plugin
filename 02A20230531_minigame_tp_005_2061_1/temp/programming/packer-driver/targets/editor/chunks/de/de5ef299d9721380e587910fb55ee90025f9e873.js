System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, v3, _decorator, Component, NodeEventType, _dec, _class, _crd, ccclass, property, paiYidongowoefowfowwoiew;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
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
          this.node.on(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);
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

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=de5ef299d9721380e587910fb55ee90025f9e873.js.map