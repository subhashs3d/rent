


//Validation of location - user wont be able to add numeric vale to the location input tab
$( document ).ready(function() {
    $( "#location" ).keypress(function(e) {
      var key = e.keyCode;
      if (key >= 48 && key <= 57) {
        e.preventDefault();
          }
        });
  });


//Validate the first form in homepage- 


  var locationInputElement  = $('#location');    //location
  var locationInputValue 	  = 0;
  var dateDepart    	  	  = $('#start-date'); //pickupdate
  var dateReturn    		    = $('#end-date');   //dropdate
  
  $('.bookNow').click(function(){
  var people 				         = $('#formPeople').find(":selected").text();    //gets the number of people selecte
    if ( locationInputElement.val().length > 3 && dateDepart.val().length ==10 && people >=1){  
        $("#exampleModal").modal();
   		   console.log(locationInputElement.val());
    }else {
    $(locationInputElement).css("border", "#FF2115 solid 1px");
		      console.log( 'VALUE IS LESS THAN 3' );   		
      }
    });

  //validate the first modal..checks if the kilometers is entered and the vehicle have been choosen

  $('.chooseModalBtn').click(function(){
  var checkKilometer        = $("#enter_kilometer").val();  //gets the kilometer entered
  var vehicleSelected       = $("input[name=radiobtn]:checked").val();  //gets the vehicle selected 

  //the user needs to input minimum of 30kms - have used in min-30 in html
    
    if (vehicleSelected >=0 && checkKilometer >=30) { 
        console.log("wokingggg");
        $("#confirmbookModal").modal(); 
        $("#exampleModal").modal('hide');       
    }else{
        console.log("not wokingggg");
    }
  });

//superscrollorama plugin used on homepage to adjust the opacity while scrolling

  $(document).ready(function() {
      var controller = $.superscrollorama();
      // amount of scrolling over which the tween takes place (in pixels)
      var scrollDuration = 10; 
      controller.addTween('#fade-it', TweenMax.from( $('#fade-it'), .1, {css:{opacity: .1}}), scrollDuration);
    });
 

