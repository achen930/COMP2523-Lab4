import { ISortable } from "./ISortable";

export class CharacterGroup implements ISortable {
    constructor (data: string) {
        this.data = data;
    }
    data: string;
    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, rightPos: number):void {
        let stringArray = this.data.split("");

        let leftChar = stringArray[leftPos];
        let rightChar = stringArray[rightPos];

        let temp = leftChar;
        stringArray[leftPos] = rightChar;
        stringArray[rightPos] = temp;

        this.data = stringArray.join("");

    };
    compare(leftPos: number, rightPos: number): boolean {
        let data = this.data.split("");
        return (data[leftPos].localeCompare(data[rightPos]) > 0);
    };
}