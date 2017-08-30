function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(55.739768, 37.620868),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
var controls = document.querySelectorAll('.controls');
for(var i=0; i<controls.length; i++){
    controls[i].style.display = 'inline-block';
}
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
function nextSlide(){
    goToSlide(currentSlide+1);
}
function previousSlide(){
    goToSlide(currentSlide-1);
}
function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
     nextSlide();
};
previous.onclick = function(){
     previousSlide();
};
