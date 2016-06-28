
function rss() {
  var nos=document.querySelectorAll('.slide');
  for (var i = 0; i < nos.length; i++) {
    console.log("in loop"+i);
    nos[i].classList.remove("hide");
    sleep(1000);
    nos[i].classList.add("hide");
  }
}

window.onload=function () {
  rss();
}
