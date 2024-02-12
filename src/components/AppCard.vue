<script>

    export default {
        // get the necessary values trough props
        props: {
            products: Array,
            product: Object,
            i: Number,
        },
        data() {
            return {
                // index of the card on hover
                activeIndex: 0,
                // switch var that activates only when a figure is on hover
                isOnOver: false,
            }
        },
        computed: {
            // this is the card that is on hover (if none is then it's the first card)
            activeProduct() {
                return this.products[this.activeIndex];
            },
        },
        methods: {
            // function that gets a value and parses it (if NaN returns 0) 
            getDiscountPerc(value) {
                let valueNum = parseInt(value.substr(1,2));
                if(isNaN(valueNum)) {
                    valueNum = 0;
                };
                return valueNum;
            },
            // function that gets a price and a value and returns the discounted price
            getDiscountedPrice(fullPrice,data) {
                // parse the value from data
                const discountPerc = this.getDiscountPerc(data);
                // calc the discount %, then the discounted price and returns it
                const discount = fullPrice * discountPerc / 100;
                const finalPrice = fullPrice - discount;
                return finalPrice.toFixed(2);
            },
            // function that returns the dynamic path of the imgs
            getImgPath(imgName) {
                const url = new URL ( '../assets/img/'+ imgName , import.meta.url);
                return url;
            },
            // function that activate the card that is on hover
            swapImgs(index) {
                // change the active card
                this.activeIndex = index;
                // switch variable on
                this.isOnOver = true;
            },
            // function that activate the card that was on hover
            swapImgsBack(index) {
                // change the active card back
                this.activeIndex = 0;
                // switch variable off
                this.isOnOver = false;
            },
            // function that changes the value of the key isInFavorites for the clicked card
            toggleToFavourites(product) {
                product.isInFavorites = !product.isInFavorites;
            },
        },
    }

</script>

<template>
    
    <div class="card p-0">

        <!-- card imgs, they swap when this figure is on hover   -->
        <figure @mouseover="swapImgs(i)" @mouseleave="swapImgsBack(i)" class="mb-1">
            <img :src="getImgPath(product.frontImage)" :class="(activeIndex == i && isOnOver == true) ? 'd-none' : ''" alt="product picture" class="card__img img-fixed">
            <img :src="getImgPath(product.backImage)" :class="(activeIndex == i && isOnOver == true) ? '' : 'd-none'"  alt="product zoom" class="card__img img-hover">
        </figure>  
        
        <!-- div that contains the product's informations -->
        <div class="card__info px-1">
            <p class="product_brand">{{ product.brand }}</p>
            <h2 class="product_name">{{ product.name }}</h2>
            <!-- this span is shown when the type of last product badge is 'discount'.
                It prints the discounted price (getDiscountedPrice from full price and the value of the discount badge) -->
            <span v-if="product.badges.at(-1).type == 'discount'" class="product_price_sale text-danger fw-bold me-1">{{ getDiscountedPrice(product.price, product.badges.at(-1).value) }}€</span>
            <span class="product_price_full text-decoration-line-through">{{ product.price }}€</span>
        </div>

        <!-- this div manages the isInFavorites key of the card: 
        if it's true then the div color is red;
        if it's clicked it changes from true to false and the opposite -->
        <div 
        :class="(product.isInFavorites) ? 'text-danger' : ' '" 
        @click="toggleToFavourites(product)"
        class="card__heart">
            <font-awesome-icon icon="fa-solid fa-heart" />
        </div>

        <!-- this div is shown only if there are more than one badges and the type of the last one is 'discount' -->
        <div v-if="product.badges.length > 1 && product.badges[0].type !== 'discount'" class="card__tags">
            <span  class="card__tag discount d-50 me-1">{{ product.badges.at(-1).value }}</span>
            <span class="card__tag category sustainable">{{ product.badges[0].value }}</span>
        </div>

        <!-- this div is shown only if there is just one badge and it's type is 'discount' -->
        <div v-else-if="product.badges.length == 1 && product.badges[0].type == 'discount'" class="card__tags">
            <span  class="card__tag discount d-50">{{ product.badges[0].value }}</span>
        </div>                  

        <!-- this div is shown if there is just one badge but it's type is 'tag' -->
        <div v-else-if="product.badges.length == 1 && product.badges[0].type == 'tag'" class="card__tags">
            <span class="card__tag category sustainable">{{ product.badges[0].value }}</span>
        </div>
    
    </div>        

</template>

<style lang="scss" scoped>

    // import variables and mixins
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .card {
        border: none;
        width: calc(100% / 3 - $grid-spacing);
        font-size: 0.8rem;
        position: relative;

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