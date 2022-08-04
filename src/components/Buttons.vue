<template>
    <button :class = "classBtn" class="btn">{{textBtn}}</button>
</template>
<script>
export default {
    props:['classBtn', 'textBtn'],
    methods:{
    }
}
</script>
<style lang="scss">
.btn {
  @apply font-bold m-0 mt-4 md:m-2.5 w-11/12 py-2 px-5 rounded text-white;
}
.btn-blue {
  @apply relative bg-blue-500 md:ml-20 md:w-48; 
}
.btn-green{
  background-color: #16a34a;
}
.btn-black-green{
  @apply md:w-64;
  background-color:#0D9488;
}
</style>