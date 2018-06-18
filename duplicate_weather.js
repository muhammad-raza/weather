$(document).ready(function(){
											

		function getdate(){
			var date_here= new Date();
			var y=date_here.getHours();
			var x=date_here.getMinutes();
			var ampm;
			if(y<=12){
				ampm="am";
			} else{
				ampm="pm";
			}
			
			
			$('#date_div').html(y+":"+x+ampm);
			}
			//getdate();
		
			
			
			
			
			$('#search_here').click(function(){
				getdate();
		var text_value=$('#text_box').val();

		$('#location').html('<h1><a href="#">'+text_value+'</a></h1>');
		var someDate=new Date();
			var dd = someDate.getDate()+2;
			var mm = someDate.getMonth()+1;
			var y = someDate.getFullYear();
			//var days=someDate.getDay();
			//var today=days.toString();
			//console.log(days);
			
			//$('.day3').html(days);
			var someFormattedDate = dd + '/'+ mm + '/'+ y;
			$('.day3').html(someFormattedDate);	
		$.ajax({
			url:"https://www.metaweather.com//api/location/search/?query="+text_value,
			success:function(data_city){
				$.each(data_city,function(i,v){
					var woeid_id=v.woeid;
					console.log(woeid_id);
			$.ajax({
		url:"https://www.metaweather.com/api/location/"+woeid_id,
			success:function(data_woeid){
				
				console.log(data_woeid);
				$.each(data_woeid.consolidated_weather,function(index,value){

					//if(index===0) {
						var weather_here='<li><a href="#">Today</a></br><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
						if(index===0) {
						$('.day1').html(weather_here);    
								}
								else if(index===1){
									//var weather_here='<li><a href="#">Tomorrow</a></br><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
									$('.day2').html(weather_here);    
									
									
								}
								else if(index===2){
									//var weather_here='<li>'+someFormattedDate+'</br>'+'<img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
									$('.day3').html(weather_here);    
									
									
								}
		}); 
		}//end of success
			});	
	
	
	
	});

				
			}
				});
				});
				
			
			
		});
			
		
		

			
		//var x="https://www.metaweather.com/api/location/";
		//var y=19344;
	//	var z=x+y;
//$.ajax({
		
		//url:z,
		//success: function(data){			
			//console.log(data);
			/*	$.each(data.consolidated_weather,function(index,value){

					if(index===0) {
						var weather_here='<li><a href="#">Today</a></br><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
						$('.day1').html(weather_here);    
								}
								else if(index===1){
									var weather_here='<li><a href="#">Tomorrow</a></br><img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
									$('.day2').html(weather_here);    
									
									
								}
								else if(index===2){
									var weather_here='<li>'+someFormattedDate+'</br>'+'<img src="https://www.metaweather.com/static/img/weather/'+value.weather_state_abbr+'.svg" width="40px" height="40px"/></br>'+value.weather_state_name+'</br>'+"Min :"+parseFloat(value.min_temp).toFixed()+"&#8457"+'</br>'+"Max :"+parseFloat(value.max_temp).toFixed()+"&#8457"+'</br>'+parseFloat(value.wind_speed).toFixed()+"mph"+'</br>'+"&#8594"+'</li>';
									$('.day3').html(weather_here);    
									
									
								}
		}); 
		}
			});	
	
	
	
	});*/
