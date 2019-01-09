export default (self,h) => {
    return [
        h("el-checkbox-group",{
            props:{
                value:self.obj.value || []
            },
            on:{
                "input" (arr) {
                    self.obj.value = arr;
                    self.$emit('handleChangeVal',arr);
                }
            }
        },self.obj.item.map(v => {
            return h('el-checkbox',{
                props:{
                    label:v.label_value
                }
            },v.label_name)
        }))
        ]
}

export let checkboxConf = {
    type:'checkbox',
    config:true,
    label:'复选框',
    value:[],
    item:[{"label_value":"1","label_name":"复选框1"},{"label_value":"2","label_name":"复选框2"}],
    name:''
}