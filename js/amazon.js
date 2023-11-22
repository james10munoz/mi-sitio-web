let imgtub1 = document.getElementById("imgtub1");
let imgtub2 = document.getElementById("imgtub2");
let imgtub3 = document.getElementById("imgtub3");
let imgtub4 = document.getElementById("imgtub4");
let imgMain = document.getElementById("imgPrincipal");
let boxmodal = document.getElementById("box-modal");
let modal = document.getElementById("modal");
let mainContent = document.getElementById("mainContent");
let btnclose = document.getElementById("btnclose");

window.onload = () => {
  boxmodal.classList.remove("visible")
}
imgtub1.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon1.png");
});
imgtub2.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon2.png");
});
imgtub3.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon3.png");
});
imgtub4.addEventListener("click",() => {
  imgMain.setAttribute("src", "img/amazon4.png");
});

btnclose.addEventListener("click", function() {
  mainContent.style.display = "none";
});

function abrir(){
  boxmodal.classList.add("visible")
}
