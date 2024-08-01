<template>
  <div class="basic">
    <h1>Hello, {{title}}</h1>
    <h1>{{title}}는 수원 장안구에 있습니다.</h1>
    <p>{{message}}</p>
    <p v-html="message"></p>
  </div>
  <div>
    <input type="text" v-model="nickname">
  </div>
  <div>
    <input type="number" v-model="age">
  </div>
  <div>
    <textarea name="" id="" cols="30" rows="10" v-model="message"></textarea>
  </div>
  <div>
    <select name="city" id="" v-model="city">
      <option value="01">서울</option>
      <option value="02">부산</option>
      <option value="03">대구</option>
      <option value="04">수원</option>
    </select>
  </div>
  <div>
    <label for=""><input type="checkbox" name="" id="" v-model="cbox">{{cbox}}</label>
    <br>
    <label for=""><input type="checkbox" name="" id="" v-model="cbox2" true-value="사용중" false-value="사용중지">{{cbox2}}</label>
  </div>
  <div>
    <p>좋아하는 음식은?</p>
    <label for=""><input type="checkbox" v-model="goodfood" value="마라탕">마라탕</label>
    <label for=""><input type="checkbox" v-model="goodfood" value="민트초코">민트초코</label>
    <label for=""><input type="checkbox" v-model="goodfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 좋아하는 음식은 {{goodfood}}입니다.</p>

    <p>싫어하는 음식은?</p>
    <label for=""><input type="checkbox" v-model="badfood" value="마라탕">마라탕</label>
    <label for=""><input type="checkbox" v-model="badfood" value="민트초코">민트초코</label>
    <label for=""><input type="checkbox" v-model="badfood" value="홍어삼합">홍어삼합</label>
    <p>당신이 싫어하는 음식은 {{badfood}}입니다.</p>
  </div>
  <div>
    <p>당신의 성별은?</p>
    <label><input type="radio" name="" id="" v-model="gender" value="남">남</label>
    <label><input type="radio" name="" id="" v-model="gender" value="여">여</label>
    <p>당신은 {{gender}}자입니다.</p>
  </div>
  <br>

  <h3>-------- 속성 연결 --------</h3>
  <div>
    <img v-bind:src="imgsrc" alt="" v-bind:title="tooltip">
  </div>
  <div>
    <button v-bind:disabled="show1">버튼</button>
    <button v-bind:disabled="show2">버튼</button>
  </div>
  <div>
    <button v-bind:style="btn1">버튼</button>
    <button v-bind:style="btn2">버튼</button>
  </div>
  <br>
  
  <h3>-------- 제어문 --------</h3>
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(item, index) in products">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>{{item.category}}</td>
          <td>{{item.delivery}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <p v-if="true">if 참</p>
    <p v-if="false">if 거짓</p>
    <p v-show="true">show 참</p>
    <p v-show="false">show 거짓</p>
  </div>
  <br>
  
  <h3>-------- 이벤트 --------</h3>
  <div>
    <button v-on:click="increaseCounter">증가</button>
    <button v-on:click="decreaseCounter">감소</button>
    <p>Counter: {{counter}}</p>

    <input type="number" v-model="countValue">
    <button @:click="applyCounter">적용</button>
    
    <button @:click="increaseCounter(), showMsg()">증가 후 알림</button>
    <button @:click="decreaseCounter(), showMsg()">감소 후 알림</button>
  </div>
  <br>
  
  <div>
    <p>도시 선택</p>
    <select name="" id="" v-model="ciyValue" @change="changeCity">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
    </select>
  </div>
  <br>

  <div>
    <input type="text" name="" id="" v-model="emailValue" @input="changeEmail" placeholder="이메일을 입력하세요.">
    <p v-if="errEmail">{{errEmail}}</p>
  </div>
  <br>

  <div>
    <input type="text" name="" id="" v-model="pwdValue1" @input="changePwd1" placeholder="비밀번호를 입력하세요.">
    <br>
    <input type="text" name="" id="" v-model="pwdValue2" @input="changePwd2" placeholder="비밀번호를 한 번 더 입력하세요.">
    <br>
    <p v-if="errPwd">{{errPwd}}</p>
    <p v-if="errPwd2">{{errPwd2}}</p>
  </div>
  <br>

  <div>
    <p>{{hello()}}</p>
    <p>{{hello()}}</p>
    <p>{{hello()}}</p>

    <p>{{hello2}}</p>
    <p>{{hello2}}</p>
    <p>{{hello2}}</p>
  </div>

  <div>
    성: <input type="text" v-model="lastName" @input="changeLastName">
    <br>
    이름: <input type="text" v-model="firstName" @input="changeFirstName">
    <br>
  </div>
</template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return { // javascript 부분
      title: '연세IT',
      message: '<b>연세IT</b>는 <b><span style="color:red;">5년</span></b> 우수 직업학교입니다.',
      nickname: '돌쇠',
      age: 22 + 3,
      city:'03',
      cbox: false,
      cbox2: "사용중",
      goodfood: [],
      badfood: [],
      gender: '남',
      imgsrc: 'https://borgssam.github.io/MySite/img/album_01.jpg',
      tooltip: '툴팁메시지',
      show1: true,
      show2: false,
      btn1: {
        backgroundColor: 'blue',
        color: 'yellow',
        fontSize: '32px',
      },
      btn2: {
        backgroundColor: 'red',
        color: 'white',
        fontSize: '32px',
      },

      products: [
        {'name': '마우스', 'price': 25000, 'category': 'PC용품', 'delivery': 3000},
        {'name': '마우스', 'price': 25000, 'category': 'PC용품', 'delivery': 3000},
        {'name': '마우스', 'price': 25000, 'category': 'PC용품', 'delivery': 3000},
        {'name': '마우스', 'price': 25000, 'category': 'PC용품', 'delivery': 3000},
      ],

      counter: 0,

      countValue: 0,

      cityValue: '수원',

      emailValue: '',
      errEmail: '',

      pwdValue1: '',
      pwdValue2: '',
      errPwd: '비밀번호를 입력하세요.',
      errPwd2: '비밀번호는 8자리 이상이어야 합니다.',

      lastName: '',
      firstName: '',
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  computed: {
    hello2(){
      console.log('hello2 호출');
      return '안녕하세요. 반가워요.';
    }
  },
  methods: {
    increaseCounter(){
      this.counter = this.counter + 1;
    },
    decreaseCounter(){
      this.counter = this.counter - 1;
    },

    applyCounter(){
      this.counter = this.countValue;
    },

    showMsg(){
      alert('현재값 = ' + this.counter);
    },

    changeCity(){
      alert('선택한 도시 = ' + this.cityValue);
    },

    changeEmail(){
      this.emailValue
      // 이메일 형식 정규 표현식
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(this.emailValue === '' || emailPattern.test(this.emailValue)){
        this.errEmail= '';
      }
      else{
        this.errEmail= '잘못된 이메일 형식입니다.';
      }
    },

    changePwd1(){
      if(this.pwdValue1 === ''){
        this.errPwd= '비밀번호를 입력하세요.';
        this.errPwd2= '비밀번호는 8자리 이상이어야 합니다.';
      }
      else if(this.pwdValue1.length >= 8){
        this.errPwd2= '';
      }
      else if(this.pwdValue2 === ''){
        this.errPwd= '비밀번호를 다시 확인하세요.';
      }
      else if(this.pwdValue1 === this.pwdValue2){
        this.errPwd= '';
      }
      else{
        this.errPwd= '비밀번호가 일치하지 않습니다.';
      }
    },
    changePwd2(){
      if(this.pwdValue1 === ''){
        this.errPwd= '비밀번호를 입력하세요.';
      }
      else if(this.pwdValue2 === ''){
        this.errPwd= '비밀번호를 다시 확인하세요.';
      }
      else if(this.pwdValue1 === this.pwdValue2){
        this.errPwd= '';
      }
      else{
        this.errPwd= '비밀번호가 일치하지 않습니다.';
      }
    },

    hello(){
      console.log('hello 호출');
      return '해윙';
    },
  }
};
</script>

<style scoped>
table{
  border-collapse: collapse;
  width: 100%;
}
th, td{
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
th{
  text-align: center;
  font-weight: 600;
}
</style>