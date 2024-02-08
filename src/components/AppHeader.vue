<script>

    export default {
        data () {
            return {
                links: [
                    'Donna',
                    'Uomo',
                    'Bambino'
                ],
                icons: [],
            }
        },
    }

</script>

<template>
   
   <section>

       <div class="container">
        
            <ul>
                <li v-for="link in links">
                    <a href="#">{{ link  }}</a>
                </li>
                <!-- <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li>
                <li class="debug"><a href="#"></a></li> -->
            </ul>
            <div>
                <img src="../assets/img/boolean-logo.png" alt="boolean logo">
            </div>
            <ul class="debug">
                <li class="debug">
                    <a href="#">
                        <i class="fa-regular fa-user"></i>
                    </a>
                </li>
                <li class="debug">
                    <a href="#">
                        <i class="fa-regular fa-heart"></i>
                    </a>
                </li>
                <li class="debug">
                    <a href="#">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
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
