<script>

    export default {
        props: {
            listObj: Object,
        }
    }

</script>

<template>

    <h3 v-if="listObj.title">{{ listObj.title }}</h3>
    <ul class="m-0 p-0">
        <li v-for="link in listObj.links">
            
            <a v-if="link.type == 'string'" :href="link.url" class="nav__link">{{ link.text }}</a>
            
            <a v-else-if="link.type == 'icon'" :href="link.url">
                <font-awesome-icon :icon="link.icon + ' ' + link.iconKit" />
            </a>
            
        </li>
    </ul>

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

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    h3 {
        font-size: 0.8rem;
        font-weight: 700;
    }

    ul {
        list-style: none;
        @include d-flex_between_center;
        gap: 8px;
    }

</style>