  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCuc3s-rBeJC6JetByLLfOmTFA5bVwhjbY",
    authDomain: "gulliver-traveller2.firebaseapp.com",
    projectId: "gulliver-traveller2",
    storageBucket: "gulliver-traveller2.appspot.com",
    messagingSenderId: "152084623285",
    appId: "1:152084623285:web:104dbd8cf32f2545f473fc"
  };

  const app = initializeApp(firebaseConfig)
  
  export default app