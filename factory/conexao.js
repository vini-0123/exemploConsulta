import Firebase from 'firebase';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "-",
  authDomain: "bd-vinigames.firebaseapp.com",
  projectId: "bd-vinigames",
  storageBucket: "bd-vinigames.firebasestorage.app",
  messagingSenderId: "723774311494",
  appId: "1:723774311494:web:ffa942972af4023fb0ce47"
};
Firebase.initializeApp(firebaseConfig);
const conexao = Firebase.firestore();
export default conexao;
