

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
		$('.menu-header,.header__menu-block,.burger__line').toggleClass('active'); 
		$('.burger__line-1').toggleClass('active-1');   
		
	});


		function validateForms(form){
			$(form).validate({
				rules:{
					name: {
						required: true,
						minlength: 2
					  },
					tel: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: {
						required: "Пожалуйста введите свое имя",
						minlength: jQuery.validator.format("Требуется не менее {0} символов!")
					}, 
					tel: "! Не правильный формат телефона",
					email: {
					  required: "Пожалуйста введите свой email",
					  email: "Неправильно введен вдрес email"
					},
					checkbox:"! Подтвердите согласие на обработку персональных данных"
				  },
				
			});
		};


		validateForms('#form__block-form');
		validateForms('#form__block__form-modal');

		$('input[name=tel]').mask("+7 (999) 999-99-99")

		// Modal
		$('[data-modal=application]').on('click', function () {
			$('.overlay,#application').fadeIn();
		});
		$('.form__block__modal-btn').on('click', function () {
			$('.overlay,#application,#success').fadeOut('slow');
		});

		$('form').submit(function(e){
			e.preventDefault();
			$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
			}).done(function(){
				$(this).find("input").val("");
				$('#form__block__modal').fadeOut();
				$('.overlay,#success').fadeIn('slow');


				$('form').trigger('reset');
			});
			return false;

		});

});