<template>
  <div>
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
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue';
import ExternalLinks from './components/ExternalLinks.vue';
import Birthdays from './components/Birthdays.vue';
import Journal from './components/Journal.vue';
import Phones from './components/Phones.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    ExternalLinks,
    Birthdays,
    Journal,
    Phones,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
