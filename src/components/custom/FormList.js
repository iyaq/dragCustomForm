import { inputConf } from "./control/input"
import { radioConf } from "./control/radio"
import { checkboxConf } from "./control/checkbox"
import { selectConf } from "./control/select"
import { cascaderConf } from "./control/cascader"

const formList = {
    input: inputConf,
    radio:radioConf,
    checkbox:checkboxConf,
    select:selectConf,
    cascader:cascaderConf
}
let list_arr = [];
var j = 0;
for(let i in formList){
    list_arr.push({
        index:j++,
        ele:i,
        obj:formList[i]
    })
}
export default list_arr;