Parse.initialize("AXss0hVCmQ3tmDsGCV0KD3Xn9yUL39BPJcGQGV7P", "IddscOVmXbWcUGqZCJWXj1bM8SXp2iJS2sA7Lz9b");
/*********Global Variables*********/
var current = Parse.User.current();
var username = current.get("username");
var level;
var phase;
var started = "no";
var timerSwitch = "off";
var nameList = [];
var rcmndedWeight = [];
var nameCount = 0;
//var timer = 90;
var setCount = 1;
var Weight = Parse.Object.extend("Weight");	
var weightId;
var weight = new Weight();
var startCounter;



/*******global variables involving weight********/
var FirstTimeWeight;
var Max;
var actualWeight;
var recommendedWeight;
var recommentdedWeightStr;
var recommendedSets;


/************************/
$(document).ready(function() {
getLevel(current.get("username"));

$(".menu").click(function()
{
	$("#menuScreen").animate({"top":"109px"},200);
	$("#menuIcon").animate({"height":"0px"},200);
	$("#arrowIcon").animate({"height":"25px"},200);
});
$(".arrowIcon").click(function()
{
	if(started == "yes")
	{
		if(confirm("are you sure you want to quit this workout?")==true)
		{
			window.location = "workout.html";

		}
	}
	else
	{
		$("#workoutOverviewTitle").text("Today's Workout");
		$("#menuScreen").animate({"top":"709px"},200);
		$("#menuIcon").animate({"height":"25px"},200);
		$("#arrowIcon").animate({"height":"0px"},200);
	}

			
});
$("#lower").css("opacity","0");
$("#core").css("opacity","0");

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
	$("#blue").click(function(){
		timerSwitch = "on";
		$("#timeLabel").text("Seconds");
		$("#timeAnimation").text("90");
		timer=90;	

		var query = new Parse.Query(Weight);
		query.equalTo("wght_exercise", nameList[nameCount]); 
		query.equalTo("wght_user", username); 		
		query.find({
			  success: function(results) {
				var weightText, weightNum; 
				$("#rcmendWeight").text(rcmndedWeight[0]);
				if(rcmndedWeight[nameCount] == "Just the Bar")
				{
					weightText = "Just the Bar";					
					weightNum = 45;
				}
				else if(rcmndedWeight[nameCount] == "Body Weight")
				{
					weightText = "Body Weight";
					weightNum = 0;
				}
				else
				{
					weightText = rcmndedWeight[nameCount] + "lbs";
					weightNum = rcmndedWeight[nameCount];
				}
				
				if (results.length == 0)
				{
					weight.set("wght_user", username);
					weight.set("wght_exercise", nameList[nameCount]);
									
					
					weight.set("wght_recommended", weightNum);
					weight.save();
					weightId=results[0].id;

				}
				else
				{			
					weightId=results[0].id;
					weight.save();
				}	

			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
			});
		
		
		$("#start").animate({"left":"0px"},200);
		$("#menuIcon").animate({"height":"0px"},200);
		$("#arrowIcon").animate({"height":"25px"},200);
		$("#workoutOverviewTitle").text(nameList[0]);
		
		/*if (started == "no")
		{*/
		var interval = setInterval(function() {
		    timer--;
		    $('#timeAnimation').text(timer);
		    if (timer === 0){
		    	clearInterval(interval);
		    	$("#timeAnimation").text("");
		    	$("#timeLabel").css("margin-left", "-146px");
		    	$("#timeLabel").text("READY!");
		    }
		    
		}, 1000);
		//}
		started = "yes";
		
	});
	

	$("#firstTab").click(function(){
		$("#ubar").animate({"margin-left":"0px"},50);
	});
	
	$("#secondTab").click(function(){
		$("#ubar").animate({"margin-left":"85px"},50);
	});
	
	$("#thirdTab").click(function(){
		$("#ubar").animate({"margin-left":"180px"},50);
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
		$("#upper").css("opacity","1");
		$("#lower").css("opacity","0");
		$("#core").css("opacity","0");
	});
	$("#secondTab").click(function(){
		$("#upper").css("opacity","0");
		$("#lower").css("opacity","1");
		$("#core").css("opacity","0");
	});
	$("#thirdTab").click(function(){
		$("#upper").css("opacity","0");
		$("#lower").css("opacity","0");
		$("#core").css("opacity","1");
	});

	
});
function navigate(currentPage, pageDest)
{
	
	$("#" +  currentPage).hide();
	$("#" + pageDest).show(200);
	
}

function getExercise() {
	var Exercise = Parse.Object.extend("Exercise");
	
	// Find all workouts that are available for the user that is currently in this level and phase.
	var query = new Parse.Query(Exercise);
	query.equalTo("ex_level", level);
	query.equalTo("ex_phase", phase);
	query.find({
	  success: function(results) { 
		  var compoundCount = 0;
		  var workoutCount = 0;
		  var coreCount = 0;
		  var coreWeight=[];
		  
		// go through each workout that was pulled and get the name, bodyZone, and type of workout.  
	    for (var i = 0; i < results.length; i++) {  
	      var object = results[i];
	      var name = object.get('ex_name');
	      var bodyZone = object.get('ex_bodyZone');
	      var type = object.get('ex_type');
	    	  
	      if(bodyZone == "upper")
	  		{
	    	  nameList[workoutCount] = name;
	    	  if(type=="Compound")
	    		{
  		    	  nameList[workoutCount] = nameList[compoundCount];
  		    	  nameList[compoundCount] = name;  		    	  
  		    	  
  		    	  if(level == 1)
  		    	  {
  		    		  if(phase == "1")
  		    		  {
  		    			rcmndedWeight[workoutCount] = "Just the Bar";
  		    		  }
  		    	  }
  		    	  rcmndedWeight[workoutCount] = rcmndedWeight[compoundCount];
  		    	  rcmndedWeight[compoundCount] = "Just the Bar";
  	
  		    	  $("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[compoundCount]+'</label></li>');
  		    	  compoundCount++;
	    		}
	    	  else if(type =="Dumbbell")
	    		{
	    		  if(level == 1)
  		    	  {
  		    		  if(phase == "1")
  		    		  {
  		    			rcmndedWeight[workoutCount] = 25;
  		    		  }
  		    	  }
  		    	  $("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');
  		    	  
	    		}
	    	  else if(type == "Body")
		  		{
	    		  if(level == 1)
  		    	  {
  		    		  if(phase == "1")
  		    		  {
  		    			rcmndedWeight[workoutCount] = "Body Weight";
  		    		  }
  		    	  }
  		    	  $("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');
  		    	  
		  		}
	    	  else if(type == "Machine")
		  		{
	    		  if(level == 1)
		    	  {
		    		  if(phase == "1")
		    		  {
		    			  rcmndedWeight[workoutCount] = 50;
		    		  }
		    	  }
  		    	  $("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');
		  		}    
		  		workoutCount++;

	  		}
	  		else if(bodyZone == "lower")
	  		{
		    	  nameList[workoutCount] = name;
		    	  if(type=="Compound")
		    		{
	  		    	  nameList[workoutCount] = nameList[compoundCount];
	  		    	  nameList[compoundCount] = name;
	  		    	  
	  		    	  if(level == 1)
	  		    	  {
	  		    		  if(phase == "1")
	  		    		  {
	  		    			rcmndedWeight[workoutCount] = "Just the Bar";
	  		    		  }
	  		    	  }
		  		   	  rcmndedWeight[workoutCount] = rcmndedWeight[compoundCount];
	  		    	  rcmndedWeight[compoundCount] = "Just the Bar";
	  		    	  $("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[compoundCount]+'</label></li>');
	  		    	  compoundCount++;
		    		}
		    	  else if(type =="Dumbbell")
		    		{
		    		  if(level == 1)
	  		    	  {
	  		    		  if(phase == "1")
	  		    		  {
	  		    			rcmndedWeight[workoutCount] = 25;
	  		    		  }
	  		    	  }
	  		    	  $("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');

		    		}
		    	  else if(type == "Body")
			  		{
		    		  if(level == 1)
	  		    	  {
	  		    		  if(phase == "1")
	  		    		  {
	  		    			rcmndedWeight[workoutCount] = "Body Weight";
	  		    		  }
	  		    	  }
	  		    	  $("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');

			  		}
		    	  else if(type == "Machine")
			  		{
		    		  if(level == 1)
			    	  {
			    		  if(phase == "1")
			    		  {
			    			  rcmndedWeight[workoutCount] = 50;
			    		  }
			    	  }
					  $("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+rcmndedWeight[i]+'</label></li>');

			  		}    
			  		workoutCount++;
	  		}
	  		else
	  		{
		  	    	  coreList[coreCount] = name;
		  	    	  if(type == "Body")
		  	    	  {
		  	    		  coreWeight[coreCount] = "Body Weight";
		    			  //rcmndedWeight[workoutCount] = "Body Weight";
		  	    	  }

		  		$("#coreList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i><br><label>Recommended Weight:</label><label id="upperWeight'+i+'">'+coreWeight[coreCount]+'</label></li>');
		  		coreCount++;
		  		workoutCount++;

	  		}
	    }
	    
	    for(var index=0; index<coreCount; index++)
	    {
	    	nameList.push(coreList[index]);
	    	rcmndedWeight.push(coreWeight[index]);
	    }
	   

	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
	/*
	
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
	    		if(data.exercise[i].ex_bodyZone == "upper")
	    		{
	    			$("#upperList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    		else if(data.exercise[i].ex_bodyZone == "lower")
	    		{
	    			$("#lowerList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    		else
	    		{
	    			$("#coreList").append('<li class="workoutCards"><label id="exLbl'+i+'" class="exName">'+data.exercise[i].ex_name.toUpperCase()+'</label><i id="view'+i+'" class="icon-plus icon-3"></i></li>');
	    		}
	    	}
		      
	    },
	    error: function (response) {
	         alert("Error establishing a connection.");
	    }
    });*/
}

function getLevel(email) {
	var User = Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.equalTo("username", current.get("username"));
	query.find({
	  success: function(results) {
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];
	      var pulledLevel = object.get('level');
	      level = parseInt(pulledLevel);
	      }
	    getPhase(current.get("username"));

	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
		  
	});
	
	
	/*$.ajax({
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
    });*/
}

function getPhase(email) {

	
	var User = Parse.Object.extend("User");
	var query = new Parse.Query(User);
	query.equalTo("username", current.get("username"));
	query.find({
	  success: function(results) {
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	    	var object = results[i];
		    pulledPhase = object.get('phase');
		    phase = pulledPhase.toString();
	     /* var object = results[i];
	      phase = object.get('phase');
	      alert(phase);*/
	    }
	    getExercise();
	    
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

//------------------------------------------------------------//
//----------- Menu------------------------------------------//
//------------------------------------------------------------//
$("#logout").click(function(){
	Parse.User.logOut();
	window.location = "index.html"; 
});

$("#myMeals").click(function(){
	window.location = "meals.html"; 
});

$("#myWorkouts").click(function(){
	window.location = "workout.html"; 
});

$("#myProfile").click(function(){
	window.location = "profile.html"; 
});

//------------------------------------------------------------//
//----------- Workout start------------------------------------//
//------------------------------------------------------------//

$("#startButton").click(function(){
	if(timerSwitch == "on") 
		{
		startCounter++;
		/*for(var i = 0; i<nameList.length; i++)
		{
				
		}*/


		$(".timer").css("display","none");
		$("#startButton").text("Submit");
		$("#weightPerformed").css("display","block");
		$("#set").text("Set ");
		$("#setNum").text(setCount + " of 3");
    	$("#timeLabel").text(" Seconds");
    	
		
		
		// check the database to see if the workout already exists for the specific user.
		var ExerciseQuery = $("#workoutOverviewTitle").text();
		
		var query = new Parse.Query(Weight);
		
		query.equalTo("wght_exercise", ExerciseQuery); 
		query.equalTo("wght_user", username); 
		
		query.find({
			  success: function(results) {
				var weightText, weightNum; 
				  if(rcmndedWeight[nameCount] == "Just the Bar")
					{
						weightText = "Just the Bar";					
						weightNum = 45;
					}
					else if(rcmndedWeight[nameCount] == "Body Weight")
					{
						weightText = "Body Weight";
						weightNum = 0;
					}
					else
					{
						weightText = rcmndedWeight[nameCount] + "lbs";
						weightNum = rcmndedWeight[nameCount];
					}
				 // if it does not exist create it 
				if (results.length == 0)
				{
					
					var Weight = Parse.Object.extend("Weight");	
					var weight = new Weight();
					
					weight.set("wght_user", username);
					weight.set("wght_exercise", ExerciseQuery);
					weight.set("wght_recommended", weightNum);


					
					
					weight.save().then(function(weight) {
						weightId=weight.id;
						}, function(error) {
						  // the save failed.
						});
	

				}
				else //if it exists store the ID.
				{
					weight.set("wght_recommended", weightNum);

					weightId=results[0].id;

				}
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
			});

			timerSwitch ="off";
			
			

		}
	else if(timerSwitch == "off")
		{
			timerSwitch = "on";
			var setDatabaseCount = "wght_set" + setCount;
			var weightPerformed = parseInt($("#weightPerformed").val());
			var query = new Parse.Query(Weight);
			query.get(weightId, {
			  success: function(weight) {
				 weight.set(setDatabaseCount, weightPerformed);
				 weight.save();
			  },
			  error: function(weight, error) {
			    // The object was not retrieved successfully.
			    // error is a Parse.Error with an error code and description.
			  }
			});
			
		
			$("#weightPerformed").val('');
			
			$("#startButton").text("Start");
			$("#weightPerformed").css("display","none");
			
			$("#timeAnimation").text("90");
			timer=90;
			$(".timer").css("display","block");
				
			if(setCount == 3)
			{
				$("#weightAdjForm").css("display","block");
				$(".overlay").css("display", "block");
				$("#weightAdjSbmt").click(function(){
					
					var query = new Parse.Query(Weight);
					query.get(weightId, {
					  success: function(weight) {
						  if($("#tooLight").is(':checked'))
							{
								$("#weightAdjForm").css("display","none");
								$(".overlay").css("display", "none");
								 weight.set("wght_recommended", (weightPerformed+5));
								 weight.save();
							}
							else if($("#tooHeavy").is(':checked'))
							{
								$("#weightAdjForm").css("display","none");
								$(".overlay").css("display", "none");
								 weight.set("wght_recommended", (weightPerformed-5));
								 weight.save();
							}
							else if($("#Perfect").is(':checked'))
							{
								$("#weightAdjForm").css("display","none");
								$(".overlay").css("display", "none");
								 weight.set("wght_recommended", (weightPerformed));
								 weight.save();
							}
							else
							{
								alert("you must choose something");
							}
						  	weight.save();
					  },
					  error: function(weight, error) {
					    // The object was not retrieved successfully.
					    // error is a Parse.Error with an error code and description.
					  }
					});
						
					
				});
				
				nameCount++;
				setCount=1;
				$("#workoutOverviewTitle").text(nameList[nameCount]);
				$("#rcmendWeight").text(rcmndedWeight[nameCount]);
				
				
				alert(nameCount);
				alert(rcmndedWeight[nameCount]);

				if(nameList[nameCount] == undefined)
				{
					$(".startWorkoutImg").animate({"width":"0%"},300);
					$(".startWorkoutImg").empty();
					$("#set").animate({"margin-left":"-160px"},300);
					$("#setNum").animate({"margin-right":"0px"},300);
					$("#rcmendWeight").animate({"margin-left":"376px"},300);
					$("#timerContainer").animate({"margin-left":"-360px"},300);
					$(".workoutHead").animate({"margin-top": "-280px"},300);
					$("#startButton").text("Finished");
					$("#startButton").animate({"top": "-120px"});
					timerSwitch = "complete";
					
					setTimeout(function() {
						$("#completeMessage").css("display","block");
					}, 500);
					
					
				}
				
			}
			else
			{
				setCount++;
			}
			
			
			$("#setNum").text(setCount + " of 3");
			if(nameCount == (nameList.length*3))
			{
				alert("complete");
			}			
					
		}
		else if(timerSwitch == "complete")
		{
			window.location = "workout.html";
		}
	
	
	
});


