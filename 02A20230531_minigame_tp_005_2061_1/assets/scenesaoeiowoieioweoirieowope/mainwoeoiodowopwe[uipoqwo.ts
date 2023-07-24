import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mainwoeoiodowopwe_uipoqwo')
export class mainwoeoiodowopwe_uipoqwo extends Component {


    start() {

    }

    update(deltaTime: number) {

    }

    onWnehaowifwoiowioeruidspoasa(event) {
        event.target.children[0].active = !event.target.children[0].activeInHierarchy;
    }

    onsetmusicwoiefiewiouosieooweweo(event) {
        event.target.children[0].active = !event.target.children[0].activeInHierarchy;
        event.target.children[1].active = !event.target.children[0].activeInHierarchy;
    }

    onsetwoiefiewiouosieooweweo(event) {
        event.target.parent.children[0].active = !event.target.parent.children[0].activeInHierarchy;
    }

    onPlayeoweifwoifiwoeiofjoiijfwe(){
        director.loadScene("youxiWoweoifwoifiowoioidfwfeio");
    }
}

