import { _decorator, Component, Label, Node, Prefab, Sprite } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerGame')
export class PlayerGame extends Component {

    @property(Sprite)
    sprHead: Sprite = null

    @property(Label)
    labScore: Label = null

    @property(Label)
    labName: Label = null

    @property(Node)
    nodeCards: Node = null

    @property(Node)
    nodeChip: Node = null

    @property(Node)
    nodeChip2: Node = null

    @property(Node)
    nodeWin: Node = null

    @property(Label)
    labType: Label = null

    start() {

    }

    update(deltaTime: number) {

    }
}

