<template>
  <div class="">
    <!-- 둘다 같은 기능을 하지만 위의 방식을 권장함 -->
    <page-title title="title1" age="3" hobbies="['자전거', '등산', '꽃꽂이', '게임']" :family="{papa: '아빠', mama: '엄마'}"/>
    <page-title v-bind:title="title1" :age="age" :hobbies="hobbies" :family="family" :func="customFunc"/>
  </div>

  <div>
    <input type="text" v-model="hobby">
    <button @click="addHobby">추가</button>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';
export default {
  name: 'DeepView',
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
    //},
  },
  components: {
    PageTitle
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
  data() {
    return {
      // 컴포넌트의 데이터를 초기화합니다.
      title1: 'page1',
      title2: 'page2',
      age: 3,
      hobbies: [],
      hobby: '',
      family: {papa: '아빠', mama: '엄마'},
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
    addHobby() {
      this.hobbies.push(this.hobby);
      return '';
    },
    customFunc(){
      return '부모 지정 사용자함수';
    }
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
</style>