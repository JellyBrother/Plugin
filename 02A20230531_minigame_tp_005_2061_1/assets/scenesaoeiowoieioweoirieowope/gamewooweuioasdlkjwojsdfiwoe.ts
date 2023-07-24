import { _decorator, Component, director, game, instantiate, Node, resources, Sprite, SpriteFrame, tween, UITransform, v3 } from 'cc';
import { paiYidongowoefowfowwoiew } from './paiYidongowoefowfowwoiew';
const { ccclass, property } = _decorator;

@ccclass('gamewooweuioasdlkjwojsdfiwoe')
export class gamewooweuioasdlkjwojsdfiwoe extends Component {

    @property(Node)
    shangWoisoeowoefos: Node = null

    @property(Node)
    xiaSelfrtghntWoisoeowoefos: Node = null

    @property(Node)
    zhongwefWoisoeowoefos: Node = null

    @property(Node)
    fapaiwefWoisoerwfeowoefos: Node = null

    @property(Node)
    winsoieoNIdoeoi: Node = null

    @property(Node)
    yuzhiti_pai_soieoNIdoeoi: Node = null

    @property(Node)
    moveNode_234fwsefwinsoieoNIdoeoi: Node = null

    @property(Node)
    maskNode_wefwe234fwsefwinsoieoNIdoeoi: Node = null

    @property(Node)
    othermoveNode_234fwsefwinsoieoNIdoeoi: Node = null


    paizhiAllwoeoeifowowe = []

    shangPos_weifiwoiweioodifer = []

    xiaPos_wiefoiweoiis = []

    paiIndex_esioiwfoiwfeoioiefwo = 0;

    fazijie_eifiowiojefiow = true;

    winTimes_jeiofwofiweoifios = 0;

    protected onLoad(): void {
        game.on("jiancejieguo_weiowefweiofjiowiofg", this.endcheck_efoiweoioiefoiwe, this);
    }

    xiaopai_ehfwfiouwfiouwe() {
        this.scheduleOnce(() => {
            let zhoongNode = this.zhongwefWoisoeowoefos.children;
            for (let i = 0; i < 3; i++) {
                zhoongNode[i].children[0].destroy();
            }
            this.winTimes_jeiofwofiweoifios++;
            if (this.winTimes_jeiofwofiweoifios == 2) {
                this.winsoieoNIdoeoi.active = true;
                this.scheduleOnce(() => {
                  
                    this.init_oiwefwoifjiweiofowie();
                }, 1);
            } else {
                this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = false;
            }
        }, 1);
    }

