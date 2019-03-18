 $('.faq a').on('click', function(e) {
    e.preventDefault();

// only makes something active $(this).parents('.info-item').addClass('active');
//toggleCLass used to change class on click

  $(this).parents('.info-item').toggleClass('active');
  $(this).parents('.info-item').siblings().removeClass('active');


});






