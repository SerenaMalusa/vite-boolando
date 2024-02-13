<script>
    // import data form the golbal state
    import { modal } from '../store';

    export default {
        data() {
            return {
                modal,
            }
        },
        methods: {
            getImgSrc(imgName) {
                const url = new URL ( '../assets/img/'+ imgName , import.meta.url);
                return url;
            },
            assignBadgeClass(badge) {
                let badgeClass = '';
                if (badge.type == 'tag') badgeClass = 'category';
                else if (badge.type == 'discount') badgeClass = 'discount';
                return badgeClass;
            }
        }
    }
</script>

<template>
    <div class="layover">
        <div class="app_modal p-2">
            <div class="modal_title pb-1">
                <h3 class="mb-0">{{ modal.name }}</h3>
                <div class="modal_close-icon">
                    <font-awesome-icon icon="fa-solid fa-square-xmark" />
                </div>
            </div>
            <div class="modal_content row pt-2 g-0">
                <figure class="modal_imgs col-6">
                    <div class="card">
                        <img class="" :src="getImgSrc(modal.frontImage)" alt="img2">
                        <img class="d-none" :src="getImgSrc(modal.backImage)" alt="img2">
                    </div>
                </figure>
                <div class="modal_info col-6">
                    <div class="card text-start px-2">
                        <h4 class="product_name">Brand: {{ modal.brand }}</h4>
                        <div class="product_badges">
                            <span 
                            v-for="badge in modal.badges" 
                            :class="assignBadgeClass(badge)"
                            class="tag me-2">{{ badge.value }}</span>
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

    .layover {
        backdrop-filter: blur(5px) grayscale(70%);

        @include d-flex_center_center;

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        .app_modal {
            background-color: white;
            width: 70%;
            text-align: center;

            .modal_title {
                border-bottom: 1px solid $primary_color;
                @include d-flex_between_center;

                .modal_close-icon {
                    color: $primary_color;
                    font-size: 1.4rem;
                }
            }

            figure {
                margin: 0;               
            }
            
            .card {
                border: none;
            }

        }

        }

</style>