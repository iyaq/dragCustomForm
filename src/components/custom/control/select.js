export default (self,h) => {
    return [
        h("el-select",{
            props:{
                value:self.obj.value || '',
                placeholder:self.obj.placeholder || '请选择'
            },
            on:{
                "change" (value) {
                    self.obj.value = value;
                    self.$emit('handleChangeVal',value);
                }
            }
        },self.obj.item.map(v => {
            return h('el-option',{
                props:{
                    value:""+v.label_name
                }
            },v.label_name)
        }))
        ]
}

export let selectConf = {
    type:'select',
    config:true,
    label:'下拉框',
    placeholder:'',
    value:'',
    // item:[{"label_value":"1","label_name":"选项1"},{"label_value":"2","label_name":"选项2"}],
    item:Array.apply(null,{length:5}).map((k,v) => {
       return {
           label_value: v+1,
           label_name:"选项"+(v+1)
       }
    }),
    name:''
}