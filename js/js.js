//dropdown on hover
$('body').on('mouseenter mouseleave click', '.dropdown' ,function (e){
  var _d  = $(e.target).closest('.dropdown');_d.addClass('show');
  setTimeout(function(){
    _d[_d.is(':hover')?'addClass':'removeClass']('show');
  },100);
});
$('#servicesDropdown').on('click',function(){
   window.location.href = "services.html"; 
});
//owl carousel
$('#home-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateOut: 'slideOutRight',
    dots:true,
    dotsEach:true,
    nav:true,
    items:3,
    
});
$('#about-carousel').owlCarousel({
    loop:true,
    margin:10,
    animateOut: 'slideOutRight',
    dots:true,
    dotsEach:true,
    nav:true,
    items:1,
    
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
//scroll reveal
window.sr = ScrollReveal();
sr.reveal('.col-md-4 ', {
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('h1', {
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('h4', {
    origin: 'bottom',
    distance: '50px',
    delay:500
});
sr.reveal('p', {
    origin: 'bottom',
    distance: '60px'
});
sr.reveal('h5', {
    origin: 'bottom',
    distance: '100px'
});
sr.reveal('h6', {
    origin: 'bottom',
    distance: '40px'
});
sr.reveal('h1', {
    origin: 'bottom',
    distance: '40px'
});
sr.reveal('section#works img', {
    origin: 'right',
    distance: '10px'
});
sr.reveal('section#home h1', {
    origin: 'left',
    distance: '100px'
});
sr.reveal('.jumbotron', {
    origin: 'bottom',
    distance: '100px',
    viewFactor: 0.1
});
sr.reveal('section#portfolio-main img', {
    origin: 'bottom',
    distance: '50px'
});
$(window).scroll(function (){
    if($(window).scrollTop() >= $('section#facts').scrollTop()){
        $('.timer').countTo();
    }else{
        $('.timer').countTo('stop');
    }
});
