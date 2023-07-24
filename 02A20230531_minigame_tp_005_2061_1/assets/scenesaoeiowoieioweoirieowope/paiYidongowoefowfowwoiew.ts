import { game, tween } from 'cc';
import { Collider2D, Contact2DType, EventTouch, IPhysics2DContact, UITransform, v3 } from 'cc';
import { _decorator, Component, Node, NodeEventType } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('paiYidongowoefowfowwoiew')
export class paiYidongowoefowfowwoiew extends Component {

    @property(Node)
    mubiaorongqiNNshangWoisoeowoefos: Node = null

    kaisPoswoeoeofwoeofowe = null

    isMoveweofoiweofoiwofso = false

    paizhiOIIIWeoifoiweoifuiwe = null


    start() {

    }

    protected onEnable(): void {
        this.node.on(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
        this.node.on(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
        this.node.on(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);


    }

    protected onDisable(): void {
        this.node.off(NodeEventType.TOUCH_MOVE, this.moveWIIioiofweofoiw, this);
        this.node.off(NodeEventType.TOUCH_END, this.endEoifofoweofiodfsod, this);
        this.node.off(NodeEventType.TOUCH_CANCEL, this.endEoifofoweofiodfsod, this);
    }

   
    moveWIIioiofweofoiw(event: EventTouch) {
        if (this.isMoveweofoiweofoiwofso) {
            let posV2 = event.getUILocation();
            let pos = this.changePosesoeoiweofwoiefwwoei_eiojwfiij(this.node, posV2);
            this.node.setPosition(pos);
        }
    }


    endEoifofoweofiodfsod(event: EventTouch) {
        let length = this.mubiaorongqiNNshangWoisoeowoefos.children.length;
        let xiangjiao = false;
        let box = this.node.getComponent(UITransform).getBoundingBoxToWorld();
        let index = 0;
        for (let i = 0; i < 4; i++) {
            let rongqi = this.mubiaorongqiNNshangWoisoeowoefos.children[i];
            if (rongqi.children[0] == undefined) {
                xiangjiao = rongqi.getComponent(UITransform).getBoundingBoxToWorld().intersects(box);
                index = i;
                if (xiangjiao) {
                    break;
                }
            }
        }
        if (xiangjiao) {
            this.node.parent = this.mubiaorongqiNNshangWoisoeowoefos.children[index];
            this.node.setPosition(v3(0, 0));
            this.isMoveweofoiweofoiwofso = false;
            game.emit("jiancejieguo_weiowefweiofjiowiofg");
        } else {
            tween(this.node).to(0.1, { position: this.kaisPoswoeoeofwoeofowe }).start();
        }
    }

    changePosesoeoiweofwoiefwwoei_eiojwfiij(node, pos1) {
        var pos2 = node.parent.getComponent(UITransform).convertToNodeSpaceAR(v3(pos1.x, pos1.y));
        return pos2;
    }


    update(deltaTime: number) {

    }
}

