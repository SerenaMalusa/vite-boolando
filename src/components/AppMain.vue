<script>

    export default {
        data () {
            return {

            }
        },
    }

</script>

<template>
   
    <div class="container">
        <div class="row">
            <div class="col debug"></div>
            <div class="col debug"></div>
            <div class="col debug"></div>
            <div class="col debug"></div>
            <div class="col debug"></div>
            <div class="col debug"></div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {
        margin-top: calc($grid-spacing * 4);
        margin-bottom: calc($grid-spacing * 4);
        border: 1px solid red;

        .row {
            height: 100%;
            flex-wrap: wrap;
        }
        
    }

</style>
