<template>
  <div class="">
    <input type="checkbox" name="" id="cbtn_agree">
    <label for="cbtn_agree">동의</label>
    <br>
    <label><input type="checkbox" name="" id="cbtn_agree" v-model="agree">동의</label>
    <br>
    <label>
      <input type="checkbox" name="" id="cbtn_agree" v-model="agree2"
      true-value='동의' false-value='비동의'>
    {{agree2}}</label>
    <br>
  </div>

  <div>
    <p>토핑 추가</p>
    <label><input type="checkbox" name="" id="" v-model="pizza" value="치즈">치즈</label>
    <br>
    <label><input type="checkbox" name="" id="" v-model="pizza" value="파인애플">파인애플</label>
    <br>
    <label><input type="checkbox" name="" id="" v-model="pizza" value="버섯">버섯</label>
    <br>
    <p>추가된 토핑: {{pizza}}</p>
    <br>
  </div>

  <div>
    <p>탕수육 취향</p>
    <label><input type="radio" name="" id="" v-model="sourPork" value="부먹">부먹</label>
    <br>
    <label><input type="radio" name="" id="" v-model="sourPork" value="찍먹">찍먹</label>
    <br>
    <p>당신은 <span style="color: red">{{sourPork}}</span>파 입니다.</p>
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
      agree: false,
      agree2: '비동의',
      pizza: [],
      sourPork: '부먹',
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>