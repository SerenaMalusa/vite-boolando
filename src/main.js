// impoport createApp and App to use Vue!
import { createApp } from 'vue'
import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons CMQ NON FUNZIONA CON ALL-(premium?)*/
import { faBagShopping, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube } from '@fortawesome/free-brands-svg-icons';
/* add icons to the library */
library.add(faUser, faHeart, faBagShopping, faHeartSolid, faTwitter, faSquareFacebook, faSquareInstagram, faSquarePinterest, faSquareYoutube );

// use createApp to create the const app, add the fontAwsome components then mount the app
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');