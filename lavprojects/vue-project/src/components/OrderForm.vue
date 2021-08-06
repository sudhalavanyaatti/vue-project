<template>
  <div class="OrderForm">
    <div class="handler">
      <h3 v-bind:style="styleObject">{{ title }}</h3>
      <ul>
        <li
          v-for="(data, index) in services"
          :key="index"
          v-on:click="selected(data.cost)"
        >
          {{ data.name }} <span>{{ data.cost | Currency }}</span>
        </li>
      </ul>

      <h4>
        Total: <span>{{ value | Currency }}</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderForm",
  data() {
    return {
      title: "Services",
      services: [
        { name: "Web Development", cost: 300 },
        { name: "Design", cost: 500 },
        { name: "Training", cost: 450 }
      ],
      value: 0,
      styleObject: {
        color: "#fff",
        fontFamily: "fantasy",
        fontStyle: "italic"
      }
    };
  },
  methods: {
    selected(e) {
      console.log("selected");
      this.value = e;
    }
  },
  filters: {
    // Filter definitions

    Currency(value) {
      return "$" + value.toFixed(2);
    }
  }
};
</script>

<style scoped>
.handler {
  /* box-shadow: 0px 0px 40px lightgray;*/
  padding: 5px;
  background-color: #61a1bc;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

ul li {
  padding: 20px 30px;
  background-color: #e35885;
  margin-bottom: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}
ul li span {
  float: right;
}
ul li:hover {
  background-color: green;
}
ul {
  list-style: none;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 15px;
  border-bottom: 2px solid black;
}
</style>
