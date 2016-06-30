var left=0;

function slide(dir) {
  if (dir=="left") {
    left=left-100;
  } else {
    left=left+100;
  }
  updateArrow();
  document.querySelector('.slide-container').style.left=left+"%";
}

function updateArrow() {
  if (left==0) {
    document.querySelector(".left").classList.add("hide");
  } else if (left==-400) {
    document.querySelector(".right").classList.add("hide");
  } else {
    document.querySelector(".left").classList.remove("hide");
    document.querySelector(".right").classList.remove("hide");
  }
}

window.onload=function () {
  updateArrow();
}
