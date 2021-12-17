<template>
  <main>
    <NavigationBar></NavigationBar>
    <div>
      <div>
        <Birthdays></Birthdays>
      </div>
      <Journal></Journal>
      <div>
        <Phones></Phones>
        <ExternalLinks></ExternalLinks>
      </div>
    </div>
    <footer class='bottom'>
      <img src="./assets/logo_fundacao.png">
      <img src="./assets/logo_secretaria.png">
      <img src="./assets/logo_governo.png">
      <img src="./assets/logo_sus.png">
    </footer>
  </main>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import ExternalLinks from './components/ExternalLinks.vue';
import Birthdays from './components/Birthdays.vue';
import Journal from './components/Journal.vue';
import Phones from './components/Phones.vue';

export default {
  name: 'App',
  components: {
    NavigationBar,
    ExternalLinks,
    Birthdays,
    Journal,
    Phones,
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
main {
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
main > div{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
main >div >div{
  display: flex;
  flex-direction: column;
}

footer{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  width: 100%;
  background-color: #FFFFFF;

}
.bottom{
  position:absolute;
  left: 0;
  bottom: 0;
}
</style>
