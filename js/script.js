function randombg(){
  var random= Math.floor(Math.random() * 8) + 0;
  var bigSize = ["url('img/1.jpg')",
                 "url('img/2.jpg')",
                 "url('img/3.jpg')",
                 "url('img/4.jpg')",
                 "url('img/5.jpg')",
				 "url('img/6.jpg')",
				 "url('img/7.jpg')",
                 "url('img/8.jpg')"];
  document.getElementById("wrapper").style.backgroundImage=bigSize[random];
}
function login(){
  document.getElementById("wrapper").style.filter="blur(0px)";
}