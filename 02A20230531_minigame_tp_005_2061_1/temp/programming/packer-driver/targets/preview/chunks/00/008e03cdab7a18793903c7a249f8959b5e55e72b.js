System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, mainwoeoiodowopwe_uipoqwo;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6981p0V7dEkqkcmzgy08eo", "mainwoeoiodowopwe[uipoqwo", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("mainwoeoiodowopwe_uipoqwo", mainwoeoiodowopwe_uipoqwo = (_dec = ccclass('mainwoeoiodowopwe_uipoqwo'), _dec(_class = class mainwoeoiodowopwe_uipoqwo extends Component {
        start() {}

        update(deltaTime) {}

        onWnehaowifwoiowioeruidspoasa(event) {
          event.target.children[0].active = !event.target.children[0].activeInHierarchy;
        }

        onsetmusicwoiefiewiouosieooweweo(event) {
          event.target.children[0].active = !event.target.children[0].activeInHierarchy;
          event.target.children[1].active = !event.target.children[0].activeInHierarchy;
        }

        onsetwoiefiewiouosieooweweo(event) {
          event.target.parent.children[0].active = !event.target.parent.children[0].activeInHierarchy;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=008e03cdab7a18793903c7a249f8959b5e55e72b.js.map