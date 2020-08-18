<template>
  <div>
    <div><button @click="randomhero(0,3)" class="btn btn-info">กดเพื่อเป็น Hero</button>
        <h1>{{player.name}} {{monster}}</h1></div>
    <div class="col"><button @click="randomDamage(5,10)" class="btn btn-info">กดเพื่อโจมตีธรรมดา</button>
    <button @click="randomDamage(7,15)" class="btn btn-info">กดเพื่อโจมตีท่าไม้ตาย</button></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
        name:'',
        hp:0,
      player:[
          {name:'saitama', hp:9999,image:"./assets/h1.jpg"},
          {name:'tasumaki', hp:200,image:'h2.jpg'},
          {name:'janos', hp:125,image:'h3.jpg'},
          {name:'mumen rider', hp:35,image:'h4.jpg'},
      ],
      monster:[
          {name:'Giantfukakao', hp:120,image:'m1.jpg'},
          {name:'Kingofdeepsea', hp:100,image:'m2.jpg'},
          {name:'Carpkung', hp:35,image:'m3.jpg'},
          {name:'Boros', hp:200,image:'m4.jpg'}
      ],
      
    };
  },
  methods: {
    randomhero: function (min, max) {
      this.player = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monster = Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    randomDamage: function (min, max) {
      this.player = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.monster = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.player-this.monster.hp
      this.monster-this.player.hp
  },
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>