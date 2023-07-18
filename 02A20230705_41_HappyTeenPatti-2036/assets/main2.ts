import { _decorator, Component, director, Label, Node, Sprite, SpriteFrame } from 'cc';
import Data from './Data';
const { ccclass, property } = _decorator;

@ccclass('main2')
export class main2 extends Component {

    @property(Node)
    btnGame1: Node = null

    @property(Node)
    btnGame2: Node = null

    @property(Label)
    idLab: Label = null

    @property(Label)
    nameLab: Label = null

    @property(Label)
    scoreLab: Label = null

    @property(Sprite)
    headSpr: Sprite = null

    @property(SpriteFrame)
    headArr: SpriteFrame[] = []

    @property(Node)
    hallNode: Node = null



    start() {
        this.btnGame1.on(Node.EventType.TOUCH_START, this.gameCallback, this);
        this.btnGame2.on(Node.EventType.TOUCH_START, this.gameCallback, this);

        if (Data.name == null) {
            Data.name = this.getRandomName();
            Data.head = this.getRandomNumber(0, 4);
            Data.id = this.getRandomNumber(8989989, 18989989);
            Data.score = this.getRandomNumber(10000, 90000);
        } else {
            this.hallNode.active = true;
        }

        this.idLab.string = "ID:" + Data.id;
        this.nameLab.string = Data.name;
        this.scoreLab.string = Data.score;
        this.headSpr.spriteFrame = this.headArr[Data.head];
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomName(): string {
        const names: string[] = ["John", "Emily", "Michael", "Emma", "David", "Olivia", "Daniel", "Sophia"];
        const randomIndex: number = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }

    gameCallback() {
        director.loadScene("t3rlts2");
    }

}

