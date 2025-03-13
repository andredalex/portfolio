// Importa solo ciò che serve per evitare problemi con SSR (Server Side Rendering)
import { initializeApp } from "firebase/app";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBJyXjuBThR4Q0bLvWgFMM---CKwxecNM4",
  authDomain: "portfolio-88f72.firebaseapp.com",
  projectId: "portfolio-88f72",
  storageBucket: "portfolio-88f72.appspot.com", // ⚠️ Correggere se necessario
  messagingSenderId: "476733206855",
  appId: "1:476733206855:web:7c020bfbda5f0368699c62",
  measurementId: "G-F2E15ZR74S",
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Esporta Firebase
export { app };
