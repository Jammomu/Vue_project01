<template>
  <div class="">
    <h2>Component 01</h2>
    <p>{{ sharedData }}</p>
    <button @click="sharedMethod">공유메소드</button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixin';

export default {
  name: 'MixComp01',
  mixins : [commonMixin],
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>