$(document).ready(function(){
	
	$('#get_color').on('click',function(e){
		
		e.preventDefault

		$.ajax({
			url: '/color',
			type: 'post',
			dataType: 'json'
		}).done(function(serverData) {
			var cell = serverData["cell"]
			var color = serverData["color"]
			$("#color_me").find("li")[cell-1].style.background = color
		}).fail(function(){
			console.log("fail");
		})

	})

});


