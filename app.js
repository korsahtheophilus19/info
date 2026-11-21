import { initializeApp } from "./firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfbC_Jsij4mdFoBCcE79yXzu3z6NZjSQw",
  authDomain: "contactme-25d88.firebaseapp.com",
  databaseURL: "https://contactme-25d88-default-rtdb.firebaseio.com",
  projectId: "contactme-25d88",
  storageBucket: "contactme-25d88.firebasestorage.app",
  messagingSenderId: "1008253742910",
  appId: "1:1008253742910:web:8f18607c295fdb379ac66f"
};

const app = initializeApp(firebaseConfig);

import { collection, addDoc } from "./firebase/firestore";
import { db } from "./firebase.js";

const submitBtn = document.querySelector(".submit");
let form = document.querySelector(".form");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const usernameInput = document.querySelector(".username").value;
    const userAddress = document.querySelector(".email").value;
    const userComments = document.querySelector(".comment").value;

    if(usernameInput == "" || userAddress == ""){
        window.alert("Please fill the blank spaces.");
    }
    
    try {
        const docRef = await addDoc(collection(db, "submission"), {
            name: usernameInput,
            email: userAddress,
            message: userComments,
            createdAt: new Date()
        });

        console.log("Document written with ID: ", docRef.id);
        
        // Clear the form fields after successful submission
        submitBtn.reset();
        alert("Data sent successfully!");
    
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Failed to send data. Check console for details.");
    }
})



try {
    const fbLinkBtn = document.querySelector(".fbLink").addEventListener("click", () => {
        window.location.href = "https://www.facebook.com/MWM.0242";
    })
    
    const githubLinkBtn = document.querySelector(".githubLink").addEventListener("click", () => {
        window.location.href = "https://www.github.com/korsahtheophilus19";
    })

    const tiktokLinkBtn = document.querySelector(".tiktokLink").addEventListener("click", () => {
        window.location.href = "https://www.tiktok.com/@mwm.0242";
    })

    const whatsappLinkBtn = document.querySelector(".whatsappLink").addEventListener("click", () => {
        window.location.href = "https://wa.me/233596274897?text=Your Message";
    })

    const dateYear = new Date().getFullYear();
    const currentYear = document.querySelector(".currentYear").textContent = `Copyright \u00A9 ${dateYear}. All right reserved.`

} catch (error) {
    console.log(error)
}

try {
    const hamburger = document.querySelector(".navbarContainer");
    const navMenu = document.querySelector(".navMenu");
    const navLinks = document.querySelectorAll(".navLink");

    // Toggle mobile menu open/close on hamburger click
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        console.log("element is clicked")
    });

    // Automatically close the mobile menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            console.log("element is auto clicked")

        });
    });

} catch (error) {
    console.log(error)
}