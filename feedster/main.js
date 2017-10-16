$(document).ready(() => {															//when DOM is ready..
	$('.menu').on('mouseenter', () => {									//slide down menu when mouse hovers over "menu"
    $('.nav-menu').slideDown();
  });
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').slideUp();													//slide up menu when cursor leaves area
  })
  $('.btn').on('mouseenter', event => {								//when mouse hovers over button, highlight the current button by adding btn-hover class
    $(event.currentTarget).addClass('btn-hover')
  }).on('mouseleave', event => {											//when mouse leaves the button area, remove the btn-hover class to un-highlight the button
    $(event.currentTarget).removeClass('btn-hover')
  })
  
  $('.postText').on('keyup', event => {								//on keystroke in postText
    $('.postText').focus();														//postText textarea will expect typed text
    let post=$(event.currentTarget).val();						//set post to the character count in post text
    let remaining=140-post.length;										//find remaining character count
    if(remaining<=0){																	//if character count over the limit
      $('.wordcount').addClass('red');								//make text red
    }
    else{
      $('.wordcount').removeClass('red');							//remove red text once character count is back under limit
    }
    $('.characters').html(remaining);									//pass remaining to characters class
  })
}); 
