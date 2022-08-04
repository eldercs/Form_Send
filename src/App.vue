<template>
<div class = "text-center md:text-left">
  <Buttons
    classBtn="btn-blue"
    :textBtn="this.address[0].name"
    @click="openPop(1)"
  />
  <Buttons
    classBtn="btn-black-green"
    :textBtn="this.address[1].name"
    @click="openPop(2)"
  />
  <Popup_Form  />
</div>
</template>

<script>
import Buttons from "./components/Buttons.vue";
import Popup_Form from "./components/Popup_Form.vue";

export default {
  data() {
    return {

      address: this.$store.state.address,
      data: {},
    };
  },
  methods: {
    openPop(city) {
      this.$store.state.isOpen = true;
      this.$store.state.choseCity = city
    },
  },
  name: "App",
  components: {
    Buttons,
    Popup_Form
},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
