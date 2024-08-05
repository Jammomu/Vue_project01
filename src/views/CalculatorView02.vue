<template>
  <div class="">
    <h3>CalculatorView02</h3>
    <input type="text" v-model="state.num1" @keyup="plusNumbers"><span> + </span>
    <input type="text" v-model="state.num2" @keyup="plusNumbers"><span> = </span>
    <span>{{ state.result }}</span>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'CalculatorView02',
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
    let state = reactive({
      num1 : 0,
      num2 : 0,
      result : 0,
    });
    function plusNumbers(){
      state.result = Number(state.num1) + Number(state.num2);
    }
    return {state, plusNumbers}
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>