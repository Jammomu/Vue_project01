<template>
  <div v-bind:style="body">
    <div class="signuppage" v-bind:style="signuppage">
      <h1>회원가입</h1>
      <div>
        <h3 v-bind:style="h3">사용자 이름</h3>
        <input type="text" v-model="nickname" v-bind:style="inputBox">
      </div>
      <div>
        <h3 v-bind:style="h3">이메일</h3>
        <input type="email" v-model="emailAddr" v-bind:style="inputBox">
      </div>
      <div>
        <h3 v-bind:style="h3">비밀번호</h3>
        <input type="password" v-model="pw1234" v-bind:style="inputBox">
      </div>
      <div>
        <h3 v-bind:style="h3">비밀번호 확인</h3>
        <input type="password" v-model="pw21234" v-bind:style="inputBox">
      </div>
      <div>
        <h3 v-bind:style="h3">성별</h3>
        <label v-bind:style="genderStyle"><input type="radio" name="" id="" v-model="gender" value="man">남성</label>
        <label v-bind:style="genderStyle"><input type="radio" name="" id="" v-model="gender" value="girl">여성</label>
      </div>
      <div>
        <h3 v-bind:style="h3">좋아하는 음식</h3>
        <select name="food" id="">
          <option value="한식">한식</option>
          <option value="한식">중식</option>
          <option value="한식">일식</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" name="" id="">
          <span>정보제공 동의</span>
        </label>
      </div>
      <button>가입하기</button>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'SignUp',
  components: {
    
  },
  data() {
    return {
      nickname: '고길동',
      emailAddr: 'dlddld@gmail.com',
      pw1234: '1234',
      pw21234: '1234',
      gender: 'man',
      body: {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#eee'
      },
      signuppage: {
        width: '500px',
        margin: '0 auto',
        padding: '15px',
        border: '1px solid #000',
        borderRadius: '5px',
        backgroundColor: 'white',
      },
      h3: {
        marginLeft: '10px',
        textAlign: 'left'
      },
      inputBox: {
        width: '90%',
        padding: '10px',
      },
      genderStyle: {
        display: 'flex',
      }
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
  methods: {
    
  }
};
</script>

<style scoped>

</style>