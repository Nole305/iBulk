//--------------------------------------------------------//
//-- This function is ran on loading the app.            //
//-- All pages are hidden aside from the login page    //

	$("#registerPage").hide();
	$("#detailsPage").hide();
	$("#activityLevelPage").hide();
	$("#goalsPage").hide();
	$("#liftingLevelPage").hide();
	$("#eatingPage").hide();
	$("#healthPage").hide();
	//$("#loginPage").hide();
	
	

//-------------------------------------------------------//
//-- ONCLICK(loginButton)                            //
//-----------------------------------------------------//
		
		$("#loginButton").click(function(){
			login($("#logUsername").val(), $("#logPassword").val());
		});
//-------------------------------------------------------//
//-- ONCLICK(RegisterButton)                            //
//-----------------------------------------------------//
	
	$("#registerButton").click(function(){
		$("#registerDiv").css('margin-top', '1000px');
		navigateColor("loginPage", "registerPage");
		$("#registerDiv").animate({'margin-top': '50px'}, 500, 'swing');
		
	});
	
//--------------------------------------------------------//
//-- ONCLICK(SubmitRegister)                             //
//-----------------------------------------------------//	
	$("#registerSubmit").click(function(){
		if($("#txtEmail").val() != $("#txtEmailConfirm").val())
			{
				alert("emails do not match");
			}
		else
			{
				if(checkEmail($("#txtEmail").val()))
				{
					alert("Email is already taken")
				}
				else
				{
					
					if(matchPasswords($("#txtPassword").val(),$("#confirmPassword").val()))
					{
						
						if($("#termCheck").prop("checked"))
							{
								
								navigate("registerPage","detailsPage");
							}
						else
							{
								alert("Please Accept the terms and conditions to continue");
							}
						
					}
					else
					{
						alert("Passwords do not match");
					}
				}
			}
			
		
	});
	
//----------------------------------------------------------//
	//---------------details page------------------------//
//----------------------------------------------------------//
	$("#detailsButton").click(function(){
		var height;
		var feetToInches;
		var feet;
		var inches;
		feet = parseInt($("#feet").val());
		
		inches = parseInt($("#inches").val());
	
		feetToInches = feet * 12;
		height = feet + feetToInches;
		$("#txtHeight").val(height);
		navigate("detailsPage", "healthPage");
	});

//----------------------------------------------------------//
	//---------------health page------------------------//
//----------------------------------------------------------//
	$("#healthButton").click(function(){
		if($("#heartYes").is(':checked'))
		{
			if(confirm("If you clicked yes to any of these options, it is strongly recommended that you speak to a doctore before proceeding.") == true)
				{
					navigate("healthPage", "goalsPage");
				}
		}
		else if($("#heartPainYes").is(':checked'))
		{
			if(confirm("If you clicked yes to any of these options, it is strongly recommended that you speak to a doctore before proceeding.") == true)
			{
				navigate("healthPage", "goalsPage");
			}
		}
		else if($("#dizzyYes").is(':checked'))
		{
			if(confirm("If you clicked yes to any of these options, it is strongly recommended that you speak to a doctore before proceeding.") == true)
			{
				navigate("healthPage", "goalsPage");
			}
		}
		else if($("#bloodYes").is(':checked'))
		{
			if(confirm("If you clicked yes to any of these options, it is strongly recommended that you speak to a doctore before proceeding.") == true)
			{
				navigate("healthPage", "goalsPage");
			}
		}
		else if($("#jointYes").is(':checked'))
		{
			if(confirm("If you clicked yes to any of these options, it is strongly recommended that you speak to a doctore before proceeding.") == true)
			{
				navigate("healthPage", "goalsPage");
			}
		}
		else
			{
				navigate("healthPage", "goalsPage");
			}
	});

	
//----------------------------------------------------------//
//-----------------------goals------------------------------//
//----------------------------------------------------------//

	$("#goalsButton").click(function(){
		navigate("goalsPage","eatingPage")
	})
	
	
//----------------------------------------------------------//
//-----------------------eating habits----------------//
//----------------------------------------------------------//
	$("#eatingButton").click(function(){
		navigate("eatingPage","activityLevelPage")
	});

//----------------------------------------------------------//
//-----------------------Activity Level ----------------//
//----------------------------------------------------------//
	$("#activityButton").click(function(){
		
		if($("#noActivity").is(':checked'))
		{
			$("#cardio").val(1);

		}
		else if($("#lightActivity").is(':checked'))
		{
			$("#cardio").val(2);

		}
		else if($("#moderateActivity").is(':checked'))
		{
			$("#cardio").val(3);

		}
		else if($("#highActivity").is(':checked'))
		{
			$("#cardio").val(4);

		}
		navigate("activityLevelPage","liftingLevelPage")
		
	});
	
