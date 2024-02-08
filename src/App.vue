<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';


  export default {
    components: { AppHeader, AppMain, AppFooter },
  }
</script>

<template>
   
   <app-header />

   <app-main />

   <app-footer />

</template>

<style lang="scss">

  @use  './styles/general.scss';

</style>
