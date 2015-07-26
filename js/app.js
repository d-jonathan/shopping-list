$(document).ready(function(){ 

//  $('.cart-icon').click(function(event){
//  	$(this).addClass('cart-purchased-icon');
//  	$('.entered-item-text').addClass('purchased-item-text');
//  	$('.entered-item').addClass('purchased-item');
// })




//add a new item
///animate insertion or deletion


	$('.add-icon').click(function(){
		addEnteredItem();
		addInputText();		
	
	});

	$(document).keydown(function ( e ) {
		if ( e.which == 13 ) {
		addEnteredItem();
		addInputText();	
		addItemCount();
		}
	});

 

//mark an item as purchased
///on click of cart-icon  animate/ change style of li > p and container div color
///on click again of cart-icon change style back

	$('.cart-icon').click(function(event){
//		console.log(event.target);
		var target = $(event.target);
		target.toggleClass('cart-purchased-icon');
		target.siblings('.entered-item')
		.toggleClass('purchased-item');
	//	.parent('entered-container')
	//	.removeClass('entered-container')
	//	.addClass('purchased-container')
//		updateCartIcon ();
//		target.strikeOutText ();
	});


//delete an item

	$('.delete-icon').click(function(){
		$(this).parent().fadeOut(300)
	});



});

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


function updateCartIcon () {
	target
	.removeClass('cart-icon')
	.addClass('cart-purchased-icon');
}

function strikeOutText () {
	$('.entered-item-text p')
	.wrapInner("<s></s>");
}
