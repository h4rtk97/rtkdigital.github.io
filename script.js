import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDhA2xVPoa6XRZdBctfL75qQUShz6hai0k",
    authDomain: "rtk-login.firebaseapp.com",
    projectId: "rtk-login",
    storageBucket: "rtk-login.appspot.com",
    messagingSenderId: "266723649023",
    appId: "1:266723649023:web:b5c2d19348767de3f5f3ca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("googleSignIn").addEventListener("click", async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        document.getElementById("googleSignIn").style.display = "none";
        document.getElementById("userName").innerText = `Welcome, ${result.user.displayName}`;
    } catch (error) {
        console.error("Sign-in error:", error.message);
    }
});

const names = ["GoldenKing", "LuxuryMaster", "ElitePlayer", "VIPWinner"];

function addFakeWinner() {
    let winnerList = document.getElementById("winnerList");
    winnerList.insertAdjacentHTML("afterbegin", `<li>💰 ${names[Math.floor(Math.random() * names.length)]} won ₹10!</li>`);
    if (winnerList.children.length > 5) winnerList.removeChild(winnerList.lastChild);
}

setInterval(addFakeWinner, 3000);