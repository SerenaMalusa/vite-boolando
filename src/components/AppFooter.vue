<script>

    // import the list component
    import AppList from './AppList.vue';

    export default {
        data () {
            return {

            }
        },
        // get the list object as a prop
        props: {
            lists: Object,
            // informations: Object,
        },
        // write the list component so that it can be used here
        components: { AppList },
    }

</script>

<template>
   
   <section>

        <div class="container">
            <nav class="footer__nav footer_left">

                <!-- list component whith prop informations -->
                <app-list :listObj="lists.informations"/>
                    <!-- <h3 class="footer__title">{{ lists.informations.title }}</h3>
                    <ul class="nav__list m-0 p-0">
                        <li v-for="link in lists.informations.links">
                            <a href="#" class="nav__link">{{ link.text }}</a>
                        </li>

                        <li class="nav__element">
                            <a href="#" class="nav__link">{{ links.informations.links[0].text}}</a>
                        </li>
                        <li class="nav__element"> 
                            <a href="#" class="nav__link">Informativa privacy</a>
                        </li>
                        <li class="nav__element">
                            <a href="#" class="nav__link">Diritto di recesso</a>
                        </li>
                    </ul> -->
            </nav>

            <nav class="footer__nav right">
                <!-- list component whith prop informations -->
                <app-list :listObj="lists.social" />
            </nav>

        </div>
   
    </section>


</template>

<style lang="scss" scoped>

    // import variables and mixins
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    section {
        background-color: $secondary-color;
        height: calc($header-h * 1.5);

        .container {
            padding: 0;
            height: 100%;
            color: $tertiary-color;
            font-size: 0.8rem;
            
            @include d-flex_between_center;
        }
    }

</style>
