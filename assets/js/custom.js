$(window).ready(function(){

	'use strict';

		/*
	** ========== > Model < ========== 
	*/
	$('#signup').on('click', function(){

		$('#model').show();
		$('body').css('overflow','hidden');
		return false;
	});

/*
** Close the model when clicking on the whole screen but not at the middle on the content area 
*/
	
	$('#model, #minimize').on('click', function(e){
		e.stopPropagation();
		var model = $('#model').css('display');

		if(model === 'block'){
			$('#model').css('display','none');
			$('body').css('overflow','auto');
		}

	});

	/*
	** prevent closing the model on clicking on the content area (area at the middle) 
	*/
	$('#model-content').on('click', function(e){
		e.stopPropagation();
	});

	/*
	** close the model when pressing ESC Key on the keyboard
	*/
	$(window).on('keydown', function(e){
		var model = $('#model').css('display');

		if(e.keyCode === 27){
			if(model === 'block'){
				$('#model').css('display','none');
				$('body').css('overflow','auto');
			}

		}
	
	});


});