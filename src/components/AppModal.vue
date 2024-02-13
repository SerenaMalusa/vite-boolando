<script>
    // import data form the golbal state
    import { modal } from '../store';

    export default {
        data() {
            return {
                modal,
            }
        },
    }
</script>

<template>
    <div class="layover">
        <div class="app_modal p-2">
            <div class="modal_title pb-1">
                <h3 class="mb-0">{{ modal.title }}</h3>
                <div class="modal_close-icon">
                    <font-awesome-icon icon="fa-solid fa-square-xmark" />
                </div>
            </div>
            <div class="modal_content d-flex">
                <figure class="modal_imgs debug">ciao</figure>
                <div class="modal_info debug">ciao</div>
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

        }

        }

</style>