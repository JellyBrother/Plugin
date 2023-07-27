System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, instantiate, Node, resources, Sprite, SpriteFrame, tween, UITransform, paiYidongowoefowfowwoiew, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, gamewooweuioasdlkjwojsdfiwoe;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpaiYidongowoefowfowwoiew(extras) {
    _reporterNs.report("paiYidongowoefowfowwoiew", "./paiYidongowoefowfowwoiew", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      paiYidongowoefowfowwoiew = _unresolved_2.paiYidongowoefowfowwoiew;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "846dcBqXJ9H86YMlbMyOI+R", "gamewooweuioasdlkjwojsdfiwoe", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gamewooweuioasdlkjwojsdfiwoe", gamewooweuioasdlkjwojsdfiwoe = (_dec = ccclass('gamewooweuioasdlkjwojsdfiwoe'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec(_class = (_class2 = class gamewooweuioasdlkjwojsdfiwoe extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "shangWoisoeowoefos", _descriptor, this);

          _initializerDefineProperty(this, "xiaSelfrtghntWoisoeowoefos", _descriptor2, this);

          _initializerDefineProperty(this, "zhongwefWoisoeowoefos", _descriptor3, this);

          _initializerDefineProperty(this, "fapaiwefWoisoerwfeowoefos", _descriptor4, this);

          _initializerDefineProperty(this, "winsoieoNIdoeoi", _descriptor5, this);

          _initializerDefineProperty(this, "yuzhiti_pai_soieoNIdoeoi", _descriptor6, this);

          _initializerDefineProperty(this, "moveNode_234fwsefwinsoieoNIdoeoi", _descriptor7, this);

          _initializerDefineProperty(this, "maskNode_wefwe234fwsefwinsoieoNIdoeoi", _descriptor8, this);

          _initializerDefineProperty(this, "othermoveNode_234fwsefwinsoieoNIdoeoi", _descriptor9, this);

          this.paizhiAllwoeoeifowowe = [];
          this.shangPos_weifiwoiweioodifer = [];
          this.xiaPos_wiefoiweoiis = [];
          this.paiIndex_esioiwfoiwfeoioiefwo = 0;
          this.fazijie_eifiowiojefiow = true;
        }

        onLoad() {
          game.on("jiancejieguo_weiowefweiofjiowiofg", this.endcheck_efoiweoioiefoiwe, this);
        }

        endcheck_efoiweoioiefoiwe() {
          this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
          console.log("接到消息了么");
          let zhoongNode = this.zhongwefWoisoeowoefos.children; // for (let i = 0; i < zhoongNode.length; i++) {
          // }

          if (zhoongNode[3].children[0] == undefined) {//看是否满三张牌
          } else {
            //对手回合
            zhoongNode[3].children[0].destroy();
            this.paiHui_weufijoweoiiweo();
            this.scheduleOnce(() => {
              // this.otherFai_jefoiwoieofoiwiowe();
              this.fazijie_eifiowiojefiow = false;
              this.kaisfapai_ieoifwiofwioei();
            }, 0.22);
          }
        }

        paiHui_weufijoweoiiweo() {
          let zhoongNode = this.zhongwefWoisoeowoefos.children;

          for (let i = 0; i < zhoongNode.length; i++) {
            if (zhoongNode[i].children[0] != undefined) {
              this.changePosesoeoiweofwoiefwwoei2(zhoongNode[i].children[0], this.moveNode_234fwsefwinsoieoNIdoeoi);
              let noed = zhoongNode[i].children[0];
              tween(noed).to(0.2, {
                position: noed.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                  error: Error()
                }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew).kaisPoswoeoeofwoeofowe
              }).start();
            }
          }
        }

        otherFai_jefoiwoieofoiwiowe() {// let pos = this.changePosesoeoiweofwoiefwwoei(this.fapaiwefWoisoerwfeowoefos, this.moveNode_234fwsefwinsoieoNIdoeoi);
          // let pai = instantiate();
        }

        start() {
          this.kaishiyouxiowqiioweofowoiew();
          this.paizhiAllwoeoeifowowe = this.getPaizhiAll12312fwef3r();
          this.playkaisoewoiwoiwefwwofoiww();
        }

        playkaisoewoiwoiwefwwofoiww() {
          for (let i = 0; i < 5; i++) {
            let a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            a.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;
            a.setPosition(this.shangPos_weifiwoiweioodifer[i]);
            let b = a.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
              error: Error()
            }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
            b.isMoveweofoiweofoiwofso = false;
          }

          for (let i = 0; i < 5; i++) {
            let a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            a.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;
            a.setPosition(this.xiaPos_wiefoiweoiis[i]);
            let b = a.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
              error: Error()
            }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
            b.kaisPoswoeoeofwoeofowe = this.xiaPos_wiefoiweoiis[i];
            b.paizhiOIIIWeoifoiweoifuiwe = this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo];
            b.isMoveweofoiweofoiwofso = true;
            this.setSprite_woeioweoifoiwergeiuo(a, b.paizhiOIIIWeoifoiweoifuiwe);
            this.paiIndex_esioiwfoiwfeoioiefwo++;
          }

          this.kaisfapai_ieoifwiofwioei();
        }

        kaisfapai_ieoifwiofwioei() {
          let pos = this.changePosesoeoiweofwoiefwwoei(this.fapaiwefWoisoerwfeowoefos, this.moveNode_234fwsefwinsoieoNIdoeoi);

          if (this.fazijie_eifiowiojefiow) {
            //发牌给自己
            let pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            pai.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;
            pai.setPosition(pos);
            tween(pai).to(0.2, {
              position: this.xiaPos_wiefoiweoiis[5]
            }).call(() => {
              let b = pai.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                error: Error()
              }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
              b.kaisPoswoeoeofwoeofowe = this.xiaPos_wiefoiweoiis[5];
              b.paizhiOIIIWeoifoiweoifuiwe = this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo];
              b.isMoveweofoiweofoiwofso = true;
              this.setSprite_woeioweoifoiwergeiuo(pai, b.paizhiOIIIWeoifoiweoifuiwe);
              this.paiIndex_esioiwfoiwfeoioiefwo++;
              this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
            }).start();
          } else {
            //发牌给对手
            let pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            pai.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;
            pai.setPosition(pos);
            tween(pai).to(0.2, {
              position: this.shangPos_weifiwoiweioodifer[5]
            }).call(() => {}).start();
          }
        }

        setSprite_woeioweoifoiwergeiuo(node, zhi) {
          let a = this.byzhi_name_oeiofioweioweoi(zhi);
          resources.load(a + "/spriteFrame", SpriteFrame, (err, res) => {
            node.getComponent(Sprite).spriteFrame = res;
          });
        }

        byzhi_name_oeiofioweioweoi(zhi) {
          let shu = zhi % 13;

          if (shu == 0) {
            shu = 13;
          }

          let se = Math.floor(zhi / 13);
          let a = "a";

          if (se == 0) {
            a = "a";
          } else if (se == 1) {
            a = "b";
          } else if (se == 2) {
            a = "c";
          } else if (se == 3) {
            a = "d";
          }

          return a + shu;
        }

        getPaizhiAll12312fwef3r() {
          let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]; //打乱牌

          return all;
        } //初始化


        kaishiyouxiowqiioweofowoiew() {
          this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
          this.fazijie_eifiowiojefiow = true;
          this.paiIndex_esioiwfoiwfeoioiefwo = 0;
          this.shangWoisoeowoefos.children.forEach(item => {
            item.active = false;
            let pos = this.changePosesoeoiweofwoiefwwoei(item, this.moveNode_234fwsefwinsoieoNIdoeoi);
            this.shangPos_weifiwoiweioodifer.push(pos);
          });
          this.xiaSelfrtghntWoisoeowoefos.children.forEach(item => {
            item.active = false;
            this.xiaPos_wiefoiweoiis.push(this.changePosesoeoiweofwoiefwwoei(item, this.moveNode_234fwsefwinsoieoNIdoeoi));
          }); // console.log("手牌的坐标", this.xiaPos_wiefoiweoiis);
        }

        update(deltaTime) {} //局部坐标转换


        changePosesoeoiweofwoiefwwoei(node, parent) {
          var pos1 = node.parent.getComponent(UITransform).convertToWorldSpaceAR(node.getPosition());
          var pos2 = parent.parent.getComponent(UITransform).convertToNodeSpaceAR(pos1);
          return pos2;
        }

        changePosesoeoiweofwoiefwwoei2(node, parent) {
          var pos1 = node.parent.getComponent(UITransform).convertToWorldSpaceAR(node.getPosition());
          var pos2 = parent.parent.getComponent(UITransform).convertToNodeSpaceAR(pos1);
          node.parent = parent;
          node.setPosition(pos2);
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "yuzhiti_pai_soieoNIdoeoi", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "moveNode_234fwsefwinsoieoNIdoeoi", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maskNode_wefwe234fwsefwinsoieoNIdoeoi", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "othermoveNode_234fwsefwinsoieoNIdoeoi", [_dec10], {
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
//# sourceMappingURL=d24533cdfbce2b04b8af948e7680f5f81c946836.js.map