// 更多内容首页无缝循环滚动
let ul = document.querySelector(".scroll-ul");
ul.innerHTML = ul.innerHTML + ul.innerHTML;
let lis = document.querySelectorAll(".scroll-li");
let spa = -2;
ul.style.width = lis[0].offsetWidth * lis.length + "px";
function move() {
  if (ul.offsetLeft < -ul.offsetWidth / 2) {
    ul.style.left = "0";
  }
  if (ul.offsetLeft > 0) {
    ul.style.left = -ul.offsetWidth / 2 + "px";
  }
  ul.style.left = ul.offsetLeft + spa + "px";
}
let timer = setInterval(move, 30);
ul.addEventListener("mousemove", function () {
  clearInterval(timer);
});
ul.addEventListener("mouseout", function () {
  timer = setInterval(move, 30);
});

// 游戏CG轮播图
let big_box = document.querySelector(".big-box");
let imgs = document.getElementsByClassName("img");
let timer2 = null;
let index = 0;
function reset() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].className = "img";
  }
}
function selected() {
  reset();
  imgs[index].className = "img active";
}
function play() {
  timer2 = setInterval(function () {
    selected();
    index++;
    big_box.style.backgroundImage = "url(./img/more/" + index + ".jpg)";
    if (index == 5) {
      index = 0;
    }
  }, 1500);
}
for (let i = 0; i < imgs.length; i++) {
  imgs[i].onmousemove = function () {
    big_box.style.backgroundImage = "url(./img/more/" + (i + 1) + ".jpg)";
    reset();
    clearInterval(timer2);
    index = i + 1;
    if (index == 5) {
      index = 0;
    }
    play();
  };
}
play();

// 单击网页屏幕播放音乐
window.onclick = function () {
  playSound();
};
function playSound() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    //如果音乐暂停则播放音乐
    audio.load;
    audio.play();
  } else {
    //如果音乐正在播放则暂停音乐
    audio.pause();
  }
}