//----------------------------------------------------------//
//-----------------------Lifting Level ----------------//
//----------------------------------------------------------//
	$("#levelButton").click(function(){
		
		if($("#level1").is(':checked'))
		{
			$("#level").val(1);

		}
		else if($("#level2").is(':checked'))
		{
			$("#level").val(2);

		}
		else if($("#level3").is(':checked'))
		{
			$("#level").val(3);

		}
		else if($("#level4").is(':checked'))
		{
			$("#level").val(4);

		}
	/*	
		alert($("#txtPassword").val());
				alert($("#txtEmail").val());
		alert($("#ageDrop").val());
				 alert($("#weightTxt").val());
				 alert($("#txtHeight").val());
				 alert($("#idlWeight").val());
				 alert($("#injury").val());
				 alert($("#focusArea").val());
				 alert($("#normalMPD").val());
				 alert($("#cook").val());
				 alert($("#allergyOne").val());
				 alert($("#allergyTwo").val());
				 alert($("#allergyThree").val());
				 alert($("#level").val());
				 alert($("#cardio").val());
		*/
		register($("#txtPassword").val(),
				 $("#txtEmail").val(),
				 $("#ageDrop").val(),
				 $("#weightTxt").val(),
				 $("#txtHeight").val(),
				 $("#idlWeight").val(),
				 $("#injury").val(),
				 $("#focusArea").val(),
				 $("#normalMPD").val(),
				 $("#cook").val(),
				 $("#allergyOne").val(),
				 $("#allergyTwo").val(),
				 $("#allergyThree").val(),
				 $("#level").val(),
				 $("#cardio").val());
				
	});
	
//---------------Check if email is unique----------------///	
	function checkEmail(email) {	
		$.ajax({
		    type: "Post",
		    url: "http://www.tremainegrant.com/iBulk/bulk.php",
		    data: {action: 'checkEmail', $email: email},
		    crossDomain: true,
		    success: function (response,status) {
		    	if (response.toString().indexOf("taken") >= 0) {
		    		return false;
		    	}
		    	else {
		    		return true;
		    	}
		    },
		    error: function (response) {
		         alert("issue");
		    }
	    });
	}	

	
function matchPasswords(original, confirmed){
	    alert("checking match");
	   
		if (original == confirmed){
			return true;
		}
		else {
			return false;
		}
	}



//--------------------Login ---------------------///
function login(email,password) {
	$.ajax({
	    type: "Post",
	    url: "http://www.tremainegrant.com/iBulk/bulk.php",
	    data: {action: 'login', $email: email, $password: password },
	    crossDomain: true,
	    success: function (response,status) {
	    	if (response.toString().indexOf("match") >= 0) {
	    		navigate("loginPage", "welcomePage");
	    		
	    	}
	    	else {
	    		alert("not found")
	    	}
	    	
	    },
	    error: function (response) {
	         alert("Error establishing a connection.");
	    }
	   
    });
	
	alert(success);
}

//------------Navigate to Register Page------------///
function navigate(currentPage, pageDest)
{
	
	$("#" +  currentPage).hide();
	$("#" + pageDest).show(200);
	
}
//------------Navigate to Register Page------------///
function navigateColor(currentPage, pageDest)
{
	var circle = $("#circle");
	var w = window.innerWidth;
	var h = window.innerHeight;
	circle.animate({
	  "width":w+100+"px",
	  "height":h+100+"px",
	  "margin-left":-(w/2)-50+"px",
	  "margin-top":-(h/2)-50+"px"
	}, 450, function() {
	  circle.css({
	    "width":"100%",
	    "border-radius":"0px",
	    "margin":"0px",
	    "top":"0px",
	    "left":"0px",
	    
	  });
	});
	
	$("#circle").css('z-index','0');
	
	
	$("#" +  currentPage).hide();
	$("#" + pageDest).show(290);
	
}


//----------Register function ----------------------------///
function register(password,email,age,weight,height,idlWeight,injury,focusArea,normalMPD,cook,allergyOne,allergyTwo,allergyThree,level,cardio) {
	
		$.ajax({
		    type: "Post",
		    url: "http://www.tremainegrant.com/iBulk/bulk.php",
		    data: {action: 'register', $password: password, 
		    	   $email: email,
		    	   $age: age,
		    	   $weight: weight,
		    	   $height: height,
		    	   $idlWeight: idlWeight,
		    	   $injury: injury,
		    	   $focusArea: focusArea,
		    	   $normalMPD: normalMPD,
		    	   $cook: cook,
		    	   $allergyOne: allergyOne,
		    	   $alleryTwo: allergyTwo,
		    	   $allergyThree: allergyThree,
		    	   $level: level,
		    	   $cardio: cardio
		    	   },
		    crossDomain: true,
		    success: function (response,status) {
		    	alert("registed");	
		    },
		    error: function (response) {
		         alert("There was an issue registering you.");
		    }
	    });
	
}



