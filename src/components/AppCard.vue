<script>

    export default {
        props: {
            products: Array,
            product: Object,
            i: Number,
        },
        data() {
            return {
                activeIndex: 0,
                isOnOver: false,
            }
        },
        computed: {
            activeProduct() {
                return this.products[this.activeIndex];
            },
        },
        methods: {
            getDiscountPerc(value) {
                let valueNum = parseInt(value.substr(1,2));
                if(isNaN(valueNum)) {
                    valueNum = 0;
                }
                return valueNum;
            },

            getDiscountedPrice(fullPrice,data) {
                const discountPerc = this.getDiscountPerc(data);
                const discount = fullPrice * discountPerc / 100;
                const finalPrice = fullPrice - discount;
                return finalPrice.toFixed(2);
            },

            getImgPath(imgName) {
                const url = new URL ( '../assets/img/'+ imgName , import.meta.url);
                return url;
            },

            swapImgs(index) {
                this.activeIndex = index;
                this.isOnOver = true;
            },

            swapImgsBack(index) {
                this.activeIndex = 0;
                this.isOnOver = false;
            },

            toggleToFavourites(product) {
                product.isInFavorites = !product.isInFavorites;
            },
        },
    }

</script>

<template>
    
    <div class="card p-0">

        <figure @mouseover="swapImgs(i)" @mouseleave="swapImgsBack(i)" class="mb-1">
            <img :src="getImgPath(product.frontImage)" :class="(activeIndex == i && isOnOver == true) ? 'd-none' : ''" alt="product picture" class="card__img img-fixed">
            <img :src="getImgPath(product.backImage)" :class="(activeIndex == i && isOnOver == true) ? '' : 'd-none'"  alt="product zoom" class="card__img img-hover">
        </figure>  
        
        <div v-if="product.badges.at(-1).type == 'discount'" class="card__info px-1">
            <p class="product_brand">{{ product.brand }}</p>
            <h2 class="product_name">{{ product.name }}</h2>
            <span class="product_price_sale text-danger fw-bold me-1">{{ getDiscountedPrice(product.price, product.badges.at(-1).value) }}€</span>
            <span class="product_price_full text-decoration-line-through">{{ product.price }}€</span>
        </div>

        <div v-else class="card__info px-1">
            <p class="product_brand">{{ product.brand }}</p>
            <h2 class="product_name">{{ product.name }}</h2>
            <span class="product_price_sale text-danger fw-bold">{{ product.price }}€</span>
        </div>

        <div 
        :class="(product.isInFavorites) ? 'text-danger' : ' '" 
        @click="toggleToFavourites(product)"
        class="card__heart">
            <font-awesome-icon icon="fa-solid fa-heart" />
        </div>

        <div v-if="product.badges.length > 1 && product.badges[0].type !== 'discount'" class="card__tags">
            <span  class="card__tag discount d-50 me-1">{{ product.badges.at(-1).value }}</span>
            <span class="card__tag category sustainable">{{ product.badges[0].value }}</span>
        </div>

        <div v-else-if="product.badges.length == 1 && product.badges[0].type == 'discount'" class="card__tags">
            <span  class="card__tag discount d-50">{{ product.badges[0].value }}</span>
        </div>                  

        <div v-else-if="product.badges.length == 1 && product.badges[0].type == 'tag'" class="card__tags">
            <span class="card__tag category sustainable">{{ product.badges[0].value }}</span>
        </div>
    
    </div>        

</template>

<style lang="scss" scoped>

    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .card {
         width: calc(100% / 3 - $grid-spacing);
        position: relative;
        font-size: 0.8rem;

        .product_name {
            text-transform: uppercase;
            font-size: 0.9rem;
        }

        .card__heart {
            padding: 2.5px;
            background-color: white;
            aspect-ratio: 1;
            height: $heart-h;
            text-align: center;
            font-size: 1.3rem;

            position: absolute;
            right: 0;
            top: 8px;

            &:hover {
                cursor: pointer;
            }
        }

        .card__tags {
                position: absolute;
                bottom: 100px;

                .card__tag {
                    display: inline-block;
                    padding: 4px 8px;
                    color: white;
                    font-size: 0.7rem;
                    font-weight: bold;

                    &.discount {
                        background-color: red;
                    }

                    &.category {
                        background-color: green;
                    }
                }
        }
    }

</style>