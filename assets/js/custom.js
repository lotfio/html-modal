$(document).ready(function(){

	$('#signup').on('click', function(){

		$('#modal').show();
		$('body').css('overflow','hidden');
		return false;
	});

/*
** Close the modal when clicking on the whole screen but not at the middle on the content area 
*/
	
	$('#modal, #minimize').on('click', function(e){
		e.stopPropagation();
		var modal = $('#modal').css('display');

		if(modal === 'block'){
			$('#modal').css('display','none');
			$('body').css('overflow','auto');
		}

	});

	/*
	** prevent closing the modal on clicking on the content area (area at the middle) 
	*/
	$('#modal-content').on('click', function(e){
		e.stopPropagation();
	});

	/*
	** close the modal when pressing ESC Key on the keyboard
	*/
	$(window).on('keydown', function(e){
		var modal = $('#modal').css('display');

		if(e.keyCode === 27){
			if(modal === 'block'){
				$('#modal').css('display','none');
				$('body').css('overflow','auto');
			}

		}
	
	});


});
