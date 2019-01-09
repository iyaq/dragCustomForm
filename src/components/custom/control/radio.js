export default (self,h) => {
    return [
        h("el-radio-group",{
            props:{
                value:self.obj.value || '1'
            },
            on:{
                "input" (value) {
                    self.obj = Object.assign(self.obj,{value})
                    self.$emit('handleChangeVal',value);
                }
            }
        },self.obj.item.map(v => {
            return h('el-radio',{
                props:{
                    label:v.label_value
                }
            },v.label_name)
        }))
        ]
}

export let radioConf = {
    type:'radio',
    config:true,
    label:'单选框',
    value:'',
    item:[{"label_value":"1","label_name":"单选框1"},{"label_value":"2","label_name":"单选框2"}],
    name:''
}