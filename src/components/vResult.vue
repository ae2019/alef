<template>
    <div id="result">
        <p><span class="reshead">Персональные данные</span></p>
        <span class="fhead" v-if="this.$store.state.yname!==''">
            {{this.$store.state.yname}}, 
            {{this.$store.state.yage}} лет
        </span>
        <span class="fhead" v-if="this.$store.state.yname==''">
            Не указаны данные
        </span>
        <p></p>
        <p><span class="">Дети</span></p>
        <span class="fhead" v-for="child in this.$store.state.childs" :key="child">
            <div class=child_item>{{child.name}}, {{child.age}} лет
            </div>
        </span>
        <span class="fhead" v-if="this.$store.state.childs.length==0">
            Не указаны дети
        </span>
    </div>
</template>
<script>
export default {
    name: 'ChildsList'
}
</script>

<style scoped>
.child_item
{
    padding: 10px 20px;
    background: #F1F1F1;
    border-radius: 5px;
    margin: 20px 0px;
    display: table;
}
.reshead {
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
}
#result {text-align: left;}
</style>