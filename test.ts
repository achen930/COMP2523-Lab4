import { NumberGroup } from "./NumberGroup";
import { SortUtil } from "./SortUtil";

const numberGroup = new NumberGroup([30, 3, -15, 9]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);