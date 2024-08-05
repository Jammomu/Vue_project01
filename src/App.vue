<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/test">Test</router-link>
    <router-link to="/basic">3. Component(basic)</router-link>
    <router-link to="/SignUp">4. SignUp</router-link>
    <router-link to="/DeepView">8. Component(deep)</router-link>
    <router-link to="/DeepView2">8. Component(deep2)</router-link>
    <router-link to="/CalculatorView01">9. Calculator01_API</router-link>
    <router-link to="/CalculatorView02">9. Calculator02_API</router-link>
    <router-link to="/CalculatorView03">9. Calculator03_API</router-link>
    <router-link to="/CalculatorView04">9. Calculator04_API</router-link>
    <router-link to="/MixView">10. Mixin</router-link>
    <router-link to="/UserView">11. vuex 예제1</router-link>
    <router-link to="/MemberView">11. vuex 예제2</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2C3E50;
}
nav {
  z-index : 1;
  position: fixed;
  top:10px;
  right:10px;
  display: flex;
  flex-direction:column;
  background-color: white;
  padding:10px 20px;
  box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25),
              0  8px 16px -8px rgba(0,0,0,0.3),
              0 -6px 16px -6px rgba(0,0,0,0.25);
  border-radius: 5px;
}
nav a {
  text-decoration: none;
  color : #0008FC;
  text-transform:uppercase;
  font-size: 12px;
  text-align:center;
  font-weight: 600;
}
nav a:not(:last-child){
  margin-bottom: 10px;
}
</style>
