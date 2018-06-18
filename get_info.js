$(document).ready(function(){
	$('#search_here').click(function(){
			var someDate=new Date();
			var dd = someDate.getDate()+2;
			var mm = someDate.getMonth()+1;
			var y = someDate.getFullYear();
			var someFormattedDate = dd + '/'+ mm + '/'+ y;
			$('.day3').html(someFormattedDate);	
		
		
		
		
	
	var text_value=$('#text_box').val();
$.ajax({
			url:"https://www.metaweather.com//api/location/search/?query="+text_value,
			success:function(data_city){
				$.each(data_city,function(i,v){
					var woeid_id=v.woeid;
					console.log(woeid_id);
			$.ajax({
		url:"https://www.metaweather.com/api/location/"+woeid_id,
			success:function(data_woeid){
				
				
				$.each(data_woeid.consolidated_weather,function(index,value){
				var weather_here='<li><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
						if(index===0) {
						$('.day1').html('<a href="#">Today</a></br>'+weather_here);    
								}
								else if(index===1){
								$('.day2').html('<a href="#">Tomorrow</a></br>'+weather_here);  
								
								}
								else if(index===2){
								$('.day3').html(someFormattedDate+weather_here);    
									
									
								}
		}); 
		}//end of success
			});
			});	
				}
});
			
});
});