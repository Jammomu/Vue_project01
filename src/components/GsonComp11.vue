<template>
  <div class="gson">
    <!-- 내용을 추가하세요 -->
    <p v-bind:style="{color: tcolor}">첫째 아들의 첫째 손자 : {{message}}</p>
    <input type="text" v-model="gsonMsg11">
    <button @click="clickMsg">장손 발작 버튼</button>
    {{ gpapaLen }}
  </div>
</template>

<script>
export default {
  name: 'GsonComp11',
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      message: '',
      index: 1,
      tcolor: 'red',
      gsonMsg11: '',
    };
  },
  inject : ['gpapaLen'],
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    clickMsg() {
      this.message = '첫째 손자 발작 버튼 ON';
    },
    changeTextColor(idx, data){
      if(this.index == idx){
        this.tcolor= data;
      }
    },
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
.son{
  background-color: moccasin;
}
.gson{
  background-color: yellow;
}
</style>