import { _decorator, Component, Node, Sprite, tween } from 'cc';
import { main2 } from './main2';
import Data from './Data';
const { ccclass, property } = _decorator;

@ccclass('main')
export class main extends Component {

    @property(Node)
    bar: Node = null

    @property(Node)
    btnLogin: Node = null

    @property(Node)
    hallNode: Node = null

    start() {
        this.btnLogin.active = false;
        if (Data.name == null) {
            this.hallNode.active = false;
        } else {
            this.hallNode.active = true;
        }
        this.btnLogin.on(Node.EventType.TOUCH_START, () => {
            this.hallNode.active = true;
        });

        tween(this.bar.children[0].getComponent(Sprite)).by(0.5, { fillRange: 0.2 }).call(() => {

        }).by(1, { fillRange: 0.8 }).call(() => {
            this.btnLogin.active = true;
            this.bar.active = false;
        }).start()
    }


}

