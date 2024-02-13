<script>
    export default {
        
    }
</script>

<template>
    <div class="layover">
        <div class="loader">
            <font-awesome-icon 
            class="icon" 
            icon="fa-solid fa-spinner fa-spin" 
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>

    // import mixins and variables
    @use '../styles/partials/mixins' as *;
    @use '../styles/partials/variables' as *;

    .loader {
        
        .icon {
            color: $primary-color;
            font-size: 4rem;
        }
        
    }

</style>