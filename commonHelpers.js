import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as F,i as C}from"./assets/vendor-651d7991.js";const t=document.querySelector("button"),b=document.querySelector(".value[data-days]"),p=document.querySelector(".value[data-hours]"),S=document.querySelector(".value[data-minutes]"),g=document.querySelector(".value[data-seconds]"),k=document.querySelector("#datetime-picker");t.disabled=!0;let r,o,l,i;const v={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){r=e[0],r<=new Date?C.show({message:"Please choose a date in the future",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}):(t.disabled=!1,t.style.background="#4E75FF",t.style.color="#FFF")}};i=F(k,v);t.addEventListener("click",()=>{t.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898",i.destroy(),o=r-Date.now(),d(u(o)),l=setInterval(()=>{o-=1e3,d(u(o)),q(o)},1e3)});function u(e){const m=Math.floor(e/864e5),y=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:m,hours:y,minutes:f,seconds:h}}function d({days:e,hours:a,minutes:s,seconds:c}){b.textContent=n(e),p.textContent=n(a),S.textContent=n(s),g.textContent=n(c)}function q(e){e<=0&&(clearInterval(l),t.disabled=!0,t.style.background="#CFCFCF",t.style.color="#989898")}function n(e){return e.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