    endcheck_efoiweoioiefoiwe() {
        this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
    
        let zhoongNode = this.zhongwefWoisoeowoefos.children;



        if (zhoongNode[3].children[0] == undefined) {
            

            let num = 0;
            for (let i = 0; i < 3; i++) {
                if (zhoongNode[i].children[0] != undefined) {
                    num++;
                }
            }

            if (num == 3) {
                
                let end = []
                for (let i = 0; i < 3; i++) {
                    let shu = zhoongNode[i].children[0].getComponent(paiYidongowoefowfowwoiew).paizhiOIIIWeoifoiweoifuiwe;
                    let zhi = shu % 13;
                    if (zhi == 0) {
                        zhi = 13;
                    }
                    end.push(zhi);
                }
                end.sort(function (a, b) { return a - b });
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
           
            this.paiHui_weufijoweoiiweo();
            zhoongNode[3].children[0].parent = zhoongNode[4];
            this.scheduleOnce(() => {
                

                this.scheduleOnce(() => {
                    this.fazijie_eifiowiojefiow = false;
                    this.kaisfapai_ieoifwiofwioei();
                }, 0.22);

                
                let shou = this.moveNode_234fwsefwinsoieoNIdoeoi.children;
                for (let i = 0; i < shou.length; i++) {
                    tween(shou[i]).to(0.2, { position: this.xiaPos_wiefoiweoiis[i] }).call(() => {
                        let card = shou[i].getComponent(paiYidongowoefowfowwoiew)
                        card.kaisPoswoeoeofwoeofowe = this.xiaPos_wiefoiweoiis[i];
                        card.isMoveweofoiweofoiwofso = true;
                    }).start();
                }
            }, 0.5);

        }
    }

    paiHui_weufijoweoiiweo() {
        let zhoongNode = this.zhongwefWoisoeowoefos.children;
        for (let i = 0; i < 3; i++) {
            if (zhoongNode[i].children[0] != undefined) {
                let noed = zhoongNode[i].children[0];
                let card = noed.getComponent(paiYidongowoefowfowwoiew);
                card.isMoveweofoiweofoiwofso = true;
                this.changePosesoeoiweofwoiefwwoei2(zhoongNode[i].children[0], this.moveNode_234fwsefwinsoieoNIdoeoi);
                tween(noed).to(0.2, { position: noed.getComponent(paiYidongowoefowfowwoiew).kaisPoswoeoeofwoeofowe }).start();
            }
        }
    }


    start() {
        this.init_oiwefwoifjiweiofowie();
    }

    init_oiwefwoifjiweiofowie() {
        this.othermoveNode_234fwsefwinsoieoNIdoeoi.removeAllChildren();
        for (let i = 0; i < this.zhongwefWoisoeowoefos.children.length; i++) {
            this.zhongwefWoisoeowoefos.children[i].removeAllChildren();
        }

        this.winsoieoNIdoeoi.active = false;
        this.kaishiyouxiowqiioweofowoiew();
        this.paizhiAllwoeoeifowowe = [];
        this.paizhiAllwoeoeifowowe = this.getPaizhiAll12312fwef3r();
        this.playkaisoewoiwoiwefwwofoiww();
    }

    playkaisoewoiwoiwefwwofoiww() {
        for (let i = 0; i < 5; i++) {
            let a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            a.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;
            a.setPosition(this.shangPos_weifiwoiweioodifer[i]);
            let b = a.getComponent(paiYidongowoefowfowwoiew);
            b.isMoveweofoiweofoiwofso = false;
        }

        for (let i = 0; i < 5; i++) {
            let a = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            a.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;
            a.setPosition(this.xiaPos_wiefoiweoiis[i]);
            let b = a.getComponent(paiYidongowoefowfowwoiew);
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
         
            let pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            pai.parent = this.moveNode_234fwsefwinsoieoNIdoeoi;
            pai.setPosition(pos);
            tween(pai).to(0.2, { position: this.xiaPos_wiefoiweoiis[5] }).call(() => {
                let b = pai.getComponent(paiYidongowoefowfowwoiew);
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
          

            let pai = instantiate(this.yuzhiti_pai_soieoNIdoeoi);
            pai.parent = this.othermoveNode_234fwsefwinsoieoNIdoeoi;
            pai.setPosition(pos);
            tween(pai).to(0.2, { position: this.shangPos_weifiwoiweioodifer[5] }).call(() => {
                let time = this.fullClose_weuweiuwefwoeifi(2, 5);
                time = 1;
                this.scheduleOnce(() => {
                   
                    let i = this.fullClose_weuweiuwefwoeifi(0, 6);
                    let yidong = this.othermoveNode_234fwsefwinsoieoNIdoeoi.children[i];
                    if (this.paiIndex_esioiwfoiwfeoioiefwo >= 51) {
                        this.paiIndex_esioiwfoiwfeoioiefwo = 0;
                    }
                    this.setSprite_woeioweoifoiwergeiuo(yidong, this.paizhiAllwoeoeifowowe[this.paiIndex_esioiwfoiwfeoioiefwo]);
                    tween(yidong).to(0.2, {
                        position: this.changePosesoeoiweofwoiefwwoei(this.zhongwefWoisoeowoefos.children[3],
                            this.othermoveNode_234fwsefwinsoieoNIdoeoi)
                    }).call(() => {
                      
                        yidong.parent = this.zhongwefWoisoeowoefos.children[4];
                        yidong.setPosition(v3(0, 0));
                        this.fazijie_eifiowiojefiow = true;
                        this.paiIndex_esioiwfoiwfeoioiefwo++;
                        let other = this.othermoveNode_234fwsefwinsoieoNIdoeoi.children;
                        for (let i = 0; i < other.length; i++) {
                            tween(other[i]).to(0.5, { position: this.shangPos_weifiwoiweioodifer[i] }).start();
                        }
                        this.scheduleOnce(() => {
                            this.kaisfapai_ieoifwiofwioei();
                        }, 0.5);
                    }).start();
                }, time);

            }).start();
        }
    }

   
    fullClose_weuweiuwefwoeifi(n, m) {
        var result = Math.random() * (m + 1 - n) + n;
        while (result > m) {
            result = Math.random() * (m + 1 - n) + n;
        }
        return Math.floor(result);
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
            a = "a"
        } else if (se == 1) {
            a = "b"
        } else if (se == 2) {
            a = "c"
        } else if (se == 3) {
            a = "d"
        }

        return a + shu;
    }

    shuffleArray_hiewfiwufueufiwuefiu(array: number[]): number[] {
        let temp: number = array[0];
        for (let i = 1; i < array.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }


    getPaizhiAll12312fwef3r() {
        let all = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
            28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52];

        
        all = this.shuffleArray_hiewfiwufueufiwuefiu(all);
        return all;
    }



   
    kaishiyouxiowqiioweofowoiew() {
        this.winTimes_jeiofwofiweoifios = 0;
        this.maskNode_wefwe234fwsefwinsoieoNIdoeoi.active = true;
        this.fazijie_eifiowiojefiow = true;
        this.paiIndex_esioiwfoiwfeoioiefwo = 0;
        this.shangWoisoeowoefos.children.forEach((item) => {
            item.active = false;
            let pos = this.changePosesoeoiweofwoiefwwoei(item, this.moveNode_234fwsefwinsoieoNIdoeoi);
            this.shangPos_weifiwoiweioodifer.push(pos);
        });


        this.xiaSelfrtghntWoisoeowoefos.children.forEach((item) => {
            item.active = false;
            this.xiaPos_wiefoiweoiis.push(this.changePosesoeoiweofwoiefwwoei(item, this.moveNode_234fwsefwinsoieoNIdoeoi));
        });
    }

    update(deltaTime: number) {

    }



   
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


    ongotomainPlayeoweifwoifiwoeiofjoiijfwe() {
        director.loadScene("mainwioefiowovfoiweosaewoOIWEIF");
    }
}

