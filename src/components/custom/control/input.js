export default (self,h) => {
    return [
        h(
            'el-input',
            {
                props:{
                    value: self.obj.value || ""
                },
                attrs:{
                    maxlength: parseInt(self.obj.maxlength) || 20,
                    placeholder: self.obj.placeholder || '请输入内容'
                },
                on:{
                    "change":function (val) {
                        self.obj.value = event.currentTarget.value;
                        self.$emit('handleChangeVal',val.currentTarget.value)
                    }
                }
            }
        )
    ]
};
export  let inputConf = {
    type:'input',
    config:true,
    label:'输入框',
    name:'',
    placeholder:'',
    maxlength:20,
    value:''
}