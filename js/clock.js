const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  
  const hours = String(date.getHours()).padStart(2, "0"); // string이 가져야 하는 길이, 추가할 문자
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  
  
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 웹사이트가 로드 되자마자 실행시키기 위함
setInterval(getClock, 1000); // ms 단위