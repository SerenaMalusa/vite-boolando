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
        </div>
   
    </section>


</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    section {
        background-color: $secondary-color;
        height: calc($header-h * 1.5);

        .container {
            height: 100%;
            @include d-flex_between_center;
        }
    }

</style>
