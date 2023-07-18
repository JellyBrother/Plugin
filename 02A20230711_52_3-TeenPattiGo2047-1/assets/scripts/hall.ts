import { _decorator, Component, director, Label, Node, Sprite } from 'cc';
import selfDatas from './selfDatas';
const { ccclass, property } = _decorator;

@ccclass('hall')
export class hall extends Component {

    @property(Node)
    node1: Node = null

    @property(Node)
    node2: Node = null

    @property(Node)
    node3: Node = null

    @property(Label)
    labName: Label = null

    @property(Label)
    labId: Label = null

    @property(Label)
    labScore: Label = null

    @property(Label)
    labScore2: Label = null

    @property(Sprite)
    sprHead: Sprite = null

    onCloseAllNode() {
        this.node1.active = false;
        this.node2.active = false;
        this.node3.active = false;
    }

    onOpenNode1() {
        this.node1.active = true;
    }

    onOpenNode2() {
        this.node2.active = true;
    }

    onOpenNode3() {
        this.node3.active = true;
    }

    onGoGame() {
        director.loadScene("eagvzbxzr3");
    }

    start() {
        if (selfDatas.name == null) {
            selfDatas.name = selfDatas.generateEnglishName();
            selfDatas.head = selfDatas.getRandomNumber(0, 4);
            selfDatas.score = selfDatas.getRandomNumber(10000, 99999);
            selfDatas.id = selfDatas.getRandomNumber(10000121, 99999121);
        }
        this.labId.string = "Id:" + selfDatas.id;
        this.labScore.string = selfDatas.score;
        this.labScore2.string = selfDatas.score;
        this.labName.string = selfDatas.name;
        selfDatas.changeSpr("head/" + selfDatas.head, this.sprHead.node);
    }



    update(deltaTime: number) {

    }
}

