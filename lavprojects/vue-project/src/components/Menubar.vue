<template>
  <div class="menubar">
    <h1>{{ msg }}</h1>

    <ul class=" menubar1">
      <li
        v-for="(data, index) in items"
        :key="index"
        class="cell "
        v-on:click="select(data.item)"
      >
        {{ data.item }}
      </li>
    </ul>

    <p v-if="value.length > 1">
      You chose:<strong> {{ value }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "menubar",
  data () {
    return {
      msg: "Welcome to Your Vue.js App",
      items: [{ item: "Home" }, { item: "Projects" }, { item: "Contacts" }],
      value: " "
    };
  },
  methods: {
    select (event) {
      console.log("selecttttttttttttttttttttttttttttttttttttttttttt");
      this.value = event;
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
.cell:hover {
  background-color: #e35885;
}
.cell {
  padding: 20px;
}
.menubar1 {
  box-shadow: 0px 0px 2px lightgray;
  background-color: #389dc1;
}
</style>
