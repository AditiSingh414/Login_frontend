function getuserDetail(){
	    console.log("Hi");
	    var username = $("#username").val();
	    var password = $("#pass").val();
		$.ajax({
			method : 'POST',
			url : "http://localhost:8081/api/v1/user",
			headers: {
        'Content-Type': 'application/json'
        },
        data : JSON.stringify({"userName" : username, "password" : password}),
       dataType: "json",
			success : function(data){
				var result = JSON.stringify(data);
				console.log(data.message);
				$('#message').css("visibility","visible");
				if(data.message == "login successfully"){
				sessionStorage.setItem("username", username);

				$('#message').text(data.message);
				setTimeout(redirect, 1400);
			}else{
               $('#message').text(data.message);
			}
			
				
			},

			error : function(errorType,exception){
				console.log(errorType,exception);
			}
		})
	
}

function redirect(){
	window.location.href = "userdetails.html";
}