import { _decorator, Component, director, Node, resources, Sprite, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('login')
export class login extends Component {

    @property(Node)
    btnLogin: Node = null

    @property(Node)
    nodeBar: Node = null

    start() {
        this.btnLogin.on(Node.EventType.TOUCH_START, this.btnLoginCallback, this);
    }

    btnLoginCallback() {
        this.btnLogin.active = false;
        this.nodeBar.active = true;
        tween(this.nodeBar.children[0].getComponent(Sprite)).to(0.5, { fillRange: 0.5 }).call(() => {
            resources.preloadDir("", (err, res) => {
                tween(this.nodeBar.children[0].getComponent(Sprite)).to(0.5, { fillRange: 1 }).call(() => {
                    director.loadScene("kwnbdwjnl2");
                }).start();
            })
        }).start();
    }

    update(deltaTime: number) {

    }
}

