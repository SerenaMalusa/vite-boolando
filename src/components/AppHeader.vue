<script>

    export default {
        data () {
            return {

            }
        },
    }

</script>

<template>
   
   <section>

       <div class="container">
        
            <div class="debug"></div>
            <div class="debug"></div>
            <div class="debug"></div>

       </div>

   </section>

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    section {    
        height: $header-h;
        width: 100vw;
        background-color: $primary-color;
        box-shadow: 1px 5px 9px 0px rgba(158,149,144,1);

        @include d-flex_between_center;
    }

</style>
