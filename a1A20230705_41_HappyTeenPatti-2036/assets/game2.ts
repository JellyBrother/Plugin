import { _decorator, Component, director, instantiate, Label, Node, Sprite, SpriteFrame, Tween, tween, UIOpacity, UITransform, Vec3 } from 'cc';
import { Player } from './res/Player';
const { ccclass, property } = _decorator;

@ccclass('game2')
export class game2 extends Component {

    @property(Node)
    allPlayers: Node[] = []

    @property(Node)
    cardAct: Node = null

    @property(SpriteFrame)
    cardSF: SpriteFrame[] = []

    @property(SpriteFrame)
    xingSF: SpriteFrame[] = []

    @property(Node)
    btnPack: Node = null

    @property(Node)
    btnShow: Node = null

    @property(Node)
    btnBack: Node = null

    nowIndex = 0;
    isSelf: boolean;


    start() {
        this.initData();
        this.init();
        this.allPlayers.forEach((item, i) => {
            if (i == 4) {
                item.getComponent(Player).setShow(1);
            } else {
                item.getComponent(Player).setShow();
            }
        })
    }

    protected onEnable(): void {
        this.btnBack.on(Node.EventType.TOUCH_END, this.btnBackCall, this);
        this.btnShow.on(Node.EventType.TOUCH_END, this.btnShowCall, this);
        this.btnPack.on(Node.EventType.TOUCH_END, this.btnPackCall, this);
    }

    btnShowCall() {
        if (this.isSelf) {
            this.isSelf = false;
            Tween.stopAllByTag(-1);
            let player = this.allPlayers[4].getComponent(Player);
            player.cdNode.active = false;
            const win = this.getRandomNumber(0, 4);
            this.allPlayers.forEach((item, i) => {
                let player = item.getComponent(Player);
                player.cardsNode.children.forEach((item2) => {
                    item2.getComponent(Sprite).spriteFrame = this.cardSF[this.getRandomNumber(1, this.cardSF.length - 1)];
                })
                player.loseNode.active = true;
                player.parkNode.active = false;
                player.typeNode.active = true;
                player.typeNode.children[0].getComponent(Sprite).spriteFrame = this.xingSF[this.getRandomNumber(1, this.xingSF.length - 1)];
                if (i == win) {
                    player.loseNode.active = false;
                }
            });

            tween(this.node).delay(2.56).call(() => {
                this.initData();
                this.init();
            }).start();
        }
    }

    btnPackCall() {
        if (this.isSelf) {
            this.isSelf = false;
            Tween.stopAllByTag(-1);
            let player = this.allPlayers[4].getComponent(Player);
            player.parkNode.active = true;
            player.cdNode.active = false;
            this.nowIndex++;
            this.xunhuan();
        }
    }

    btnBackCall() {
        director.loadScene("dtmsjr1");
    }

    initData() {
        this.nowIndex = 0;
        this.isSelf = false;
    }

    init() {
        for (let i = 0; i < 5; i++) {
            const player = this.allPlayers[i].getComponent(Player);
            player.chipNode.active = false;
            player.typeNode.active = false;
            player.loseNode.active = false;
            for (let j = 0; j < 3; j++) {
                player.cardsNode.children[j].active = false;
                player.cardsNode.children[j].getComponent(Sprite).spriteFrame = this.cardSF[0];
            }
        }
        this.cardAction();
    }

    cardAction() {
        for (let i = 0; i < 3; i++) {
            tween(this.node).delay(i * 1).call(() => {
                for (let j = 0; j < 5; j++) {
                    const cards = this.allPlayers[j].getComponent(Player).cardsNode;
                    const card = instantiate(this.cardAct);
                    card.parent = this.node;
                    card.active = true;
                    card.scale = new Vec3(1, 0, 1);
                    const pos = this.chagePos(card, cards);
                    tween(this.node).delay(j * 0.2).call(() => {
                        tween(card).to(0.2, { position: pos, scale: new Vec3(1, 1, 1) }).call(() => {
                            card.removeFromParent();
                            cards.children[i].active = true;
                        }).start();
                    }).start();
                }
            }).start();

        }
        this.scheduleOnce(() => {
            this.xunhuan();
        }, 3);
    }

    chagePos(node1: Node, node2: Node) {
        let p = node2.parent.getComponent(UITransform).convertToWorldSpaceAR(node2.getPosition());
        return node1.parent.getComponent(UITransform).convertToNodeSpaceAR(p);
    }

    xunhuan() {
        let i = this.nowIndex % 5;
        if (i == 4) {
            this.isSelf = true;
        }
        let player = this.allPlayers[i].getComponent(Player);
        let zhuan = player.cdNode.getComponent(Sprite);
        zhuan.fillRange = 1;
        zhuan.node.active = true;

        player.chipNode.active = false;
        player.parkNode.active = false;
        player.typeNode.active = false;
        tween(zhuan).by(2, { fillRange: -1 }).call(() => {
            this.isSelf = false;
            const end = this.getRandomNumber(1, 3);
            switch (end) {
                case 1:
                    const chip = player.chipNode;
                    chip.active = true;
                    chip.getComponent(UIOpacity).opacity = 0;
                    chip.children[1].getComponent(Label).string = this.getRandomNumber(10, 99) + "";
                    tween(chip.getComponent(UIOpacity)).by(0.345, { opacity: 255 }).call(() => {
                        this.nowIndex++;
                        this.xunhuan();
                    }).start();
                    break;
                case 2:
                    player.parkNode.active = true;
                    this.nowIndex++;
                    this.xunhuan();
                    break;
                case 3:
                    player.typeNode.active = true;
                    player.typeNode.children[0].getComponent(Sprite).spriteFrame = this.xingSF[0];
                    this.nowIndex++;
                    this.xunhuan();
                    break;
            }
        }).start();
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

