$(document).ready(function(){
									var date1=new Date();
									var day=date1.getDate()+2;
									var month=date1.getMonth();
									var year=date1.getFullYear();
									var monthNames = [ "January", "February", "March", "April", "May", "June",
									"July", "August", "September", "October", "November", "December" ];
	
	
var get_current_location;
var get_current_longitude;
var get_current_latitude;
function currentLocation(){
if ("geolocation" in navigator){
 navigator.geolocation.getCurrentPosition(showPosition);
 
 
 
 
 
}
else
{
console.log("cant read it");

}
}
	currentLocation();

function showPosition(position){
	get_current_latitude=position.coords.latitude;
	get_current_longitude=position.coords.longitude;
	get_current_location=get_current_latitude+','+get_current_longitude;
	
		$.ajax({
	 url: "https://www.metaweather.com/api/location/search/?lattlong="+get_current_location,
	 success: function(location_data){
		 console.log(location_data);
		 $.each(location_data,function(ind,val){
			 if(ind===0){
				 var title_value=val.title;
				 		$('#location').html('<h1><a href="#">'+title_value+'</a></h1>');

			 var woeid_here=val.woeid; }
			 console.log(woeid_here);
				
							
							$.ajax({
								url:"https://www.metaweather.com/api/api/location/"+woeid_here,
								success:function(data){
								$.each(data.consolidated_weather,function(index,value){
									var print_weather='<li><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
									if(index===0) {
						$('.day1').html('<a href="#">Today</a></br>'+print_weather);    
								}
								else if(index===1){
								$('.day2').html('<a href="#">Tomorrow</a></br>'+print_weather);  
								
								}
								else if(index===2){
								$('.day3').html(day+" "+monthNames[month]+" "+year+print_weather);    
									}
									else if(index===3){
								$('.day4').html((day+1)+" "+monthNames[month]+" "+year+print_weather);    
								}
								else if(index===4){
								$('.day5').html((day+2)+" "+monthNames[month]+" "+year+print_weather);    
								}
									
									
									
									
									
								});	
							}
							}); //end of second ajax
							});
						}
					});
}
});
	
		 
		 
		 
	
