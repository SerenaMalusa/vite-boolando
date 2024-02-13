<script>
  // import data form the golbal state
  import { modal } from './store';

  // import components
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';  
  import AppModal from './components/AppModal.vue';

  export default {
    data() {
      return {
        modal,
        lists: {
            categories: {
              links: [
                {
                  type: 'string',
                  text: 'Donna',
                  url: '#',
                },
                {
                  type: 'string',
                  text: 'Uomo',
                  url: '#',
                },
                {
                  type: 'string',
                  text: 'Bambino',
                  url: '#',
                },
              ],
            },
            userLinks: {
              links: [
                {
                  type: 'icon',
                  icon: 'fa-user',
                  iconKit: 'fa-regular',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-heart',
                  iconKit: 'fa-regular',
                  url: '#',
                },
                {
                  type: 'icon',
                  icon: 'fa-bag-shopping',
                  iconKit: 'fa-solid',
                  url: '#',
                },
              ],
            },
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
    // write components here so that they can be used and printed
    components: { AppHeader, AppMain, AppFooter, AppModal },
  }
  
</script>

<template>
   
   <!-- header component pass lists as a prop -->
   <app-header :lists="lists"/>

   <!-- main component -->
   <app-main />

   <!-- footer component pass lists as a prop -->
   <app-footer :lists="lists"/>

   <!-- modal component -->
   <app-modal v-if="modal.isVisible"/>

</template>

<style lang="scss">

  // import file general.scss
  @use  './styles/general.scss';

</style>
