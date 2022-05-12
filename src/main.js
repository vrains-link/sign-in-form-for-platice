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
});
