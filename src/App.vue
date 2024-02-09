<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';


  export default {
    data() {
      return {
        links: {
            categories: [
                {
                    text: 'Donna',
                    url: '#',
                },
                {
                    text: 'Uomo',
                    url: '#',
                },
                {
                    text: 'Bambino',
                    url: '#',
                },
            ],
            userLinks: [
                {
                    icon: 'fa-user',
                    iconKit: 'fa-regular',
                    url: '#',
                },
                {
                    icon: 'fa-heart',
                    iconKit: 'fa-regular',
                    url: '#',
                },
                {
                    icon: 'fa-bag-shopping',
                    iconKit: 'fa-solid',
                    url: '#',
                },
            ],
        },
      }
    },

    components: { AppHeader, AppMain, AppFooter },
  }
  
</script>

<template>
   
   <app-header :links="links"/>

   <app-main />

   <app-footer />

</template>

<style lang="scss">

  @use  './styles/general.scss';

</style>
