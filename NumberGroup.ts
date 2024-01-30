import { ISortable } from "./ISortable";

export class NumberGroup implements ISortable {
    constructor (data: number[]) {
        this.data = data;
    }
    data: number[];
    get length(): number {
        return this.data.length;
    };
    swap(leftPos: number, rightPos: number):void {
        let leftNumber = this.data[leftPos];
        let rightNumber = this.data[rightPos];

        let temp = leftNumber;
        leftNumber = rightNumber;
        rightNumber = temp;
    };
    compare(leftPos: number, rightPos: number): boolean {
        let leftNumber = this.data[leftPos];
        let rightNumber = this.data[rightPos];

        return leftNumber > rightNumber;
    };
}