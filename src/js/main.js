

$(document).ready(function(){
	$('.operations_btn').click(function(){
		$('.operations__table-wrapper').slideToggle(300);      
		return false;
	});
	$('.btn__click-mobi').click(function(){
		$('.operations-mobi__hidden').slideToggle(300);      
		return false;
	});
	$('.deposit-block__btn').click(function(){
		$('.deposit-block__content').slideToggle(300);      
		return false;
	});
	$('.burger').click(function(event){
		$('.menu-header,.burger__line').toggleClass('active'); 
		$('.burger__line-1').toggleClass('active-1');   
		
	});

	$('#notifications').click(function(event){
		$('.notifications-overlay').toggleClass('notifications-active'); 
		return false;
		  
		
	});
	// $('.fqa-block__content__item__title-wrapper').click(function(event){
	// 	$('.fqa-block__content__item__title-img').toggleClass('fqa-block__content__item__title-img__active'); 
	// 	$('.fqa-block__content__item__hidden-wrapper').toggleClass('fqa-block__content__item__hidden-wrapper__active');   
		
	// });
	$('.fqa-block__content__item__title-wrapper').click(function(event){
		$(this).find('.fqa-block__content__item__title-img').toggleClass('fqa-block__content__item__title-img__active'); 
		$(this).next('.fqa-block__content__item__hidden-wrapper').toggleClass('fqa-block__content__item__hidden-wrapper__active');   
			
		});
		$('.fqa-block__my-appeal_content-item__title-wrapper').click(function(event){

			
			
			$(this).find('.fqa-block__my-appeal_content-item__title__img').toggleClass('fqa-block__content__item__title-img__active'); 
			$(this).next('.fqa-block__my-appeal_content-item__hidden_block-wpapper').toggleClass('fqa-block__content__item__hidden-wrapper__active');   
				
			});

			$('.fqa-block__my-appeal_content-item-mobi ').click(function(event){

			
				$(this).toggleClass('fqa-block__my-appeal_content-item__active'); 
				$(this).find('.fqa-block__my-appeal_content-item__hidden_block-wpapper-mobi').toggleClass('fqa-block__my-appeal_content-item__hidden_block-wpapper-mobi__active'); 
				$(this).next('.fqa-block__my-appeal_content-item__title__img').toggleClass('fqa-block__content__item__title-img__active'); 
				  
					
				});


			$('.overlay__payment__btn__currency').click(function(event){
					$('.overlay__payment__btn__currency').toggleClass('overlay__payment__btn__currency-active'); 
				
					});

			$('.dashboard__slider').slick({
				infinite: true,
  				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				prevArrow:'<button type="button" class="slick-prev"> <img src="../images/Arrow-prev.svg" alt="" class="slider-prev"></button>',
				nextArrow:'<button type="button" class="slick-next"><img src="../images/Arrow-next.svg" alt="" class="slider-next"></button>'
			});
		
});