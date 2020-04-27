$(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    effect:'fade',
    speed:1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type:'bullets',
    },
    autoplay:{
      delay:3000,
    },
  })

  $('.swiper-pagination').children().eq(0).text('01');
  $('.swiper-pagination').children().eq(1).text('02');
  $('.swiper-pagination').children().eq(2).text('03');

  $('#links_btn').click(function(){
    var linkAddr=$('#link_site').val();
    console.log(linkAddr);
    window.open(this.href=linkAddr);
  });
})