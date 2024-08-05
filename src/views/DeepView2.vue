<template>
  <div class="">
    <son-comp-10 ref="son10"/>
    <son-comp-20 ref="son20"/>
    <input type="text" v-model="sendGpapaMessage"><br>
    <input type="button" value="할아버지 발작 버튼1" @click="clickGpapa10">
    <input type="button" value="할아버지 발작 버튼2" @click="clickGpapa20">
  </div>
</template>

<script>
import SonComp10 from '@/components/SonComp10.vue';
import SonComp20 from '@/components/SonComp20.vue';
export default {
  name: 'DeepView2',
  components: {
    SonComp10,
    SonComp20,
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
      sendmessage: '',
      gpapaValues : [1, 2, 3],
    };
  },
  provide () {
    return {
      gpapaLen : this.gpapaValues.length,
      gpapaMin : Math.min(...this.gpapaValues)
    }
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
    clickGpapa10() {
      // 아들들의 둘째 손자를 호출해서 글씨를 파란색으로 바꾸기
      this.$refs.son10.changeTextColor(2, 'blue');
      this.$refs.son20.changeTextColor(2, 'blue');
    },
    clickGpapa20() {
      this.$refs.son20.changeSendmessage(this.sendGpapaMessage);
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