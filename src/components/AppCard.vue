<script>

    export default {
        props: {
            cards: Array,
            card: Object,
            i: Number,
        },
        data() {
            return {
                activeIndex: 0,
                isOnOver: false,
            }
        },
        computed: {
            activeCard() {
                return this.cards[this.activeIndex];
            },
        },
        methods: {
            getDiscountPerc(value) {
                const valueNum = parseInt(value.substr(1,2));
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

            toggleToFavourites(card) {
                card.isInFavorites = !card.isInFavorites;
            },
        }
    }

</script>

<template>
    
    <div class="card p-0">

        <figure @mouseover="swapImgs(i)" @mouseleave="swapImgsBack(i)" class="mb-1">
                    <img :src="getImgPath(card.frontImage)" :class="(activeIndex == i && isOnOver == true) ? 'd-none' : ''" alt="product picture" class="card__img img-fixed">
                    <img :src="getImgPath(card.backImage)" :class="(activeIndex == i && isOnOver == true) ? '' : 'd-none'"  alt="product zoom" class="card__img img-hover">
        </figure>    
    
    </div>        

</template>

<style lang="scss" scoped>



</style>