<template>
    <div class="fluid container">
        <!--{{form_list}}-->
        <div class="allcomponent">
            <el-form ref="form" label-width="80px">
                <draggable  :list="form_list" :clone="cloneData" :options="dragOptions" >
                    <transition-group type="transition" class="list-group" name="flip-list" tag="div">
                        <renders v-for="item in form_list" :key="item.index" :ele="item.ele" :obj="item.obj" ></renders>
                    </transition-group>
                </draggable>
            </el-form>
        </div>

        <div class="selectcomponent">
            <el-form ref="form" label-width="80px">
                <draggable  class="list-group" :list="clone_list" :clone="cloneData"  :options="dragOptions2" >
                    <transition-group type="transition" class="list-group" name="flip-list" tag="div">
                        <renders  v-for="item in clone_list"  :key="item.index" :ele="item.ele" :obj="item.obj" @handleChangeVal="val => handleChangeVal(val,element)"></renders>
                    </transition-group>
                </draggable>
            </el-form>
        </div>
        {{clone_list}}
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import form_list from "@/components/custom/FormList"
    import renders from "@/components/custom/Render"

    export default {
        name: "home",
        components: {
            draggable,
            renders
        },
        data() {
            return {
               /* form_list:form_list.map((item,index) =>{
                    return Object.assign(item,{index:index})
                }),*/
                form_list,
                clone_list: [],
                formData:{},
            };
        },
        methods: {
            cloneData(original){
                console.log(JSON.parse(JSON.stringify(original)))
                return JSON.parse(JSON.stringify(original))
            },
            handleChangeVal(val,ele){
                this.$set(this.formData,ele.obj.name,val);
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: {
                        name:'shared',
                        pull:"clone",
                        revertClone:false
                    },
                    sort:false,
                    ghostClass: "ghost"
                };
            },
            dragOptions2() {
                return {
                    animation: 0,
                    ghostClass: "ghost",
                    group: {
                        put: ["shared"]
                    }
                };
            },
        },
    };
</script>

<style scoped>
    .container .allcomponent,.container .selectcomponent{
        float: left;
        border: 1px solid #ccc;
        padding: 15px;
        box-sizing: border-box;
        width: calc(50% - 11px);
    }
    .container .allcomponent{
        margin-right: 20px;
    }
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }

    .list-group {
        min-height: 40px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i {
        cursor: pointer;
    }
</style>
