import { getLogins } from "./firebase/gulliver-traveler.js";

const contentLogins = document.querySelector(".contentLogins")

function insertInContent(email, password){
  const element = `
      <p>Login: ${email}</p>
      <p class="password">Senha: ${password}</p>
  `
  contentLogins.insertAdjacentHTML("beforeend", element)
}

const myItens = getLogins();
myItens.then((doc) => doc.forEach((el) => insertInContent(el.data().email, el.data().password)));
