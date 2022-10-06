import { loginToGulliverTraveller } from "./firebase/gulliver-traveler.js";

const txtEmail = document.getElementById("email");
const password = document.getElementById("password");
const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", async () => {
  const login = {
    email: txtEmail.value,
    password: password.value,
  };

  const loginId = await loginToGulliverTraveller(login);
  // console.log(`inscrito com sucesso: ${loginId}`)
  alert("Cadastro com sucesso!");
});




// Modal menu
const modalMenu = document.querySelector(".modal__menu");
document.querySelector(".abrirModal").addEventListener("click", () => {
  modalMenu.style.left = "0%";
});

document.querySelector(".fecharModal").addEventListener("click", () => {
  modalMenu.style.left = "100%";
});

// Login popup

const login = document.querySelector(".login");
const popupLogin = document.querySelector(".popup-login");
const closeIconPopup = document.querySelector(".closeIcon");

login.addEventListener("click", () => {
  popupLogin.classList.add("active");
});

closeIconPopup.addEventListener("click", () => {
  popupLogin.classList.remove("active");
});

// Testimonials
const [nextButtonCards, prevButtonCards] = document.querySelectorAll(
  ".testimonials-button button"
);

const allCards = document.querySelectorAll(".cards-testimonials");
const arrowNext = document.getElementsByClassName(".cardsTestimonials");
const arrowTight = document.getElementById("#card-blur");

prevButtonCards.addEventListener("click", () => {
  let atualPosition = 0;

  allCards.forEach((button, index) => {
    if (button.classList.contains("active")) {
      atualPosition = index;
      allCards[index].classList.remove("active");
    }
  });

  if (allCards[atualPosition - 1]) {
    allCards[atualPosition - 1].classList.add("active");
  } else {
    allCards[allCards.length - 1].classList.add("active");
  }
  console.log("back");
});

nextButtonCards.addEventListener("click", () => {
  let atualPosition = 0;

  allCards.forEach((button, index) => {
    if (button.classList.contains("active")) {
      atualPosition = index;
      allCards[index].classList.remove("active");
    }
  });

  if (allCards[atualPosition + 1]) {
    allCards[atualPosition + 1].classList.add("active");
  } else {
    allCards[0].classList.add("active");
  }
});



// Ativar modal google maps


const modalMaps = document.querySelector("#gmap_canvasid")

function alternateCardModalMaps(title){
  const newSrc = `https://maps.google.com/maps?q=${encodeURI(title)}t=&z=13&ie=UTF8&output=embed`
  modalMaps.querySelector("iframe").src = newSrc
}

modalMaps.addEventListener("click", () =>{
  modalMaps.classList.remove("active")
  modalMaps.querySelector("iframe").src = ""
})


document.querySelectorAll(".card-product").forEach((card) =>{
  card.addEventListener("click", () =>{
    let myAddress= `${card.querySelector("h3").innerText}, ${card.querySelector("p").innerText}`
    alternateCardModalMaps(myAddress)
    modalMaps.classList.add("active")
  })
})
