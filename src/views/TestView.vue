<template>
  <div class="">
    <table>
      <thead>
        <th>제품명</th>
        <th>가격</th>
        <th>품목</th>
        <th>배송료</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in goods" v-bind:key="index">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.category}}</td>
          <td>{{item.delivery}}</td>
        </tr>
      </tbody>
    </table>
    <br>

    <p v-if="true">호랑이</p>
    <p v-if="false">사자</p>
    <br>

    <div>
      <label>국어 : <input type="number" v-model="kor"></label><br>
      <label>영어 : <input type="number" v-model="eng"></label><br>
      <label>수학 : <input type="number" v-model="math"></label><br>
      <button v-on:click="showScore">계산</button>
      <p>평균 : {{totalScore}}</p>
      <p v-if="totalScore >= 90">A학점</p>
      <p v-else-if="totalScore >= 80">B학점</p>
      <p v-else-if="totalScore >= 70">C학점</p>
      <p v-else-if="totalScore >= 60">D학점</p>
      <p v-else>E학점</p>
    </div>

    <div>
      <button v-on:click="showMsg">메세지버튼</button>
    </div>
    <br>

    <div>
      <label><input type="number" v-model="ndan">단</label>
      <button v-on:click="calculate_btn">계산</button>
      <p>{{ndan}}단</p>
      <p v-for="(item, index) in dan" :key="index">{{item}}</p>
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
      goods: [
        {'name': '마우스', price: 30000, 'category': 'PC용품', 'delivery': 2500},
        {'name': '키보드', price: 100000, 'category': 'PC용품', 'delivery': 2500},
        {'name': '모니터', price: 500000, 'category': 'PC용품', 'delivery': 2500},
      ],

      score: 0,
      kor: 0,
      eng: 0,
      math: 0,
      totalScore: 0,
      ndan: '',
      dan: [],
    };
  },
  methods: {
    showMsg(){
      alert('메세지 전송');
    },

    showScore(){
      this.totalScore = (this.kor + this.eng + this.math)/3;
    },

    calculate_btn(){
      this.dan=[]; // 결과값 초기화
      for(let n = 2; n < 10; n++){
        this.dan.push(`${this.ndan} * ${n} = ${this.ndan * n}`);
      }
    },
  }
};
</script>

<style scoped>
table{
  width: 100%;
  border-collapse: collapse;
}
th, td{
  border: 1px solid #ddd;
}
</style>