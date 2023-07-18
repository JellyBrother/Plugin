import { _decorator, Component, director, instantiate, Label, Node, resources, Sprite, SpriteFrame, Tween, tween, UITransform, v3 } from 'cc';
import { PlayerGame } from './PlayerGame';
import selfDatas from './selfDatas';
const { ccclass, property } = _decorator;

@ccclass('game')
export class game extends Component {

    @property(Node)
    card: Node = null

    @property(Node)
    playerAll: Node[] = []

    @property(Node)
    btnPark: Node = null

    @property(Node)
    btnShow: Node = null

    @property(Node)
    btnSeen: Node = null

    @property(Label)
    labScore: Label = null

    indexNow: number;
    selfIndex: number = 1;
    isSeen: any;
    allChip: any[];
    nowScore = 0;
    cardType = ["high", "trail", "colour", "pair", "sequence", "pure Squence"];

    start() {
        this.initData();
        this.initUI();
        this.playerAll.forEach((item, i) => {
            let script = item.getComponent(PlayerGame);
            if (i == this.selfIndex) {
                script.labScore.string = selfDatas.score;
                script.labName.string = selfDatas.name;
                selfDatas.changeSpr("head/" + selfDatas.head, script.sprHead.node);
            } else {
                script.labScore.string = selfDatas.getRandomNumber(10000, 99999) + "";
                let num = this.getRandomNumber(0, 4);
                selfDatas.changeSpr("head/" + num, script.sprHead.node);
                script.labName.string = selfDatas.generateEnglishName();
            }
        })

    }

    initData() {
        this.indexNow = 0;
        this.isSeen = false;
        this.allChip = [];
    }

    initUI() {
        this.labScore.string = "0";
        this.playerAll.forEach((item) => {
            const script = item.getComponent(PlayerGame);
            script.nodeCards.children.forEach((item2) => {
                this.changeSpr("img_pai", item2);
                item2.active = false;
                script.nodeChip2.active = false;
            })
            script.nodeWin.active = false;
            script.labType.node.active = false;
        })
        this.cardAction();
    }

    changeSpr(str: string, node: Node) {
        resources.load(str + "/spriteFrame", SpriteFrame, (err, res) => {
            node.getComponent(Sprite).spriteFrame = res;
        })
    }

    cardAction() {
        for (let i = 0; i < 3; i++) {
            this.scheduleOnce(() => {
                for (let j = 0; j < this.playerAll.length; j++) {
                    this.scheduleOnce(() => {
                        const script = this.playerAll[j].getComponent(PlayerGame);
                        const card = script.nodeCards.children[i];
                        const temp = instantiate(this.card);
                        temp.parent = this.card.parent;
                        temp.active = true;
                        const pos = this.changPos(temp, card);
                        tween(temp).to(0.1, { position: pos, angle: 360 }).call(() => {
                            card.active = true;
                            temp.destroy();
                            if (i == 2 && j == this.playerAll.length - 1) {
                                this.gameLoop();
                            }
                        }).start();
                    }, j * 0.1)
                }
            }, i * 0.1 * (this.playerAll.length));
        }
    }

    changPos(n1: Node, n2: Node) {
        let pos = n2.parent.getComponent(UITransform).convertToWorldSpaceAR(n2.getPosition());
        return n1.parent.getComponent(UITransform).convertToNodeSpaceAR(pos);
    }

