<script>
    // import data form the golbal state
    import { modal } from '../store';

    export default {
        data() {
            return {
                modal,
                isFrontImg: true,
            }
        },
        methods: {
            closeModal() {
                modal.isVisible = false;
            },
            getImgSrc(imgName) {
                const url = new URL ( '../assets/img/'+ imgName , import.meta.url);
                return url;
            },
            assignBadgeClass(badge) {
                let badgeClass = '';
                if (badge.type == 'tag') badgeClass = 'category';
                else if (badge.type == 'discount') badgeClass = 'discount';
                return badgeClass;
            },
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
            toggleIsFrontImg() {
                this.isFrontImg = !this.isFrontImg;
            },  
        }
    }
</script>

<template>
    <div class="layover">
        <div class="app_modal p-2">
            <div class="modal_title pb-1">
                <h3 class="mb-0">{{ modal.product.name }}</h3>
                <div @click="closeModal()" class="modal_close-icon">
                    <font-awesome-icon icon="fa-solid fa-square-xmark" />
                </div>
            </div>
            <div class="modal_content row pt-2 g-0">
                <figure class="modal_imgs col-6">
                    <div class="card">
                        <img :class="(isFrontImg == true) ? '' : 'd-none'" :src="getImgSrc(modal.product.frontImage)" alt="img2">
                        <img :class="(isFrontImg == false) ? '' : 'd-none'" :src="getImgSrc(modal.product.backImage)" alt="img2">
                        <div @click="toggleIsFrontImg()" :class="(isFrontImg == true) ? '' : 'd-none'" class="arrow arrowNext">
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </div>
                        <div @click="toggleIsFrontImg()" :class="(isFrontImg == false) ? '' : 'd-none'" class="arrow arrowPrev">
                            <font-awesome-icon icon="fa-solid fa-arrow-left" />
                        </div>
                    </div>
                </figure>
                <div class="modal_info col-6">
                    <div class="card text-start px-2">
                        <div class="half">
                            <h4 class="product_name">Brand: {{ modal.product.brand }}</h4>
                            <div class="product_badges">
                                <span 
                                v-for="badge in modal.product.badges" 
                                :class="assignBadgeClass(badge)"
                                class="tag me-2">{{ badge.value }}</span>
                            </div>
                        </div>
                        <div class="half">
                            <h4 class="product_price">Price:</h4>
                            <span v-if="modal.product.badges.at(-1).type == 'discount'" class="h4 text-danger">
                            {{ getDiscountedPrice(modal.product.price,modal.product.badges.at(-1).value) + '€ ' }} 
                            </span>
                            <span 
                            :class="(modal.product.badges.at(-1).type == 'discount') ? 'text-decoration-line-through' : ''" 
                            class="h4"> 
                            {{ modal.product.price }}€
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    // import variables and mixins
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .app_modal {
    background-color: white;
    width: 840px;
    text-align: center;

        .modal_title {
            border-bottom: 1px solid $primary_color;
            @include d-flex_between_center;

            .modal_close-icon {
                color: $primary_color;
                font-size: 1.4rem;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        figure {
            margin: 0;     
            position: relative;
            
            .arrow {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                &.arrowNext {                        
                    right: 10px;
                }

                &.arrowPrev {
                    left: 10px;
                }

                &:hover {
                    cursor: pointer;
                    color: $primary-color;
                }
            }
        }
        
        .card {
            border: none;
            height: 100%;

            .half {
                height: 50%;
            }
        }

    }

</style>