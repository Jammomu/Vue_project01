<template>
  <div class="">
    <h3>CalculatorView03</h3>
    <input type="text" v-model="num1"><span> + </span>
    <input type="text" v-model="num2"><span> = </span>
    <span>{{ result }}</span>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue';

function plusNumbers(){
  // 반응형 상태객체 : 속서이 변경될 때마다 자동으로 DOM 업데이트
  let state = reactive({
    num1 : 0, // 첫번째 텍스트박스와 바인딩 될 숫자 상태
    num2 : 0,
    result : computed(()=>Number(state.num1) + Number(state.num2)),
  });
  // toRefs : 반응형 상태객체 -> 자바스크립트 객체
  return toRefs(state);
}
export default {
  name: 'CalculatorView03',
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
    let {num1, num2, result} = plusNumbers();
    return {num1, num2, result};
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>