    gameLoop() {
        if (this.indexNow == 4) {
            this.onShow();
            return;
        }
        let i = this.indexNow % this.playerAll.length;
        let time = this.getRandomNumber(1, 3);
        if (i == this.selfIndex) {
            this.btnPark.active = true;
            this.btnShow.active = true;
            if (!this.isSeen) {
                this.btnSeen.active = true;
            }
            time = 3;
        }
        let node = this.playerAll[i];
        let script = this.playerAll[i].getComponent(PlayerGame);

        tween(node).delay(time).call(() => {
            this.btnPark.active = false;
            this.btnShow.active = false;
            if (!this.isSeen) {
                this.btnSeen.active = false;
            }
            let chip = instantiate(script.nodeChip);
            let num = this.getRandomNumber(1, 2);
            this.changeSpr("chouma" + num, chip);
            let pos = this.changPos(this.btnPark, script.nodeChip);
            chip.parent = this.btnPark.parent;
            chip.setPosition(pos);
            let x = this.getRandomNumber(-200, 200);
            let y = this.getRandomNumber(-135, 135);
            this.allChip.push(chip);
            script.nodeChip2.active = true;
            let score = this.getRandomNumber(1, 99);
            this.nowScore += score;
            script.nodeChip2.children[0].getComponent(Label).string = score + "";
            this.labScore.string = this.nowScore + "";
            this.scheduleOnce(() => {
                script.nodeChip2.active = false;
            }, 1);
            tween(chip).to(0.1, { position: v3(x, y), scale: v3(1, 1) }).call(() => {
                this.indexNow++;
                this.gameLoop();
            }).start();
        }).start();
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onBack() {
        director.loadScene("kwnbdwjnl2");
    }

    onPark() {
        this.btnPark.active = false;
        this.btnShow.active = false;
        if (!this.isSeen) {
            this.btnSeen.active = false;
        }
        Tween.stopAll();
        this.indexNow++;
        this.gameLoop();
    }

    onSeen() {
        this.isSeen = true;
        this.btnPark.active = false;
        this.btnShow.active = false;
        this.btnSeen.active = false;
        Tween.stopAll();
        const script = this.playerAll[this.selfIndex].getComponent(PlayerGame);
        script.nodeCards.children.forEach((item2) => {
            let num = this.getRandomNumber(1, 52);
            this.changeSpr("puke (" + num + ")", item2);
        })

        let chip = instantiate(script.nodeChip);
        let num = this.getRandomNumber(1, 2);
        this.changeSpr("chouma" + num, chip);
        let pos = this.changPos(this.btnPark, script.nodeChip);
        chip.parent = this.btnPark.parent;
        chip.setPosition(pos);
        let x = this.getRandomNumber(-200, 200);
        let y = this.getRandomNumber(-135, 135);
        this.allChip.push(chip);
        script.nodeChip2.active = true;
        let score = this.getRandomNumber(1, 99);
        this.nowScore += score;
        script.nodeChip2.children[0].getComponent(Label).string = score + "";
        this.labScore.string = this.nowScore + "";
        this.scheduleOnce(() => {
            script.nodeChip2.active = false;
        }, 1);
        tween(chip).to(0.1, { position: v3(x, y), scale: v3(1, 1) }).call(() => {
            this.indexNow++;
            this.gameLoop();
        }).start();
    }

    onShow() {
        this.btnPark.active = false;
        this.btnShow.active = false;
        if (!this.isSeen) {
            this.btnSeen.active = false;
        }
        Tween.stopAll();
        this.playerAll.forEach((item, i) => {
            if (this.isSeen && i == this.selfIndex) {

            } else {
                const script = item.getComponent(PlayerGame);
                script.nodeCards.children.forEach((item2) => {
                    let num = this.getRandomNumber(1, 52);
                    this.changeSpr("puke (" + num + ")", item2);
                })
            }
            const script2 = item.getComponent(PlayerGame);
            script2.labType.node.active = true;
            script2.labType.string = this.cardType[this.getRandomNumber(0, this.cardType.length - 1)];
        })
        let win = this.getRandomNumber(0, 3);
        this.playerAll[win].getComponent(PlayerGame).nodeWin.active = true;
        this.allChip.forEach((item: Node) => {
            item.removeFromParent();
        });
        this.scheduleOnce(() => {
            this.initData();
            this.initUI();
        }, 2.2);
    }

    onBet() {
        this.btnPark.active = false;
        this.btnShow.active = false;
        this.btnSeen.active = false;
        Tween.stopAll();
        const script = this.playerAll[this.selfIndex].getComponent(PlayerGame);

        let chip = instantiate(script.nodeChip);
        let num = this.getRandomNumber(1, 2);
        this.changeSpr("chouma" + num, chip);
        let pos = this.changPos(this.btnPark, script.nodeChip);
        chip.parent = this.btnPark.parent;
        chip.setPosition(pos);
        let x = this.getRandomNumber(-200, 200);
        let y = this.getRandomNumber(-135, 135);
        this.allChip.push(chip);
        script.nodeChip2.active = true;
        let score = this.getRandomNumber(1, 99);
        this.nowScore += score;
        script.nodeChip2.children[0].getComponent(Label).string = score + "";
        this.labScore.string = this.nowScore + "";
        this.scheduleOnce(() => {
            script.nodeChip2.active = false;
        }, 1);
        tween(chip).to(0.1, { position: v3(x, y), scale: v3(1, 1) }).call(() => {
            this.indexNow++;
            this.gameLoop();
        }).start();
    }
}

