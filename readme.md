## Esercizio di oggi (08/02/24): Vite Boolando

Nome repo: `vite-boolando`

### Descrizione 
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.  
Non esagerate con i componenti: less is more.  
L'esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).  

### Bonus

Popoliamo le voci dell'header (sia le tre voci testuali che le tre icone) dinamicamente.  

### Milestone 1
Create un componente Card predisposto per ricevere dall'esterno le informazioni necessarie alla visualizzazione dei propri elementi (con le props).  
Potete testarlo stampando una singola Card con informazioni statiche.  

### Milestone 2
Definite un array di prodotti nel componente AppMain.   
Potete prendere spunto dall'array allegato o usarlo direttamente così com'è.   
Iterate sull'array di prodotti e per ognuno di essi create un componente Card, inviando le informazioni necessarie alla visualizzazione.

### Bonus
Facciamo in modo che il cuore nella card del prodotto sia colorato o vuoto a seconda del valore della proprietà "isInFavourites".

### Bonus 2
Spostate i menu dinamici dai componenti AppHeader e AppFooter al componente App. Inviateglieli poi tramite props.

### MOCKING API
Installate la libreria json-server.  
Mettete in un file .json la struttura dati dei prodotti (vedi allegato - se non ne avete una ad hoc potete usarlo direttamente).  
Fate partire il server delle mocking API.  
Testate il server e recuperate l'indirizzo che vi restituisce la lista dei prodotti.  
Chiamatelo via axios e stampare in pagina i prodotti presi dalla API. Di seguito i link per l'installazione dei pacchetti necessari:  
`https://www.npmjs.com/package/json-server
https://www.npmjs.com/package/axios  `  

### GLOBAL STATE
Realizzare un file "store" come visto in classe / come descritto dalla DOC di Vue.  
Usarlo per conservare ed utilizzare l'endpoint base (localhost:3000).  

### BONUS
Aggiungere al global state (store) anche la lista di prodotti recuperata dal JSON Server ed utilizzarla durante la stampa.

### Descrizione
Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento "show-product" verso il componente App.  
In App, quando riceviamo l'evento, apriamo una modale che mostra tutte le informazioni testuali del prodotto. Nella modale è presente una X (o un pulsante) per chiuderla.

### Bonus
Proviamo a creare una modale più completa: mostriamo le immagini del prodotto sulla sinistra e le informazioni di testo sulla destra.