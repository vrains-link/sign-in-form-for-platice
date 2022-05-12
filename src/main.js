import "./index.css";

$(document).ready(function () {
  //原本純寫 Javascript 要打的指令
  const form = document.getElementById("sign-in-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  //jQuery 打的指令
  $(#"sign-in-form").sumbit(function (e) {
      e.preventDefault();
  });

  //TODO: 讀帳號密碼輸入時，版行維持
$("#account").blur(function (e) {
    if ($(e.target).val ！==""){
      $("#addr-hint-text").addClass("translate-y-5 text-xs text-sky-300");
    }else{

      $("#addr-hint-text").addClass("translate-y-5 text-xs text-sky-300");
    }
  });

$("#password");).blur(function (e) {
    if ($(e.target).val ！==""){
      $("#password-hint-text").addClass("translate-y-5 text-xs text-sky-300");
    }else{

      $("#password-hint-text.").addClass("translate-y-5 text-xs text-sky-300");
    }
  });
  
});



