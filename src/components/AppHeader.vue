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
        
            <ul class="debug">
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
            </ul>
            <div class="debug">boolando</div>
            <ul class="debug">
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
            </ul>

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

        color: $tertiary-color;
        
        .container {
            height: 100%;
            margin: 0 auto;
            @include d-flex_between_center;

            ul {
                list-style: none;
                @include d-flex_between_center;
            }
        }
    }

</style>
