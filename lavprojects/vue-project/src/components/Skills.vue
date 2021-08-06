<template>
  <div class="container">
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter a skill you have.."
          v-model="skill"
          name="skill"
        />

        <input type="checkbox" v-model="checked" />
      </form>
      <p>{{ change() }}</p>
      <button v-on:click="change">click me</button>
      <ul>
        <li v-for="(data, index) in skills" :key="index">
          {{ data.skill }}
        </li>
      </ul>
      <p>These are the skills that you possess.</p>
      <button v-on:click="show = !show">Click Me</button>
      <transition name="fade">
        <p v-show="show" v-bind:style="styleobj">Animation Example</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [{ skill: "Vue.js" }, { skill: "Frontend Developer" }],
      checked: false,
      skill: " ",
      show: true,
      styleobj: {
        fontSize: "30px",
        color: "red"
      }
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      console.log("The checkbox value is: " + this.checked);
    },
    change() {
      console.log("changeeeeeeeeeeeeeeeeeeeeeeeeeee ");
      return "click the button below";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 15px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
</style>
