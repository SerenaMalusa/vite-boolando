<script>

    import list from './_list.vue';

    export default {
        data () {
            return {

            }
        },
        props: {
            lists: Object,
            // informations: Object,
        },
        components: { list },
    }

</script>

<template>
   
   <section>

        <div class="container">
            <nav class="footer__nav footer_left">

                <list :listObj="lists.informations"/>
                    <!-- <h3 class="footer__title">{{ lists.informations.title }}</h3>
                    <ul class="nav__list m-0 p-0">
                        <li v-for="link in lists.informations.links">
                            <a href="#" class="nav__link">{{ link.text }}</a>
                        </li> -->

                        <!-- <li class="nav__element">
                            <a href="#" class="nav__link">{{ links.informations.links[0].text}}</a>
                        </li>
                        <li class="nav__element"> 
                            <a href="#" class="nav__link">Informativa privacy</a>
                        </li>
                        <li class="nav__element">
                            <a href="#" class="nav__link">Diritto di recesso</a>
                        </li> -->
                    <!-- </ul> -->
            </nav>

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
            color: $tertiary-color;
            font-size: 0.8rem;

        }
    }

</style>
