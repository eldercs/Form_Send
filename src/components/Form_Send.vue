<template>
  <form
    class="main__form relative mx-3 h-500 md:h-72 mt-24 xl:m-auto xl:mt-28 xl:w-793 xl:h-226 bg-white rounded-lg p-6 pr-7"
    @submit.prevent="submit_form"
    @click.stop
  >
    <h2 class="text-2xl">Заказать звонок</h2>
    <div class="send__form gap-x-5 mt-6 md:flex md:flex-wrap md:gap-x-7 xl:gap-x-5">
      <div class="send__form-item md:order-1 md:w-30 xl:order-0">
        <h3>Имя*</h3>
        <input
          type="text"
          v-model="dataSubmit.name"
          placeholder="Иван Иванов"
        />
        <br />
        <span class="errors" v-if="errors[1]">{{ errors[1] }}</span>
      </div>
      <div class="send__form-item md:order-0 md:w-30 xl:order-1">
        <h3>Телефон*</h3>
        <input
          type="tel"
          v-model="dataSubmit.phone"
          v-mask="'+7(###)###-##-##'"
          placeholder="+7(___)___-__-__"
        />
        <br />
        <span class="errors" v-if="errors[2]">{{ errors[2] }}</span>
      </div>
      <div class="send__form-item md:order-2 md:w-30 xl:order-2">
        <h3>Email*</h3>
        <input type="email" v-model="dataSubmit.email" />
        <br />
        <span class="errors" v-if="errors[3]">{{ errors[3] }}</span>
      </div>
      <div class="send__form-item md:order-3 md:w-7/12 xl:order-3">
        <h3>Город*</h3>
        <select name="" id="" v-model="dataSubmit.city" class = "ml-1">
          <option selected hidden :value = "$store.state.address[$store.state.choseCity].id">{{$store.state.address[$store.state.choseCity].name}}</option>
          <option
            :value="elem.id"
            v-for="(elem, index) in $store.state.address"
            :key="index"
          >
            {{ elem.name }}
          </option>
        </select>
        <br />
        <span class="errors" v-if="errors[4]">{{ errors[4] }}</span>
      </div>
    </div>
    <Buttons
      type="submit"
      classBtn="btn-green btn_submit absolute top-420 right-6 md:top-195 md:right-14 md:w-3/12 xl:top-36 xl:right-6 xl:w-170 m-0 mt-6"
      textBtn="Отправить"
    ></Buttons>
  </form>
</template>

<script>
import axios from "axios";
import { TheMask } from "vue-the-mask";
import Buttons from "./Buttons.vue";
export default {
  data() {
    return {
      errors: [],
      dataSubmit: {
        name: "",
        phone: "",
        email: "",
        city: "",
      },
    };
  },
  mounted(){
    this.dataSubmit.city = this.$store.state.choseCity
  },
  methods: {
    async submit_form() {
      this.checkError();
      this.redactPhone();
      if (this.errors.length == 0) {
        let api = await axios
          .post("http://hh.autodrive-agency.ru/test-tasks/front/task-7/", {
            name: this.dataSubmit.name,
            phone: this.dataSubmit.phone,
            email: this.dataSubmit.email,
            city_id: this.dataSubmit.city,
          })
          .catch((error) => {
            console.log(error);
          });
        this.$store.state.htmlFIle = api.data;
        this.$store.state.chosePopup = 2;
      }
    },
    checkError() {
      this.errors = [];
      let i = 0;
      for (let key in this.dataSubmit) {
        i++;
        if (this.dataSubmit[key] === "") {
          this.errors[i] = "Заполните это поле!";
          console.log("errors:", this.errors);
        } else if (this.dataSubmit.phone.length < 16) {
          this.errors[2] = "Слишком мало символов!";
        }
      }
    },
    redactPhone() {
      this.dataSubmit.phone = this.dataSubmit.phone.replace(/[^0-9+]/g, "");
    },
    close() {
      this.$store.commit("close");
    },
  },
  components: {
    TheMask,
    Buttons,
  },
};
</script>

<style lang="scss" scoped>


.send__form-item {
  @apply relative text-left mt-6 xl:mt-0 xl:w-170;
  input,
  select {
    @apply m-0 py-2 px-3 rounded-md	 xl:w-full;
    
  }
  gap: 20px;
  font-size: 16px;
}

.errors {
  color: red;
  @apply absolute top-16 bottom-1.5 xl:left-2.5;
}

</style>
