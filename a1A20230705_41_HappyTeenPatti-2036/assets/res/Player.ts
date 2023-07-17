import { _decorator, Component, Label, Node, resources, Sprite, SpriteFrame } from 'cc';
import Data from '../Data';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property(Label)
    labName: Label = null

    @property(Label)
    labScore: Label = null

    @property(Sprite)
    headSpr: Sprite = null

    @property(Node)
    cardsNode: Node = null

    @property(Node)
    typeNode: Node = null

    @property(Node)
    chipNode: Node = null

    @property(Node)
    parkNode: Node = null

    @property(Node)
    loseNode: Node = null

    @property(Node)
    cdNode: Node = null

    setShow(data?) {
        if (data) {
            this.labName.string = Data.name;
            this.labScore.string = Data.score + "";
            resources.load(Data.head + "/spriteFrame", SpriteFrame, (err, res) => {
                this.headSpr.spriteFrame = res;
            })
        } else {
            this.labName.string = this.getRandomName();
            this.labScore.string = this.getRandomNumber(10000, 90000) + "";
            let num = this.getRandomNumber(0, 4);
            resources.load(num + "/spriteFrame", SpriteFrame, (err, res) => {
                this.headSpr.spriteFrame = res;
            })
        }
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomName(): string {
        const names: string[] = ["John", "Emily", "Michael", "Emma", "David", "Olivia", "Daniel", "Sophia"];
        const randomIndex: number = Math.floor(Math.random() * names.length);
        return names[randomIndex];
    }
}

