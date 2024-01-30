import { CharacterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";
import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./SortUtil";

const numberGroup = new NumberGroup([30, 3, -15, 9]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);

const characterGroup = new CharacterGroup("Xaeyb")
const sorter2 = new SortUtil(characterGroup)
sorter2.sort();
console.log(characterGroup.data);

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4);

const sorter3 = new SortUtil(linkedListGroup);
sorter3.sort();
linkedListGroup.print();