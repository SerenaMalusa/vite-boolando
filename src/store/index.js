// import reactive method form Vue
import { reactive } from 'vue';

// create and export variable for API url
export const apiUri = reactive({
    uri: 'http://localhost:3000/',
});

// create and export variable for product list 
export const productList = reactive({
    // it'empty because the array will be fetched after app creation in AppMain
    products: [],
});

// create and export the modal related variables
export const modal = reactive({
    isVisible: false,
    product: {
        frontImage: '',
        backImage: '',
        brand: "",
        name: "",
        price: 0,
        isInFavorites: false,
        badges: [],
    }
});