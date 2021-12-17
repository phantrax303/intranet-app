<template>
  <main>
    <NavigationBar></NavigationBar>
    <div>
      <div class='panel left'>
        <Birthdays></Birthdays>
      </div>
      <div class='panel center'>
        <Journal></Journal>
        <About></About>
      </div>
      <div class="panel right">
        <Phones></Phones>
        <ExternalLinks></ExternalLinks>
      </div>
    </div>
    <footer class='bottom'>
      <img class="logo" src="./assets/logo_fundacao.png">
      <img class="logo" src="./assets/logo_secretaria.png">
      <img class="logo" src="./assets/logo_governo.png">
      <img class="logo" src="./assets/logo_sus.png">
    </footer>
  </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import ExternalLinks from './components/ExternalLinks.vue';
import Birthdays from './components/Birthdays.vue';
import Journal from './components/Journal.vue';
import Phones from './components/Phones.vue';
import About from './components/About.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    ExternalLinks,
    Birthdays,
    Journal,
    Phones,
    About,
  },
  methods:{

  }
}
</script>

<style>
html,body{
  margin:0px;
  height: 100%;
}
body *{
  display: flex;
  box-sizing: border-box;
}
main {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  flex-direction: column;
}
main > div{
  width: 100%;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-around;
}
.panel{
  flex-direction: column;
  flex-grow: 1;
}
.panel *{
  flex-grow: 1;
}
.center{
  flex-grow: 3;
}

footer{
  flex-direction: row;
  justify-content: space-around;
  max-height: 40px;
  height: 100%;
  width: 100%;
  background-color: #FFFFFF;
}

.logo{
  height: inherit;
}
</style>
