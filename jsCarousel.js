let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
function goToSlide(index){
    if(index < 0){
        index = 2;
    }
    else if( index > 2){
        index = 0;
    }
    currentIndex = index;
    console.log(document.querySelector('#bod').style);
    switch(currentIndex)
    {
        case 0:
            document.querySelector('#bod').style = 'background-image: url(Carousel_1.jpg);background-size: cover;animation-delay: 2.5s; padding-bottom: 450px;';
            document.getElementById('bb').firstChild.textContent = "О НАС";
            document.querySelector('#razm').style = 'background-color: aliceblue; margin-top: 0; margin-bottom: 0; height: 80px; text-align: center; padding-top: 10px; width: 50%;';
            break;
        case 1:
            document.querySelector('#bod').style = 'background-image: url(Carousel_2.jpg);background-size: cover;animation-delay: 2.5s; padding-bottom: 380px;';
            document.getElementById('bb').firstChild.textContent = "ОГНЕВАЯ ПОДГОТОВКА";
            document.querySelector('#razm').style = 'background-color: aliceblue; margin-top: 0; margin-bottom: 0; height: 150px; text-align: center; padding-top: 10px; width: 100%;';
            break;
        case 2:
            document.querySelector('#bod').style = 'background-image: url(Carousel_3.jpg);background-size: cover;animation-delay: 2.5s; padding-bottom: 380px;';
            document.getElementById('bb').firstChild.textContent = "РУКОПАШНЫЙ БОЙ";
            document.querySelector('#razm').style = 'background-color: aliceblue; margin-top: 0; margin-bottom: 0; height: 150px; text-align: center; padding-top: 10px; width: 100%;';
            break;
        
    }
}
function Stop(){
    document.getElementById('ButNext').disabled = true;
    document.getElementById('ButBack').disabled = true;
}
function Start(){
    document.getElementById('ButNext').disabled = false;
    document.getElementById('ButBack').disabled = false;
}
function goToNextSlide(){
    console.log(document.querySelector('#ButNext'));
    Stop();
    goToSlide(currentIndex+1);
    setTimeout(Start, 1200);
}
function goToPrevSlide(){
    console.log(document.querySelector('#ButBack'));
    Stop();
    goToSlide(currentIndex-1);
    setTimeout(Start, 1200);
}
function goPod()
{
    switch(currentIndex)
    {
        case 0:
            window.location.replace('pages/About.html');
            break;
        case 1:
            window.location.replace('pages/About.html');
            break;
        case 2:
            window.location.replace('pages/About.html');
            break;
        
    }
}
document.getElementById('ButNext').onclick = goToNextSlide;
document.getElementById('ButBack').onclick = goToPrevSlide;
document.getElementById('butPod').onclick = goPod;