System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, game, instantiate, Node, resources, Sprite, SpriteFrame, tween, UITransform, v3, paiYidongowoefowfowwoiew, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, gamewooweuioasdlkjwojsdfiwoe;

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
      v3 = _cc.v3;
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
        constructor() {
          super(...arguments);

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
          this.winTimes_jeiofwofiweoifios = 0;
        }

        onLoad() {
          game.on("jiancejieguo_weiowefweiofjiowiofg", this.endcheck_efoiweoioiefoiwe, this);
        }

        xiaopai_ehfwfiouwfiouwe() {
          this.scheduleOnce(() => {
            var zhoongNode = this.zhongwefWoisoeowoefos.children;

            for (var i = 0; i < 3; i++) {
              zhoongNode[i].children[0].destroy();
            }

            this.winTimes_jeiofwofiweoifios++;

            if (this.winTimes_jeiofwofiweoifios == 2) {
              this.winsoieoNIdoeoi.active = true;
              this.scheduleOnce(() => {
                //重新开始
                this.init_oiwefwoifjiweiofowie();
              }, 1);
            } else {
              this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
            }
          }, 1);
        }

        endcheck_efoiweoioiefoiwe() {
          var _this = this;

          this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
          console.log("接到消息了么");
          var zhoongNode = this.zhongwefWoisoeowoefos.children;

          if (zhoongNode[3].children[0] == undefined) {
            //看是否满三张牌
            var num = 0;

            for (var i = 0; i < 3; i++) {
              if (zhoongNode[i].children[0] != undefined) {
                num++;
              }
            }

            if (num == 3) {
              //判断是否削牌
              var end = [];

              for (var _i = 0; _i < 3; _i++) {
                var shu = zhoongNode[_i].children[0].getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                  error: Error()
                }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew).paizhiOIIIWeoifoiweoifuiwe;

                var zhi = shu % 13;

                if (zhi == 0) {
                  zhi = 13;
                }

                end.push(zhi);
              }

              end.sort(function (a, b) {
                return a - b;
              });

              if (end[0] + 1 == end[1] && end[0] + 2 == end[2]) {
                this.xiaopai_ehfwfiouwfiouwe();
              } else if (end[0] == end[1] && end[1] == end[2]) {
                this.xiaopai_ehfwfiouwfiouwe();
              } else {
                this.scheduleOnce(() => {
                  this.paiHui_weufijoweoiiweo();
                  this.scheduleOnce(() => {
                    this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
                  }, 0.22);
                }, 1);
              }
            } else {
              this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
            }
          } else {
            //对手回合
            //没有消掉的牌回到手牌
            this.paiHui_weufijoweoiiweo();
            zhoongNode[3].children[0].parent = zhoongNode[4];
            this.scheduleOnce(() => {
              // zhoongNode[3].children[0].destroy();
              this.scheduleOnce(() => {
                this.fazijie_eifiowiojefiow = false;
                this.kaisfapai_ieoifwiofwioei();
              }, 0.22); //整理手牌

              var shou = this.moveNode_234fwsefwinsoieoNIdoeoi.children;

              var _loop = function _loop(_i2) {
                tween(shou[_i2]).to(0.2, {
                  position: _this.xiaPos_wiefoiweoiis[_i2]
                }).call(() => {
                  var card = shou[_i2].getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                    error: Error()
                  }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);

                  card.kaisPoswoeoeofwoeofowe = _this.xiaPos_wiefoiweoiis[_i2];
                  card.isMoveweofoiweofoiwofso = true;
                }).start();
              };

              for (var _i2 = 0; _i2 < shou.length; _i2++) {
                _loop(_i2);
              }
            }, 0.5);
          }
        }

        paiHui_weufijoweoiiweo() {
          var zhoongNode = this.zhongwefWoisoeowoefos.children;

          for (var i = 0; i < 3; i++) {
            if (zhoongNode[i].children[0] != undefined) {
              var noed = zhoongNode[i].children[0];
              var card = noed.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                error: Error()
              }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
              card.isMoveweofoiweofoiwofso = true;
              this.changePosesoeoiweofwoiefwwoei2(zhoongNode[i].children[0], this.moveNode_234fwsefwinsoieoNIdoeoi);
              tween(noed).to(0.2, {
                position: noed.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                  error: Error()
                }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew).kaisPoswoeoeofwoeofowe
              }).start();
            }
          }
        }

        start() {
          this.init_oiwefwoifjiweiofowie();
        }

        init_oiwefwoifjiweiofowie() {
          this.othermoveNode_234fwsefwinsoieoNIdoeoi.removeAllChildren();
          this.zhongwefWoisoeowoefos.removeAllChildren();
          this.winsoieoNIdoeoi.active = false;
          this.kaishiyouxiowqiioweofowoiew();
          this.paizhiAllwoeoeifowowe = this.getPaizhiAll12312fwef3r();
          this.playkaisoewoiwoiwefwwofoiww();
        }

        playkaisoewoiwoiwefwwofoiww() {
          for (var i = 0; i < 5; i++) {
            var a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            a.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;
            a.setPosition(this.shangPos_weifiwoiweioodifer[i]);
            var b = a.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
              error: Error()
            }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
            b.isMoveweofoiweofoiwofso = false;
          }

          for (var _i3 = 0; _i3 < 5; _i3++) {
            var _a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);

            _a.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;

            _a.setPosition(this.xiaPos_wiefoiweoiis[_i3]);

            var _b = _a.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
              error: Error()
            }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);

            _b.kaisPoswoeoeofwoeofowe = this.xiaPos_wiefoiweoiis[_i3];
            _b.paizhiOIIIWeoifoiweoifuiwe = this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo];
            _b.isMoveweofoiweofoiwofso = true;
            this.setSprite_woeioweoifoiwergeiuo(_a, _b.paizhiOIIIWeoifoiweoifuiwe);
            this.paiIndex_esioiwfoiwfeoioiefwo++;
          }

          this.kaisfapai_ieoifwiofwioei();
        }

        kaisfapai_ieoifwiofwioei() {
          var pos = this.changePosesoeoiweofwoiefwwoei(this.fapaiwefWoisoerwfeowoefos, this.moveNode_234fwsefwinsoieoNIdoeoi);

          if (this.fazijie_eifiowiojefiow) {
            //发牌给自己
            var pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            pai.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;
            pai.setPosition(pos);
            tween(pai).to(0.2, {
              position: this.xiaPos_wiefoiweoiis[5]
            }).call(() => {
              var b = pai.getComponent(_crd && paiYidongowoefowfowwoiew === void 0 ? (_reportPossibleCrUseOfpaiYidongowoefowfowwoiew({
                error: Error()
              }), paiYidongowoefowfowwoiew) : paiYidongowoefowfowwoiew);
              b.kaisPoswoeoeofwoeofowe = this.xiaPos_wiefoiweoiis[5];

              if (this.paiIndex_esioiwfoiwfeoioiefwo >= 51) {
                this.paiIndex_esioiwfoiwfeoioiefwo = 0;
              }

              b.paizhiOIIIWeoifoiweoifuiwe = this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo];
              b.isMoveweofoiweofoiwofso = true;
              this.setSprite_woeioweoifoiwergeiuo(pai, b.paizhiOIIIWeoifoiweoifuiwe);
              this.paiIndex_esioiwfoiwfeoioiefwo++;
              this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
            }).start();
          } else {
            //发牌给对手
            var _pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);

            _pai.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;

            _pai.setPosition(pos);

            tween(_pai).to(0.2, {
              position: this.shangPos_weifiwoiweioodifer[5]
            }).call(() => {
              var time = this.fullClose_weuweiuwefwoeifi(2, 5);
              time = 1;
              this.scheduleOnce(() => {
                //随机一张牌，放到销毁区
                var i = this.fullClose_weuweiuwefwoeifi(0, 6);
                var yidong = this.othermoveNode_234fwsefwinsoieoNIdoeoi.children[i];

                if (this.paiIndex_esioiwfoiwfeoioiefwo >= 51) {
                  this.paiIndex_esioiwfoiwfeoioiefwo = 0;
                }

                this.setSprite_woeioweoifoiwergeiuo(yidong, this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo]);
                tween(yidong).to(0.2, {
                  position: this.changePosesoeoiweofwoiefwwoei(this.zhongwefWoisoeowoefos.children[3], this.othermoveNode_234fwsefwinsoieoNIdoeoi)
                }).call(() => {
                  // yidong.destroy();
                  yidong.parent = this.zhongwefWoisoeowoefos.children[4];
                  yidong.setPosition(v3(0, 0));
                  this.fazijie_eifiowiojefiow = true;
                  this.paiIndex_esioiwfoiwfeoioiefwo++;
                  var other = this.othermoveNode_234fwsefwinsoieoNIdoeoi.children;

                  for (var _i4 = 0; _i4 < other.length; _i4++) {
                    tween(other[_i4]).to(0.5, {
                      position: this.shangPos_weifiwoiweioodifer[_i4]
                    }).start();
                  }

                  this.scheduleOnce(() => {
                    this.kaisfapai_ieoifwiofwioei();
                  }, 0.5);
                }).start();
              }, time);
            }).start();
          }
        } //(0,5) => 包含0， 不带5


        fullClose_weuweiuwefwoeifi(n, m) {
          var result = Math.random() * (m + 1 - n) + n;

          while (result > m) {
            result = Math.random() * (m + 1 - n) + n;
          }

          return Math.floor(result);
        }

        setSprite_woeioweoifoiwergeiuo(node, zhi) {
          var a = this.byzhi_name_oeiofioweioweoi(zhi);
          resources.load(a + "/spriteFrame", SpriteFrame, (err, res) => {
            node.getComponent(Sprite).spriteFrame = res;
          });
        }

        byzhi_name_oeiofioweioweoi(zhi) {
          var shu = zhi % 13;

          if (shu == 0) {
            shu = 13;
          }

          var se = Math.floor(zhi / 13);
          var a = "a";

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

        shuffleArray_haehfueuiofwueiofuweu(array) {
          var temp = [];
          var front = 0;
          var rear = array.length - 1;

          while (front < rear) {
            var swap = Math.floor(Math.random() * (rear + 1));
            var i = front + swap;
            var j = rear - 1 - swap;
            [array[front], array[i]] = [array[i], array[j]];
            [array[j], array[rear]] = [array[rear], array[front]];
            front = i;
            rear = j;
          }

          temp = array.map(item => item);
          return temp.concat(array.slice(front, rear + 1));
        }

        getPaizhiAll12312fwef3r() {
          var all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]; //打乱牌

          all = this.shuffleArray_haehfueuiofwueiofuweu(all);
          return all;
        } //初始化


        kaishiyouxiowqiioweofowoiew() {
          this.winTimes_jeiofwofiweoifios = 0;
          this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
          this.fazijie_eifiowiojefiow = true;
          this.paiIndex_esioiwfoiwfeoioiefwo = 0;
          this.shangWoisoeowoefos.children.forEach(item => {
            item.active = false;
            var pos = this.changePosesoeoiweofwoiefwwoei(item, this.moveNode_234fwsefwinsoieoNIdoeoi);
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
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "xiaSelfrtghntWoisoeowoefos", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "zhongwefWoisoeowoefos", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fapaiwefWoisoerwfeowoefos", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "winsoieoNIdoeoi", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "yuzhiti_pai_soieoNIdoeoi", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "moveNode_234fwsefwinsoieoNIdoeoi", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "maskNode_wefwe234fwsefwinsoieoNIdoeoi", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "othermoveNode_234fwsefwinsoieoNIdoeoi", [_dec10], {
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
//# sourceMappingURL=4d7ad0870e5cd8a70df0b2fa3599142a09bef86f.js.map