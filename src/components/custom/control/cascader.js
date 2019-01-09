const data = (size,parentIndex,parentName) => {
    if (parentIndex>=3){

        return null;
    }
    return Array.apply(null,{length:size}).map(
        (k,v) => {
            const name = parentName + (v+1)+"-";
            return {
                value:name.substring(0,name.length-1),
                label:name.substring(0,name.length-1),
                children:data(size,parentIndex+1,name)
            }
        }
    )
}
export default (self,h) => {
    return [
        h("el-cascader",{
            props:{
                value:self.obj.value || '',
                placeholder:self.obj.placeholder || '请选择',
                separator:"/",
                filterable:"true",
                options:self.obj.options || []
            },
            on:{
                "change" (val) {
                    self.obj.value = val;
                    self.$emit('handleChangeVal',val);
                }
            }
        })
        ]
}

export let cascaderConf = {
    type:'cascader',
    config:true,
    label:'级联选择',
    placeholder:'',
    value:'',
    // item:[{"label_value":"1","label_name":"选项1"},{"label_value":"2","label_name":"选项2"}],
    options:data(3,0,'数据'),
    name:''
}