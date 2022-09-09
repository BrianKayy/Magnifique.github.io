/*let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block"
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}







// car details
//Bugatti


 function MyImages(){
        var TheImages = document.querySelector("#bugatti");

        var mySrc = TheImages.getAttribute("src");
        if(mySrc === "images/bugatti 3.jpg")
        {
          TheImages.setAttribute("src", "images/bugatti4.jpg");
        }

        else if(mySrc === "images/bugatti4.jpg")
        {
          TheImages.setAttribute("src", "images/bugatti1.jpg");
        } 

        else
        {
          TheImages.setAttribute("src", "images/bugatti 3.jpg");
        }

}


//-----Camaro
function MyImages2(){
  var Camaro = document.querySelector("#camaro");

  var myCamaro = Camaro.getAttribute("src");
  if (myCamaro === "images/camaro1.jpg")
  {
    Camaro.setAttribute("src", "images/camaro2.jpg");
  }
  else if (myCamaro === "images/camaro2.jpg")
  {
    Camaro.setAttribute("src", "images/corvette.jpg");
  }
  else if(myCamaro === "images/corvette.jpg")
  {
    Camaro.setAttribute("src", "images/sports-car-4826752_1920.jpg");
  }
  else
  {
    Camaro.setAttribute("src", "images/camaro2.jpg");
  }

}

//---------Dodge
function MyImages3(){

var Dodge = document.querySelector("#dodge");

var myDodge = Dodge.getAttribute("src");

if(myDodge === "images/dodge1.jpg")
{
  Dodge.setAttribute("src", "images/dodge2.jpg");
}

else if(myDodge === "images/dodge2.jpg")
{
  Dodge.setAttribute("src", "images/dodge3.jpg");
}

else if(myDodge === "images/dodge3.jpg")
{
  Dodge.setAttribute("src", "images/dodge4.jpg");
}

else if(myDodge === "images/dodge4.jpg")
{
  Dodge.setAttribute("src", "images/dodge5.jpg");
}
 else
 {
  Dodge.setAttribute("src", "images/dodge1.jpg");
 }
}
//------Gwagon

function MyImages4(){

  var Gwagon = document.querySelector("#gwagon");

  var myGwagon = Gwagon.getAttribute("src");

  if(myGwagon === "images/Gwagon1.jpg")
  {
    Gwagon.setAttribute("src", "images/Gwagon2.jpg");
  }
  else if(myGwagon === "images/Gwagon2.jpg")
  {
    Gwagon.setAttribute("src", "images/Gwagon3.jpg");
  }
  else
  {
    Gwagon.setAttribute("src", "images/Gwagon1.jpg");
  }
}

//----------Lambo
function MyImages5(){

  var Lambo = document.querySelector("#lambo");

  var myLambo = Lambo.getAttribute("src");

  if(myLambo === "images/lambo1.png")
  {
    Lambo.setAttribute("src", "images/lambo2.jpg");
  }
  else
  {
    Lambo.setAttribute("src", "images/lambo1.png");
  }
}
//---------maserati

function MyImages6(){

  var Maserati =  document.querySelector("#maserati");

  var myMaserati = Maserati.getAttribute("src");

  if(myMaserati === "images/maserati1.jpg")
  {
    Maserati.setAttribute("src", "images/maserati2.jpg");
  }
  else if(myMaserati === "images/maserati2.jpg")
  {
    Maserati.setAttribute("src", "images/maserati3.jpg");
  }
  else 
  {
    Maserati.setAttribute("src", "images/maserati1.jpg");
  }
}
//--------mercedes
function MyImages7(){
  var Mercedes = document.querySelector("#mercedes");
  var myMercedes = Mercedes.getAttribute("src");

if(myMercedes === "images/mercedescar2.jpg")
{
  Mercedes.setAttribute("src", "images/mercedes3.jpg");
}
else if(myMercedes === "images/mercedes3.jpg")
{
  Mercedes.setAttribute("src", "images/mercedes4.jpg");
}
else if(myMercedes === "images/mercedes4.jpg")
{
  Mercedes.setAttribute("src", "images/mercedescar1.jpg");
}
else if(myMercedes === "images/mercedescar1.jpg")
{
  Mercedes.setAttribute("src", "images/mercedesBenz.jpg");
}
else
{
  Mercedes.setAttribute("src", "images/mercedescar2.jpg");
}
 }

//---------mustang
function MyImages8(){
  var Mustang = document.querySelector("#mustang");
  var myMustang = Mustang.getAttribute("src");

  if(myMustang === "images/mustang1.jpg")
  {
    Mustang.setAttribute("src", "images/mustang2.jpg");
  }
  else if(myMustang === "images/mustang2.jpg")
  {
    Mustang.setAttribute("src", "images/mustang3.jpg");
  }
  else if(myMustang === "images/mustang3.jpg")
  {
    Mustang.setAttribute("src", "images/mustang4.jpg");
  }
  else if(myMustang === "images/mustang4.jpg")
  {
    Mustang.setAttribute("src", "images/mustang5.jpg");
  }
  else if(myMustang === "images/mustang5.jpg")
  {
    Mustang.setAttribute("src", "images/mustang6.jpg");
  }
  else
  {
    Mustang.setAttribute("src", "images/mustang1.jpg");
  }
}

//--------porsche
function MyImages9(){
  var Porsche = document.querySelector("#porsche");
  var myPorsche = Porsche.getAttribute("src");

  if(myPorsche === "images/porsche4.jpg")
  {
    Porsche.setAttribute("src", "images/porsche3.jpg");
  }
  else if(myPorsche === "images/porsche3.jpg")
  {
    Porsche.setAttribute("src", "images/porsche2.jpg");
  }
  else if(myPorsche === "images/porsche2.jpg")
  {
    Porsche.setAttribute("src", "images/porsche1.jpg");
  }
  else
  {
    Porsche.setAttribute("src", "images/porsche4.jpg");
  }
}

//-------range rover
function MyImages10(){
  var Rover = document.querySelector("#rover");
  var myRover = Rover.getAttribute("src");

  if(myRover === "images/rangerover4.jpg")
  {
    Rover.setAttribute("src", "images/rangerover3.jpg");
  }
  else if(myRover ===  "images/rangerover3.jpg")
  {
    Rover.setAttribute("src", "images/rangerover2.jpg");
  }
  else if(myRover === "images/rangerover2.jpg")
  {
    Rover.setAttribute("src", "images/rangerover1.jpg");
  }
  else
  {
    Rover.setAttribute("src", "images/rangerover4.jpg");
  }
}

//---Rollsroyce
function MyImages11(){
 var Royce = document.querySelector("#royce");
 var myRoyce = Royce.getAttribute("src");
 
 if(myRoyce === "images/rollsroyce4.jpg")
 {
  Royce.setAttribute("src", "images/rollsroyce3.jpg");
 }
 else if(myRoyce === "images/rollsroyce3.jpg")
 {
  Royce.setAttribute("src", "images/rollsroyce2.jpg");
 }
 else if(myRoyce === "images/rollsroyce2.jpg")
 {
  Royce.setAttribute("src", "images/rollsroyce1.jpg");
 }
 else{
  Royce.setAttribute("src", "images/rollsroyce4.jpg");
 }
}

//-----Tesla
function MyImages12(){
  var Tesla = document.querySelector("#tesla");
  var myTesla = Tesla.getAttribute("src");

  if(myTesla === "images/tesla3.jpg")
  {
    Tesla.setAttribute("src", "images/tesla4.jpg");
  }
  else if(myTesla === "images/tesla4.jpg")
  {
    Tesla.setAttribute("src", "images/tesla2.jpg");
  }
  else if(myTesla === "images/tesla2.jpg")
  {
    Tesla.setAttribute("src", "images/tesla1.jpg");
  }
  else
  {
    Tesla.setAttribute("src", "images/tesla3.jpg");
  }
}

//----Vintage 
function MyImages13(){
  var Vintage = document.querySelector("#vintage");
  var myVintage = Vintage.getAttribute("src");

  if(myVintage === "images/vintage2.jpg")
  {
    Vintage.setAttribute("src", "images/vintage1.jpg");
  }
  else if(myVintage === "images/vintage1.jpg")
  {
    Vintage.setAttribute("src", "images/raptor.jpg");
  }
  else
  {
    Vintage.setAttribute("src", "images/vintage2.jpg");
  }
}


//----------form


    function register()
    {
      var LoginForm = document.getElementById("LoginForm");
     var RegForm = document.getElementById("RegForm");
     var Indicator = document.getElementById("Indicator");

        RegForm.style.transform = "translateX(0px)";
        LoginForm.style.transform = "translateX(100px)";
        Indicator.style.transform = "translateX(100px)";
    }

    function login()
    {
      var LoginForm = document.getElementById("LoginForm");
      var RegForm = document.getElementById("RegForm");
      var Indicator = document.getElementById("Indicator");
        
        RegForm.style.transform = "translateX(300px)";
        LoginForm.style.transform = "translateX(300px)";
        Indicator.style.transform = "translateX(0px)";
    }


















