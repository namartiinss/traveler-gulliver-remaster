import app from './app.js'
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export async function loginToGulliverTraveller(login) {

   const db = getFirestore(app)
   const gulliverTravellercollection = collection(db, 'gulliver-traveller2')
   const docRef = await addDoc(gulliverTravellercollection, login)
   return docRef.id
}

export async function getLogins() {
   const db = getFirestore()
   const colRef = collection(db, 'gulliver-traveller2')

   const docsSnap = await getDocs(colRef);
   return docsSnap

}