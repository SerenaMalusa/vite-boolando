<script>

    export default {
        data () {
            return {
                
            }
        },
    }

</script>

<template>
   
    <div class="container">
        <div class="row justify-content-between align-items-center">

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

            </div>

            <div class="col-4 card p-0">

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

</div>
<div class="col-4 card p-0">

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

</div>
<div class="col-4 card p-0">

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

</div>
<div class="col-4 card p-0">

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

</div>
<div class="col-4 card p-0">

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

</div>
            
            
            <!-- <div class="col-3 card debug"></div>
            <div class="col-3 card debug"></div>
            <div class="col-3 card debug"></div>
            <div class="col-3 card debug"></div>
            <div class="col-3 card debug"></div> -->
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
