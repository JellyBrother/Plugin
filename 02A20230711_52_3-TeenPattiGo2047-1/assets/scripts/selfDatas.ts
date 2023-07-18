import { Sprite, SpriteFrame, resources, Node } from "cc";

class selfDatas {
    name = null;
    score = null;
    head = null;
    id = null;

    generateEnglishName(): string {
        const vowels = ["a", "e", "i", "o", "u"];
        const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

        const getRandomElement = (array: string[]): string => {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        };

        const getRandomVowel = (): string => getRandomElement(vowels);
        const getRandomConsonant = (): string => getRandomElement(consonants);

        const nameLength = Math.floor(Math.random() * 3) + 2; // Random name length between 2 and 4
        let name = "";

        for (let i = 0; i < nameLength; i++) {
            if (i % 2 === 0) {
                name += getRandomConsonant();
            } else {
                name += getRandomVowel();
            }
        }

        return name;
    }

    getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    changeSpr(str: string, node: Node) {
        resources.load(str + "/spriteFrame", SpriteFrame, (err, res) => {
            node.getComponent(Sprite).spriteFrame = res;
        })
    }
}
export default new selfDatas()
