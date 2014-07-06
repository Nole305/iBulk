//--------------------------------------------------------//
//-- This function is ran on loading the app.            //
//-- All pages are hidden aside from the login page    //

	$("#registerPage").hide();
	$("#detailsPage").hide();
	$("#activityLevelPage").hide();
	$("#goalsPage").hide();
	$("#liftingLevelPage").hide();
	$("#activityLevelPage").hide();
	$("#eatingPage").hide();
	//$("#healthPage").hide();
	$("#loginPage").hide();
	
	

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
		navigate("loginPage", "registerPage");
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
		navigate("activityLevelPage","liftingLevelPage")
		
	});
	
//----------------------------------------------------------//
//-----------------------Lifting Level ----------------//
//----------------------------------------------------------//
	$("#levelButton").click(function(){
		register($("#txtPassword").val(),
				 $("#txtEmail").val(),
				 $("#ageDrop").val(),
				 $("#weightTxt").val(),
				 $("#heightTxt").val(),
				 $("#idlWeight").val(),
				 $("#focusArea").val(),
				 $("#normalMPD").val(),
				 $("#cook").val());
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
/*	var circle = $("#circle");
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
	*/
	
	$("#" +  currentPage).hide();
	$("#" + pageDest).show(200)
	
}


//----------Register function ----------------------------///
function register(password,email) {
	
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
		    	   $allergyTwo: allergyTwo,
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



