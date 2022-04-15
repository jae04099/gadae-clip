import { webList, schedule } from '../data/webList.js'

let cardWrap = document.getElementById("cardWrap");
let scheduleArticle = document.getElementById("scheduleArticle");

const mappedCards = webList.map((info, index) => {
  return `<li key=${index}><a href=${info.url} target="_blank"><img src='../images/icon/${info.icon}.png' alt=${info.title}><span>${info.title}</span></a></li>`
}).join('')

cardWrap.innerHTML = mappedCards;

function leftPad(value) {
  if (value >= 10) {
    return value;
  }
  return `${value}`;
}

function toStringByFormatting(source, delimiter = '.') {
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [month, day].join(delimiter);
}

const today = toStringByFormatting(new Date());
const todayNum = Number(today)
const mappedSchedule = schedule.filter((e) => Number(e.start_date) <= todayNum && Number(e.end_date) >= todayNum).map((info, index) => {
  return `<li>${info.title}</li>`
}).join('')

scheduleArticle.innerHTML = `<p>${today}</p><ul id="scheduleDetail" class="schedule-detail"></ul>`

let scheduleDetail = document.getElementById("scheduleDetail");

scheduleDetail.innerHTML = mappedSchedule;