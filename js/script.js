let navbar = document.querySelector('.navbar');
// let dots = document.getElementById("dots");
// let moreText = document.getElementById("more");
// let btnText = document.querySelector('.btn')
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");
let btnText = document.getElementById("btn");


document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}


function myFunction() {
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function myFunctionArm() {
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Կարդալ Ավելին"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Փակել"; 
      moreText.style.display = "inline";
    }
  }

  function myFunctionRu() {
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Узнать больше"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Закрыть"; 
      moreText.style.display = "inline";
    }
  }