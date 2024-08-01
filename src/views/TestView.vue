<template>
  <div class="">
    <select name="" id="">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
    </select>
    <br>
    
    <select v-model="city" @change="changeCity">
      <option value="서울">서울</option>
      <option value="부산">부산</option>
      <option value="대구">대구</option>
      <option value="수원">수원</option>
    </select>
    <br>
    <p>{{message}}</p>
    <br>

    <div>
      <p>
        <label>이메일
          <input type="text" placeholder="이메일을 입력하세요" v-model="emailValue" @input="changeEmail">
        </label>
        <span>{{msgEmail}}</span>
      </p>
      <p>
        <label>비밀번호
          <input type="text" placeholder="이메일을 입력하세요" v-model="pwd1" @input="changePwd">
        </label>
        <span>{{msgPwd1}}</span>
      </p>
      <p>
        <label>비밀번호 확인
          <input type="text" placeholder="이메일을 입력하세요" v-model="pwd2" @input="changePwd2">
        </label>
        <span>{{msgPwd2}}</span>
      </p>
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
      city: '대구',
      message: '',

      msgEmail:'이메일을 입력하세요',
      pwd1: '',
      pwd2: '',
      msgPwd1: '비밀번호를 입력하세요.',
      msgPwd2: '비밀번호를 확인하세요.',
    };
  },
  methods: {
    changeCity(){
      switch(this.city){
        case '서울':
          this.message= '안녕하세요. 반갑습니다.';
          break;
        case '부산':
          this.message= '안녕하십니꺼. 반갑습니더.';
          break;
        case '대구':
          this.message= '안녕하십니까. 반갑습니다.';
          break;
        case '수원':
          this.message= '안녕하세요. 반갑습니다.';
          break;
        default:
          this.message= '안녕하세요. 반갑습니다.';
      }
    },

    changeEmail(){
      // this.emailValue이 이메일 형식에 맞는지 체크
      const emailExp =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //문자열 + @ + 문자열 + . + 문자열
      if(this.emailValue.length == 0){
        this.msgEmail='이메일을 입력하세요';
      } else if (emailExp.test(this.emailValue) == true ) {
        this.msgEmail = '정상적인 이메일 주소입니다.';
      } else {
        this.msgEmail = '이메일 주소가 올바르지 않습니다.';
      }
    },

    checkPwd(pwd){
      let msg = '';
      const pwdLength = this.pwd1.length;
      const hasWord = /[a-z A-Z]/.test(pwd);
      const hasNum = /[\d]/.test(pwd);
      const hasForbid = /[@#]/.test(pwd);

      if(pwdLength < 8){
        msg = '비밀번호는 8자리 이상이어야 합니다.';
      }
      else if(!hasWord){
        msg = '비밀번호에는 문자가 포함되어야 합니다.';
      }
      else if(!hasNum){
        msg = '비밀번호에는 숫자가 포함되어야 합니다.';
      }
      else if(hasForbid){
        msg = '@, #은 사용할 수 없습니다.';
      }
      else{
        msg = '';
      }

      return msg;
    },

    changePwd(){
      let msg = this.checkPwd(this.pwd1);
      if(msg === ''){
        msg = '비밀번호가 유효합니다.';
      }
      this.msgPwd1 = msg;
    },

    changePwd2(){
      let msg = this.checkPwd(this.pwd2);
      if(msg == ''){
        if(this.pwd1 === this.pwd2){
          msg = '비밀번호가 일치합니다.';
        }
        else{
          msg = '비밀번호가 일치하지 않습니다.';
        }
      }
      this.msgPwd2 = msg;
    },
  }
};
</script>

<style scoped>

</style>