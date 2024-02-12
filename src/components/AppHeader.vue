<script>

    import list from './_list.vue';
    
    export default {
        props: {
            lists: Object,
        },
        components: { list },
    };

</script>

<template>
   
   <section>

       <div class="container p-0">

            <list :listObj="lists.categories"/>
        
            <!-- <ul class="m-0 p-0">
                <li v-for="link in lists.categories">
                    <a :href="link.url">{{ link.text }}</a>
                </li> -->
                <!-- <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li> -->
            <!-- </ul> -->

            <div>
                <img src="../assets/img/boolean-logo.png" alt="boolean logo">
            </div>

            <list :listObj="lists.userLinks"/>

            <!-- <ul class="mb-0 p-0">
                
                <li v-for="link in lists.userLinks">
                    <a :href="link.url">
                        <font-awesome-icon :icon="link.icon + ' ' + link.iconKit" />
                    </a>
                </li> -->


                <!-- <li class="debug">
                    <a href="#"> -->
                        <!-- <i class="fa-regular fa-user"></i> -->
                        <!-- <font-awesome-icon icon="fa-regular fa-user" />                    </a> -->
                <!-- </li>
                <li class="debug">
                    <a href="#">
                        <font-awesome-icon icon="fa-regular fa-heart" />
                    </a>
                </li>
                <li class="debug">
                    <a href="#">
                        <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                    </a>
                </li> -->
            <!-- </ul> -->

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
            font-size: 0.8rem;
            font-weight: 700;

            @include d-flex_between_center;

            ul {
                list-style: none;
                @include d-flex_between_center;
                gap: 8px;
            }

            img {
                height: 25px;
            }
        }
    }

</style>
