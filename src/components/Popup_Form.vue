<template>
  <div v-if="$store.state.isOpen" class="backdrop fixed inset-0" @click="close">
    <Form_Send v-if="$store.state.chosePopup === 1"/>
    <Form_Html v-else-if="$store.state.chosePopup === 2"/>
  </div>
</template>

<script>
import Form_Send from "./Form_Send.vue";
import Form_Html from './Form_Html.vue'
export default {
  data() {
    return {
      
    };
  },
  methods:{
    close(){
      this.$store.commit('close')
    }
  },
  computed: {},
  components: {
    Form_Send,
    Form_Html
},
};
</script>
<style lang="scss" scoped>
.backdrop {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20;
}

</style>
