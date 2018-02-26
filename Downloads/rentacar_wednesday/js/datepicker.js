
var dateSelect     			= $('#flight-datepicker');
var dateDepart    			= $('#start-date');
var dateReturn    			= $('#end-date');
var dayCount       			= $('.day_count');
var peopleCount	   			= $('.people_count');
var spanDateFormat 			= 'ddd, MMMM D yyyy';
var distancePlannedOutput  	= $('.distance_planned');
var fuelCostOutput  		= $('.fuel_cost');
var vehicleRentOutput  		= $('.vehicle_rent');
var totalCostOutput  		= $('.total_cost');


dateSelect.datepicker({
  autoclose: true,
  format: "mm/dd/yyyy",
  maxViewMode: 0,
  startDate: "now"
}).on('change', function() {
  var start = $.format.date(dateDepart.datepicker('getDate'), spanDateFormat);
  var end = $.format.date(dateReturn.datepicker('getDate'), spanDateFormat);
  var numberOfDays = Math.ceil((Date.parse(end)-Date.parse(start))/(1000 * 60 * 60 * 24));
  dayCount.text(numberOfDays);

  $('.bookNow').click(function(){
	var people = $('#formPeople').find(":selected").text();
	console.log(people);
	peopleCount	.text(people);

	if (people <=1 && numberOfDays <=2 ){
		$(".bike").show();
		$(".sedan").show();
		$(".suv").hide();
		$(".motorhome").hide();
	}else if (people <=1 && numberOfDays >=3 && numberOfDays <=5) {
		$(".motorhome").hide();
		$(".suv").show();
		$(".bike").show();
		$(".sedan").show();
	}else if (people <=1 && numberOfDays >=6 && numberOfDays <=10) {
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").show();
		$(".sedan").show();
		//---------------------------------------------------------1person more than 11 days no options----------------------------
	}else if (people <=1 && numberOfDays >=11 && numberOfDays <=15) {
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
		//-----------------------------------------------------------if number of people equals 2---------------------------------------------
	}else if (people ==2 && numberOfDays ==1) {
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").show();
	}else if (people ==2 && numberOfDays ==2) {
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").show();
	}else if (people ==2 && numberOfDays >=3 && numberOfDays <=10){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").show();
		$(".sedan").show();
	}else if (people ==2 && numberOfDays >=10 && numberOfDays <=15){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
		//---------------------------------------------------if  number of people equals 3 to 5-----------------------------------------------
	
		//--------------------------------------------------if number of people equals 3 to 5 and days equals 1--- no option------------------
	}else if (people >=3 && people <=5 && numberOfDays ==1){
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
	}else if (people >=3 && people <=5 && numberOfDays ==2){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
	}else if (people >=3 && people <=5 && numberOfDays >=3 && numberOfDays <=10){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").show();
		$(".sedan").hide();
	}else if (people >=3 && people <=5 && numberOfDays >=11 && numberOfDays <=15){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();

		//-------------------------------------------------if  number of people equals 6----------------------------------------------

		//--------------------------------------------------if number of people equals 6 and days equals 1--- no option------------------

	}else if (people ==6 && numberOfDays ==1){
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
	}else if (people ==6 && numberOfDays >=2 && numberOfDays <=15){
		$(".motorhome").show();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();

		//-------------------------------------------------if  number of people is more than 6----------------------------------------------
 
	}else if (people == 7 || numberOfDays >=16){
		$(".motorhome").hide();
		$(".bike").hide();
		$(".suv").hide();
		$(".sedan").hide();
	}


});


  $(function(){
    $(".chooseModalBtn").click(function() {     
     var vehicleSelected = $("input[name=radiobtn]:checked").val();
     var kilometers = $(".kilometer_input[name=distance]").val();
     var fuelPrice = 2.05;
    distancePlannedOutput.text(kilometers);

   	var vehicleMileage = [3.7 , 8.5 , 9.7 ,17]
  	var selectedVehicleMileage = vehicleMileage[vehicleSelected];
  	console.log(selectedVehicleMileage);
  	var totalFuelCost = Math.ceil(kilometers/100*selectedVehicleMileage*fuelPrice);
	console.log(totalFuelCost);
	fuelCostOutput.text('NZD '+ totalFuelCost);


	var vehicleRent = [109 , 129, 144, 200]
	var selectedVehicleRent =  vehicleRent[vehicleSelected];
	console.log(selectedVehicleRent);
	var totalVehicleRent = selectedVehicleRent*numberOfDays;
	vehicleRentOutput.text('NZD '+totalVehicleRent);

	var totalCost = totalVehicleRent+totalFuelCost;
	totalCostOutput.text('NZD '+totalCost);


	$('#insurance_activate').click(function(){
	var insuranceCharges =50;
	var totalCostWithInsurance = totalVehicleRent+totalFuelCost+insuranceCharges;
	totalCostOutput.text('NZD '+totalCostWithInsurance);

});


});

});




$(function(){
    $(".chooseModalBtn").click(function() { 
     var vehicleSelected = $("input[name=radiobtn]:checked").val(); 
     

      if (vehicleSelected ==0) {
      	$(".yamaha").show().siblings().hide();
	}else if (vehicleSelected ==1) {
      	$(".mercedees").show().siblings().hide();
	}
	else if (vehicleSelected ==2) {
      	$(".rover").show().siblings().hide();
	}else if(vehicleSelected ==3){
      	$(".caravan").show().siblings().hide();
	}

    });
  });
});


