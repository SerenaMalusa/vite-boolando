<script>

    import { apiUri } from '../store';

    import axios from 'axios';

    import AppCard from './AppCard.vue';

    export default {
        data () {
            return {
                apiUri,
                products: [],
            }
        },
        components: { AppCard },
        methods: {
            fetchProducts() {
                axios.get(this.apiUri.uri)
                    .then((res) => {
                        this.products = res.data;
                    });
            },
        },
        created() {
            this.fetchProducts();
        },
    }

</script>

<template>
   
    <div class="container">
        <div class="row justify-content-between align-items-center">

            <app-card v-for="(product,i) in products" :products="products" :product="product" :i="i" />

            <!-- <div v-for="(card,i) in cards" class="card p-0"> -->
            
                <!-- <figure @mouseover="swapImgs(i)" @mouseleave="swapImgsBack(i)" class="mb-1">
                    <img :src="getImgPath(card.frontImage)" :class="(activeIndex == i && isOnOver == true) ? 'd-none' : ''" alt="product picture" class="card__img img-fixed">
                    <img :src="getImgPath(card.backImage)" :class="(activeIndex == i && isOnOver == true) ? '' : 'd-none'"  alt="product zoom" class="card__img img-hover">
                </figure>
            
                <div v-if="card.badges.at(-1).type == 'discount'" class="card__info px-1">
                    <p class="product_brand">{{ card.brand }}</p>
                    <h2 class="product_name">{{ card.name }}</h2>
                    <span class="product_price_sale text-danger fw-bold me-1">{{ getDiscountedPrice(card.price, card.badges.at(-1).value) }}</span>
                    <span class="product_price_full text-decoration-line-through">{{ card.price }}</span>
                </div>

                <div v-else class="card__info px-1">
                    <p class="product_brand">{{ card.brand }}</p>
                    <h2 class="product_name">{{ card.name }}</h2>
                    <span class="product_price_sale text-danger fw-bold">{{ card.price }}</span>
                </div>

                <div 
                :class="(card.isInFavorites) ? 'text-danger' : ' '" 
                @click="toggleToFavourites(card)"
                class="card__heart">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                </div>

                <div v-if="card.badges.length > 1 && card.badges[0].type !== 'discount'" class="card__tags">
                    <span  class="card__tag discount d-50 me-1">{{ card.badges.at(-1).value }}</span>
                    <span class="card__tag category sustainable">{{ card.badges[0].value }}</span>
                </div>

                <div v-else-if="card.badges.length == 1 && card.badges[0].type == 'discount'" class="card__tags">
                    <span  class="card__tag discount d-50">{{ card.badges[0].value }}</span>
                </div>                  

                <div v-else-if="card.badges.length == 1 && card.badges[0].type == 'tag'" class="card__tags">
                    <span class="card__tag category sustainable">{{ card.badges[0].value }}</span>
                </div> -->

            <!-- </div> -->

            <!--
                
                <div class="card p-0">

                <img src="../assets/img/1.webp" alt="product picture" class="card__img img-fixed">
                <img src="./img/1b.webp" alt="product zoom" class="d-none card__img img-hover">
                
                <div class="card__info py-1">
                    <p class="product_brand">Levi's</p>
                    <h2 class="product_name">Relaxed fit tee unisex</h2>
                    <span class="product_price_sale text-danger fw-bold">14,99€</span>
                    <span class="product_price_full text-decoration-line-through">29,99€</span>
                </div>

                <div class="card__heart">
                    <font-awesome-icon icon="fa-solid fa-heart" />
                </div>

                <div class="card__tags">
                    <span class="card__tag discount d-50">-50%</span>
                    <span class="card__tag category sustainable">sustainable</span>
                </div>        

            </div> -->
            
        </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {        
        margin-top: calc($grid-spacing * 4);
        margin-bottom: calc($grid-spacing * 4);

        .row {
            height: 100%;
            flex-wrap: wrap;
            gap: $grid-spacing;
        }        
    }

</style>
