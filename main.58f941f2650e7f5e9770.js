(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("D/wG"),n("L1EO");var o=n("dIfx"),r=(n("IlkV"),n("JBxO"),n("FdtR"),function(){var t={maximumAge:8*Math.pow(10,6)};return new Promise(function(e,n){navigator.geolocation.getCurrentPosition(e,n,t)})}),i=function(t){return fetch("http://api.apixu.com/v1/current.json?key=5b3041f515dc4b54b04142808191107&q="+t).then(function(t){return t.json()})};o.a.defaults.styling="material";var c={form:document.querySelector("#search-form"),location:document.querySelector('[data-field="location"]'),temperature:document.querySelector('[data-field="temp"]'),humidity:document.querySelector('[data-field="humidity"]'),wind:document.querySelector('[data-field="wind"]'),conditions:document.querySelector('[data-field="conditions"]'),icon:document.querySelector(".icon")};function u(t){c.icon.setAttribute("alt",t.current.condition.text),c.icon.setAttribute("src","https:"+t.current.condition.icon),a(c.location,t.location.name),a(c.temperature,""+t.current.temp_c),a(c.humidity,t.current.humidity+" %"),a(c.wind,t.current.wind_kph+" kph"),a(c.conditions,t.current.condition.text),document.querySelector("#weather").classList.remove("is-hidden")}function a(t,e){t.textContent=e}r().then(function(t){var e=t.coords;return i(e.latitude+","+e.longitude)}).then(function(t){return u(t)}).catch(function(){o.a.error({text:"Нет прав доступа к геопозиции, используйте поиск по имени города."})}),c.form.addEventListener("submit",function(t){t.preventDefault();var e=t.currentTarget.city,n=e.value;i(n).then(function(t){return u(t)}).catch(function(t){return console.error(t)}),e.value=""})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.58f941f2650e7f5e9770.js.map