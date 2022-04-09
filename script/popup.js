// Initialize button with user's preferred color
import webList from '../data/webList.js'
let cardWrap = document.getElementById("cardWrap");
const mappedCards = webList.map((info, index) => {
  return `<li key=${index}><a href=${info.url} target="_blank"><img src='../images/icon/${info.icon}.png' alt=${info.title}><span>${info.title}</span></a></li>`
}).join('')

cardWrap.innerHTML = mappedCards