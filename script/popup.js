import { webList, schedule } from '../data/webList.js'

let cardWrap = document.getElementById("cardWrap");
let scheduleArticle = document.getElementById("scheduleArticle");

const mappedCards = webList.map((info, index) => {
  return `<li key=${index}><a href=${info.url} target="_blank"><div class="icon_wrap"><img src='../images/icon/${info.icon}.png' alt=${info.title}></div><span>${info.title}</span></a></li>`
}).join('')

cardWrap.innerHTML = mappedCards;

function leftPad(value) {
  if (value >= 10) {
    return value;
  }
  return `${value}`;
}

function replaceDate(props) {
  const tmpVal = props.year + '-' + props.start_date.replace('.', '-');
  const valToNum = Date.parse(tmpVal);
  return valToNum;
}
// start date <= target <= end date / 
//YYYY-MM-DD
function toStringByFormatting(source, delimiter = '.') {
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());
  return [month, day].join(delimiter);
}
const today = toStringByFormatting(new Date());
const todayNum = Number(today)
const mappedSchedule = () => {
  if (schedule.filter((e) => Number(e.start_date) <= todayNum && Number(e.end_date) >= todayNum).length) {
    schedule.filter((e) => Number(e.start_date) <= todayNum && Number(e.end_date) >= todayNum).map((info, index) => {
      { info.start_date == info.end_date ? (`<li key='${index}'><span>${info.start_date}</span>${info.title}</li>`) : (`<li key='${index}'><span>${info.start_date} - ${info.end_date}</span>${info.title}</li>`) }
    }).join('')
  } else {
    const tmpObj = schedule.filter((e) => Number(e.start_date) > todayNum)[0]
    if (tmpObj.start_date == tmpObj.end_date) return `<li><span>${tmpObj.start_date}</span>${tmpObj.title}</li>`
    else return `<li><span>${tmpObj.start_date} - ${tmpObj.end_date}</span>${tmpObj.title}</li>`
  }
}

scheduleArticle.innerHTML = `<ul id="scheduleDetail" class="schedule-detail"></ul>`

let scheduleDetail = document.getElementById("scheduleDetail");

scheduleDetail.innerHTML = mappedSchedule();