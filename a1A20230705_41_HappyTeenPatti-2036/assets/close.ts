import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('close')
export class close extends Component {

    @property(Node)
    btnClose1: Node = null

    @property(Node)
    btnClose2: Node = null

    @property(Node)
    mask: Node = null

    @property(Node)
    viewNode: Node = null

    start() {
        this.btnClose1.on(Node.EventType.TOUCH_START, this.closeCallback, this);
        this.btnClose2.on(Node.EventType.TOUCH_START, this.closeCallback, this);
    }

    closeCallback() {
        this.mask.active = false;
        this.viewNode.active = false;
    }
}

