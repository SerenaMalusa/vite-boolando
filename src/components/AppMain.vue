<script>

    export default {
        data () {
            return {
                cards: [
                        {
                            id: 1,
                            frontImage: '1.webp',
                            backImage: '1b.webp',
                            brand: "Levi's",
                            name: 'Relaxed Fit Unisex',
                            price: 29.99,
                            isInFavorites: true,
                            badges: [
                            {
                                type: 'tag',
                                value: 'Sostenibilità',
                            },
                            {
                                type: 'discount',
                                value: '-50%',
                            },
                            ],
                        },
                        {
                            id: 2,
                            frontImage: '2.webp',
                            backImage: '2b.webp',
                            brand: 'Guess',
                            name: 'Roses Tee',
                            price: 20.99,
                            isInFavorites: true,
                            badges: [
                            {
                                type: 'discount',
                                value: '-30%',
                            },
                            ],
                        },
                        {
                            id: 3,
                            frontImage: '3.webp',
                            backImage: '3b.webp',
                            brand: 'Come Zucchero Filato',
                            name: 'Voglia di colori pastello',
                            price: 129.99,
                            isInFavorites: false,
                            badges: [
                            {
                                type: 'discount',
                                value: '-30%',
                            },
                            ],
                        },
                        {
                            id: 4,
                            frontImage: '4.webp',
                            backImage: '4b.webp',
                            brand: "Levi's",
                            name: 'Tee Unisex',
                            price: 14.99,
                            isInFavorites: false,
                            badges: [
                            {
                                type: 'tag',
                                value: 'Sostenibilità',
                            },
                            {
                                type: 'discount',
                                value: '-50%',
                            },
                            ],
                        },
                        {
                            id: 5,
                            frontImage: '5.webp',
                            backImage: '5b.webp',
                            brand: 'Maya Deluxe',
                            name: 'Stripe Bodice',
                            price: 99.99,
                            isInFavorites: true,
                            badges: [
                            {
                                type: 'tag',
                                value: 'Sostenibilità',
                            },
                            {
                                type: 'discount',
                                value: '-50%',
                            },
                            ],
                        },
                        {
                            id: 6,
                            frontImage: '6.webp',
                            backImage: '6b.webp',
                            brand: 'Esprit',
                            name: 'Maglione - Black',
                            price: 29.99,
                            isInFavorites: true,
                            badges: [
                            {
                                type: 'tag',
                                value: 'Sostenibilità',
                            },
                            ],
                        },
                        ],
            }
        },
        methods: {

        }
    }

</script>

<template>
   
    <div class="container">
        <div class="row justify-content-between align-items-center">

            <div v-for="card in cards" class="card p-0">
            
                <img src="../assets/img/1.webp" alt="product picture" class="card__img img-fixed">
                <img src="./img/1b.webp" alt="product zoom" class="d-none card__img img-hover">
            
                <div v-if="card.badges.at(-1).type == 'discount'" class="card__info py-1">
                    <p class="product_brand">{{ card.brand }}</p>
                    <h2 class="product_name">{{ card.name }}</h2>
                    <span class="product_price_sale text-danger fw-bold">{{ card.badges.at(-1).value }}</span>
                    <span class="product_price_full text-decoration-line-through">{{ card.price }}</span>
                </div>

                <div v-else class="card__info py-1">
                    <p class="product_brand">{{ card.brand }}</p>
                    <h2 class="product_name">{{ card.name }}</h2>
                    <span class="product_price_sale text-danger fw-bold">{{ card.price }}</span>
                </div>

                <div :class="(card.isInFavorites) ? 'text-danger' : ' '" class="card__heart">
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
                </div>

            </div>

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

        }
        
    }

</style>
