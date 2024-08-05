<template>
  <div class="">
    <mix-comp-01/>
    <mix-comp-02/>
  </div>
</template>

<script>
import MixComp01 from '@/components/MixComp01.vue';
import MixComp02 from '@/components/MixComp02.vue';
export default {
  name: 'MixView',
  components: {
    MixComp01,
    MixComp02,
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>