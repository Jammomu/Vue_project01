<template>
  <div class="">
    <!-- 속성 연결 -->
    <img src="https://borgssam.github.io/MySite/img/album_01.jpg" alt="">
    <br>
    <img v-bind:src='imgSrc' alt="" v-bind:title="imgTitle">
    <br>

    <div>
      <button :disabled="btn_01" :style="color_blue">버튼</button>
      <button :disabled="btn_02" :style="color_red">버튼</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      imgSrc: 'https://borgssam.github.io/MySite/img/album_01.jpg',
      imgTitle: '가방든사람',
      btn_01: true,
      btn_02: false,
      color_blue: {color: 'blue', fontSize: '24px'},
      color_red: {color: 'red', fontSize: '24px'},
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>