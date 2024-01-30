import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    data: string;
    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, rightPos: number):void {
        let stringArray = this.data.split("");

        let leftChar = stringArray[leftPos];
        let rightChar = stringArray[rightPos];

        let temp = leftChar;
        leftChar = rightChar;
        rightChar = temp;

        this.data = stringArray.join("");
    };
    compare(leftPos: number, rightPos: number): boolean {
        const lowerCaseStr = this.data.toLowerCase;
        let leftChar = lowerCaseStr[leftPos];
        let rightChar = lowerCaseStr[rightPos];

        return leftChar > rightChar;
    };
}