getLevel(localStorage["loggedUser"]);
$("#lower").hide();
$("#core").hide();

//----------------------------------------------------------//
//----------------------- workout page  ----------------//
//----------------------------------------------------------//	
	$("#workoutContent").scroll(function(){
		$('.workoutTabs').css( "box-shadow", "0 0 6px 0" );
		
		var pos = $("#workoutContent").scrollTop();
		if(pos==0)
			{
				$('.workoutTabs').css("box-shadow","0 0 0px 0");
			}
		
	});
	$("#blue4").click(function(){
		alert("action");
		$("#blue2").animate({
		
		marginLeft: "1em"
			
		}, 400,function()
		{
		});
		
		$("#blue3").animate({
			
			marginLeft: "7em"
				
			}, 400,function()
			{
			});
		
		$("#blue4").animate({
			
			marginLeft: "13em",
			content:"<"
				
			}, 400,function()
			{
			});
	});

	$("#firstTab").click(function(){
		$("#ubar").animate({"margin-left":"40px"},50);
	});
	
	$("#secondTab").click(function(){
		$("#ubar").animate({"margin-left":"130px"},50);
	});
	
	$("#thirdTab").click(function(){
		$("#ubar").animate({"margin-left":"220px"},50);
	});
	
	$("#view1").on('click', function(){
		  $(".workoutHead").animate({"opacity":"0"},200);
		  $("#workoutContent").animate({
			  "margin-top":"10px"
		  },300);
		  $("li").animate({"height":"670px"});
		  $("#buttonGroup").animate({"opacity":"0"},200);
		  $("#workoutContent").css("position","absolute");
		  $("#exLbl1").animate({"top": "0px !important;",
		  "position": "absolute"},200);
		  $("#exLbl1").removeClass(".exName");
		  $(".exName").animate({"opacity":"0"},200);
		  $(".icon-arrow-left").animate({"opacity":"1", "position":"absolute"},200);
		  
		});
	
	$("#view2").on('click', function(){
		  $(".workoutHead").animate({"opacity":"0"},200);
		  $("#workoutContent").animate({
			  "margin-top":"10px"
		  },300);
		  $("li").animate({"height":"670px"});
		  $("#buttonGroup").animate({"opacity":"0"},200);
		  $("#workoutContent").css("position","absolute");
		  $("#exLbl2").animate({"top": "0px !important;",
			  "position": "absolute"},200);
		  $("#exLbl2").removeClass(".exName");
		  $(".exName").animate({"opacity":"0"},200);
		  $(".icon-arrow-left").animate({"opacity":"1", "position":"absolute"},200);
		  
		});
	
	$("#view3").on('click', function(){
		  $(".workoutHead").animate({"opacity":"0"},200);
		  $("#workoutContent").animate({
			  "margin-top":"10px"
		  },300);
		  $("li").animate({"height":"670px"});
		  $("#buttonGroup").animate({"opacity":"0"},200);
		  $("#workoutContent").css("position","absolute");
		  $("#exLbl3").animate({"top": "0px !important;",
			  "position": "absolute"},200);
		  $("#exLbl3").removeClass(".exName");
		  $(".exName").animate({"opacity":"0"},200);
		  $(".icon-arrow-left").animate({"opacity":"1", "position":"absolute"},200);
		  
		});
	
	$("#view4").on('click', function(){
		  $(".workoutHead").animate({"opacity":"0"},200);
		  $("#workoutContent").animate({
			  "margin-top":"10px"
		  },300);
		  $("li").animate({"height":"670px"});
		  $("#buttonGroup").animate({"opacity":"0"},200);
		  $("#workoutContent").css("position","absolute");
		  $("#exLbl4").animate({"top": "0px !important;",
			  "position": "absolute"},200);
		  $("#exLbl4").removeClass(".exName");
		  $(".exName").animate({"opacity":"0"},200);
		  $(".icon-arrow-left").animate({"opacity":"1", "position":"absolute"},200);
		  
		});
	
	$("#view5").on('click', function(){
		  $(".workoutHead").animate({"opacity":"0"},200);
		  $("#workoutContent").animate({
			  "margin-top":"10px"
		  },300);
		  $("li").animate({"height":"670px"});
		  $("#buttonGroup").animate({"opacity":"0"},200);
		  $("#workoutContent").css("position","absolute");
		  $(".exName").animate({"opacity":"0"},200);
		  $(".icon-arrow-left").animate({"opacity":"1", "position":"absolute"},200);
		});
		
	$("#back").click(function(){
		$(".workoutHead").animate({"opacity":"1"},300);
		  $("#workoutContent").animate({
			  "margin-top":"40px"
		  },300);
		  $("li").animate({"height":"121px"});
		  $("#buttonGroup").animate({"opacity":"1"},300);
		  $("#workoutContent").css("position","fixed");
		  $(".exName").animate({"opacity":"1"},300);
		  $(".workoutNav").css("display","inline");
		  $(".icon-arrow-left").animate({"opacity":"0"},300);
		  $("#workoutContent").animate({"height":"118% !important"}, 300);
		
	});
	
	$("#firstTab").click(function(){
		$("#upper").show();
		$("#lower").hide();
		$("#core").hide();
	});
	$("#secondTab").click(function(){
		$("#upper").hide();
		$("#lower").show();
		$("#core").hide();
	});
	$("#thirdTab").click(function(){
		$("#upper").hide();
		$("#lower").hide();
		$("#core").show();
	});



function navigate(currentPage, pageDest)
{
	
	$("#" +  currentPage).hide();
	$("#" + pageDest).show(200);
	
}

function getExercise(level,phase) {
	$.ajax({
	    type: "Post",
	    datatype: "json",
	    url: "http://www.tremainegrant.com/iBulk/bulk.php",
	    data: {action: 'getExercise', $ex_level: level, $ex_phase:phase },
	    crossDomain: true,
	    success: function (response,status) {
	    	
	    	var stringVersion = JSON.stringify(response);  
	    	var dataString = '{"exercise":' + response + '}';
	    	var data = JSON.parse(dataString);
	    	for( var i = 0; i< data.exercise.length; i++)
	    	{
	    		alert(data.exercise[i].ex_bodyZone);
	    		if(data.exercise[i].ex_bodyZone == "upper")
	    		{
	    			alert("upper");
	    		$("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    		else if(data.exercise[i].ex_bodyZone == "lower")
	    		{
	    			alert("lower");
	    		$("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    		else
	    		{
	    			alert("core");
	    		$("#coreList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    	}
		      
	    },
	    error: function (response) {
	         alert("Error establishing a connection.");
	    }
    });
}

function getLevel(email) {
	$.ajax({
	    type: "Post",
	    datatype: "json",
	    url: "http://www.tremainegrant.com/iBulk/bulk.php",
	    data: {action: 'getUserLevel', $email: email },
	    crossDomain: true,
	    success: function (response,status) {
	    	
	    	var obj = JSON.parse(response);
	    	getExercise(obj.level,obj.phase);
	    	
	    },
	    error: function (response) {
	         alert("Error establishing a connection.");
	    }
    });
}