var settingmenu = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
settingmenu.classList.toggle("setting-menu-height")
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if( localStorage.getItem("theme")=="dark"){
        localStorage.setItem("theme","light");
    }else{
        localStorage.setItem("theme","dark");
    }
}

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme")
}
else {
    localStorage.setItem("theme","light");
}
// localStorage.setItem("theme","dark");
// localStorage.getItem("theme");
const Latest_news = () => {
    window.open("https://timesofindia.indiatimes.com/news", "_blank");
  }
const market=()=>{
    window.open("https://www.flipkart.com/","_blank");
  }
function netflix(){
    window.open("https://www.netflix.com/in/","_blank");
  }
  function friends(){

  }