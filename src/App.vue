<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';


  export default {
    data() {
      return {
        lists: {
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
            informations: {
              title: 'Boolando s.r.l',
              links: [
                { 
                  type: 'string',
                  text: 'Informazioni legali',
                  url: '#',
                },
                {
                  type: 'string',
                  text: 'Informativa sulla privacy',
                  url: '#',
                },
                {
                  type: 'string',
                  text: 'Diritto di recesso',
                  url: '#',
                },
              ]
            },
            social: {
              title: 'Trovaci anche su',
              links: [
                {
                  type: 'icon',
                  icon: 'fa-twitter',
                  iconKit: 'fa-brands',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-square-facebook',
                  iconKit: 'fa-brands',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-square-instagram',
                  iconKit: 'fa-brands',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-square-pinterest',
                  iconKit: 'fa-brands',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-square-youtube',
                  iconKit: 'fa-brands',
                  url: '#',
                },
                
              ]
            }
        },
      }
    },

    components: { AppHeader, AppMain, AppFooter },
  }
  
</script>

<template>
   
   <app-header :lists="lists"/>

   <app-main />

   <app-footer :lists="lists"/>

</template>

<style lang="scss">

  @use  './styles/general.scss';

</style>
