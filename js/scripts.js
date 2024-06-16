
function GetCookie (name) {
    let pairs = document.cookie.split(";"); // 쿠키문자열을 ;을 경계로 분할
    for(let i=0; i<pairs.length; i++) {
        let pair = pairs[i].trim(); // 쿠키 앞뒤의 빈칸 제거
        let unit = pair.split("=");
        if(unit[0] == name)
            return decodeURIComponent(unit[1]);
    }
    return null;
}
function SetCookie (name, value, expireDate) {
    let cookieStr = name + "=" + encodeURIComponent(value) + 
        ((expireDate == null)?"":("; expires=" + expireDate.toUTCString()));
        document.cookie = cookieStr;
}
function GetRandomInt() {
    return Math.floor(Math.random() * 3);
  }
function GetTemperature() {
    return Math.floor(Math.random() * 20)+10;//최저 10도 최고 30도
  }
/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project