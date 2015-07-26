$(document).ready(function(event){ 

//  $('.cart-icon').click(function(event){
//  	$(this).addClass('cart-purchased-icon');
//  	$('entered-item-text').addClass('purchased-item-text');
//  	$('entered-item').addClass('purchased-item');
// })




//add a new item
///on click of add-icon take inputs from text
///create a new list item > p w/ text + container divs + associated buttons
///insert (& animate) this new entered-item in the DOM --above ? the old items
///delete the text / reset the input box



	$('.add-icon').click(function(){
		addEnteredItem();
		addInputText();		
	
	});

	$(document).keydown(function ( e ) {
		if ( e.which == 13 ) {
		addEnteredItem();
		addInputText();	
	}
	});

 

//mark an item as purchased
///on click of cart-icon  animate/ change style of li > p and container div color
///on click again of cart-icon change style back


//delete an item
///on click of delete icon remove the li > p, container divs, and sibling buttons from the DOM

	$('.delete-icon').click(function(){
		$(this).parent().hide()
	});



});

function addEnteredItem () {
	$('.entered-container:last').show();
	$('.entered-container:last').clone([withDataAndEvents=true]).prependTo(".fridge-list");
	$('.entered-container:last').hide();
}

function addInputText () {
	var newItem = $('input').val()
	$('.entered-container:first p').text(newItem);
	$('input').val('');
	//alert('Your ' + newItem + ' is going to be added!');
}