<template>
  <div class="son">
    <!-- 내용을 추가하세요 -->
    <p>첫째 아들 : {{message}}</p>
    <gson-comp-11 ref="gson11"/>
    <gson-comp-12 ref="gson12"/>
    <button @click="clickSon11">첫째 아들 발작 버튼1</button>
    <button @click="clickSon12">첫째 아들 발작 버튼2</button>
  </div>
</template>

<script>
import GsonComp11 from './GsonComp11.vue';
import GsonComp12 from './GsonComp12.vue';
export default {
  name: 'SonComp10',
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
  components: {
    GsonComp11,
    GsonComp12,
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      message: '',
    };
  },
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
    clickSon11() {
      this.message= '첫째 아들 발작 버튼 ON';
      this.$refs.gson11.clickMsg();
    },
    clickSon12() {
      this.message= '첫째 아들 발작 버튼 ON';
      this.$refs.gson12.clickMsg();
    },
    changeTextColor(idx, data){
      this.$refs.gson11.changeTextColor(idx, data);
      this.$refs.gson12.changeTextColor(idx, data);
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
  margin: 20px;
  padding: 20px;
}
.gson{
  background-color: yellow;
}
</style>