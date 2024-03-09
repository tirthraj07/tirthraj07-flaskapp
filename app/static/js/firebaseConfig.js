import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { 
    getFirestore, collection, 
    getDocs, 
    addDoc, 
    doc, deleteDoc, 
    onSnapshot,
    query, where,
    orderBy, limit,
    serverTimestamp, Timestamp,
    getDoc, updateDoc

} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const configureFirebase = async function(name,email,phone,message){
    try{
        const response = await fetch('/firebaseConfig');
        if(!response.ok){
            throw new Error('Failed to fetch Firebase configuration');
        }
        const firebaseConfig = await response.json();
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const messageRef = collection(db,'messages');
        addDoc(messageRef,{
            name:name,
            email:email,
            phone:phone,
            message:message
        })
        .then(()=>{
            alert('Message Sent Successfully')
        })
        .catch((err)=>{
            throw new Error(err);
        })
    }
    catch(err){
        console.log(err);
        alert(err);
    }
}
console.log("Hello World")

document.getElementById('messageForm').addEventListener('submit',function(e){
    try{
        e.preventDefault();
        const form = document.getElementById('messageForm')
        const name = form.fullname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        configureFirebase(name,email,phone,message);
        document.getElementById('messageForm').reset();
    }
    catch(err){
        alert(err);
        console.log(err);
    }
})