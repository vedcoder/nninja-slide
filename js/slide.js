var left=0;

function slide(dir) {
  if (dir=="left") {
    left=left-100;
  } else {
    left=left+100;
  }
  document.querySelector('.slide-container').style.left=left+"%";
}
