$(document).ready(function(){
											

		function gettime(){
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
		$('#search_here').click(function(){
				gettime();
		var text_value=$('#text_box').val();

		$('#location').html('<h1><a href="#">'+text_value+'</a></h1>');
		
			
		
		});
		
		
});