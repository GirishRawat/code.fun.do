var sub = document.getElementById("doSubmit");

function doSomething() {
	var value = document.getElementById("userInput").value;

	console.log(value);
}

$(document).ready(function(){
$("#doSubmit").click(function(){
	var value = document.getElementById("userInput").value;
    console.log("Even I'm working!");
    $.ajax({
    url: 'http://api.cloudsightapi.com/image_request[remote_image_url]:http://static.caloriecount.about.com/images/medium/gala-apple-171050.jpgimage_request[locale]:en-US',
    dataType: 'JSON',
    complete : function(data){
    },
    success: function(data){
    	var totalHits = data.token;
        alert(totalHits);
    }
});
});
});

