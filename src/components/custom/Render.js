import input from './control/input'
import radio from './control/radio'
import checkbox from './control/checkbox'
import select from './control/select'
import cascader from './control/cascader'

const  form_item = {
    input,radio,checkbox,select,cascader
}

export default {
    name:'renders',
    render(h){
        return h(
            "el-form-item",
            {
                props:{
                    label:this.obj.label+':'
                }
            },
            form_item[this.ele](this,h)
        )
    },
    props:{
        index: {
            type: Number,
            default: 0
        },
        ele:{
            type:String,
            default:'input'
        },
        obj:{
            type:Object,
            default:{}
        }
    }
}