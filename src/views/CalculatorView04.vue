<template>
  <div class="">
    <h3>CalculatorView04</h3>
    <input type="text" v-model="state.num1"><span> + </span>
    <input type="text" v-model="state.num2"><span> = </span>
    <span>{{ state.result }}</span>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'CalculatorView04',
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  setup() {
    // 반응형 상태객체 : 속서이 변경될 때마다 자동으로 DOM 업데이트
    let state = reactive({
      num1 : 0, // 첫번째 텍스트박스와 바인딩 될 숫자 상태
      num2 : 0, // 두번째 텍스트박스와 바인딩 될 숫자 상태
      result : computed(()=>Number(state.num1) + Number(state.num2)),
    });
    return {state};
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>