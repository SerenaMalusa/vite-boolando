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
    isVisible: true,
    frontImage: '2.webp',
    backImage: '2b.webp',
    brand: "Guess",
    name: "Roses Tee",
    price: 20.99,
    isInFavorites: true,
    badges: [
        {
            "type": "tag",
            "value": "Sostenibilità"
        },
        {
        type: "discount",
        value: "-30%"
        },
        {
            type: "discount",
            value: "-50%"
        }
    ]
});