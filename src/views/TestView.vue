<template>
  <div class="">
    <label>성: <input type="text" v-model="firstName1" @input="makeFullName1"></label>
    <label>이름: <input type="text" v-model="lastName1" @input="makeFullName1"></label>
    <p>성명(method): {{fullName1}}</p>
    <br>

    <label>성: <input type="text" v-model="firstName2"></label>
    <label>이름: <input type="text" v-model="lastName2"></label>
    <p>성명(computed): {{makeFullName2}}</p>
    <br>

    <label>성: <input type="text" v-model="firstName3"></label>
    <label>이름: <input type="text" v-model="lastName3"></label>
    <p>성명(watch): {{fullName3}}</p>
    <br>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      firstName1: '',
      lastName1: '',
      fullName1: '',

      firstName2: '',
      lastName2: '',

      firstName3: '',
      lastName3: '',
      fullName3: '',
    };
  },
  watch: {
    firstName3(){
      this.fullName3 = this.firstName3 + this.lastName3;
    },
    lastName3(){
      this.fullName3 = this.firstName3 + this.lastName3;
    },
  },
  computed: {
    makeFullName2(){
      return this.firstName2 + this.lastName2;
    }
  },
  methods: {
    makeFullName1(){
      this.fullName1 = this.firstName1 + this.lastName1;
    },
  }
};
</script>

<style scoped>

</style>