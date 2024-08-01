<template>
  <div class="">
    <input type="text" name="" id="" value="333">
    <br>
    <!-- <input type="text" v-bind="nick"> -->
    <br>
    <input type="text" v-model="nick">
    <br>
    <input type="number" v-model.number="age">
    <br>
    <textarea name="" id="" cols="30" rows="10">깊은 산속 옹달샘은 썩은물</textarea>
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
    <br>
    <select name="" id="">
      <option value="01">서울</option>
      <option value="02" selected>대구</option>
      <option value="03">부산</option>
      <option value="04">수원</option>
    </select>
    <br>
    <select name="" id="" v-model="city">
      <option value="01">서울</option>
      <option value="02">대구</option>
      <option value="03">부산</option>
      <option value="04">수원</option>
    </select>
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
      nick: '노래하는 범고래',
      age: 30,
      message: '깊은 산속 옹달샘은 썩은물',
      city: '02',
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>