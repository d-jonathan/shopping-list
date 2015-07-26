$(document).ready(function(){ 

//add a new item
///animate insertion or deletion


	$('.add-icon').click(function(){
		addEnteredItem();
		addInputText();	
		addItemCount();	
		$('.entered-item:first').slideDown(300);	
	});

	$(document).keydown(function ( e ) {
		if ( e.which == 13 ) {
		addEnteredItem();
		addInputText();	
		addItemCount();
		}
	});

//mark an item as purchased


	$('.cart-icon').click(function(event){
//		console.log(event.target);
		var target = $(event.target);
		target.toggleClass('cart-purchased-icon');
		target.siblings('.entered-item')
			.toggleClass('purchased-item');
		target.siblings('.entered-item')
			.children('.entered-item-text')
			.toggleClass('purchased-item-text');
	});


//delete an item

	$('.delete-icon').click(function(){
		$(this).parent().fadeOut(300)
	});



});

//functions

function addEnteredItem () {
	$('.entered-container:last').show();
	$('.entered-container:last').clone([withDataAndEvents=true])
		.prependTo(".fridge-list");
	$('.entered-container:last').hide();
}

function addInputText () {
	var newItem = $('input').val()
	$('.entered-container:first p').text(newItem);
	$('input').val('');
	//alert('Your ' + newItem + ' is going to be added!');
}

function addItemCount () {
	var itemNumber = ($('.entered-container').length - 1)
	$('.entered-container:first').addClass('item'+itemNumber);
}


//function strikeOutText () {
//	$('.entered-item-text p')
//	.wrapInner("<s></s>");
//}
