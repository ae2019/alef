<template>
<div class="container childslist">
  <!-- Your data print -->
  <div class="row mainblock">
      <p><span class="fhead">Персональные данные</span></p>
      <p><input type="text" name="yname" class="form-control" placeholder="Имя" v-model="this.$store.state.yname"></p>
      <p><input type="text" name="yage" class="form-control" placeholder="Возраст" v-model="this.$store.state.yage"></p>
  </div>
  
  <!-- Kids heading -->
  <div class="row chead">
    <div class="col-sm">
      <span class="fhead">Дети (макс. 5)</span>  
    </div>
    <div class="col-sm">
      <button type="button" v-if="this.$store.state.childs.length<5" class="btn btn-outline-primary" @click="add">+ Добавить ребёнка</button>
    </div>
  </div>

  <!-- Kids list -->
  <div class="row citem" v-for="(child,index) in this.$store.state.childs" :key="index">
    <div class="col-sm-5">
      <input type="text" name="yname" class="form-control" placeholder="Имя" v-model="child.name">
    </div>
    <div class="col-sm-5">
      <input type="text" name="yage" class="form-control" placeholder="Возраст" v-model="child.age">
    </div>
    <div class="col-sm-2">
      <a href="#" @click="del1(index)">Удалить</a>
    </div>
  </div>
  <br>
  <button type="button" class="btn btn-primary" @click="this.$router.push('/result')">Сохранить</button>
  <br>
</div>
</template>

<script>
export default {
  name: 'ChildsList',
  props: {
  },
    data() {
        return {
            //yname: '',
            //yage: '',
            //childs: []
        }
    },
  methods: {
      add() {
        let new_child = {
          name: "",
          age: ""
        };
        this.$store.state.childs.push(new_child);
      },
      del1(index) {
        this.$store.state.childs.splice(index,1);
        //console.log(index);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.chead {padding: 15px 0px; text-align: left;}
.citem {padding: 5px 0px;}
.mainblock {text-align: left;}
</style>
