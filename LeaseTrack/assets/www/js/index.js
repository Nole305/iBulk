
	
	function getMiles()
  	{
  		localStorage.allowMiles = $( "#allowMiles" ).val();
  		localStorage.currentMiles = $( "#currentMiles" ).val();
  		
  		
  		$.mobile.changePage( "#pagetwo", { transition: "pop", changeHash: false });


  	}
	
	function getDate()
	{
		 localStorage.day=$("#day").val();
		 localStorage.month=$("#month").val();
		 localStorage.year=$("#year").val();
	
		 
		 $.mobile.changePage( "#pagethree", { transition: "pop", changeHash: false });

	 }
	
	function getLeaseLength()
	{
		localStorage.leaseyears=2;
		
		localStorage.totalMiles = localStorage.allowMiles/12;
		 $("#totalMiles").html(localStorage.totalMiles);
		 
		 var dte = new Date();
		 var m = dte.getMonth();
		 var d = dte.getDate();
		 var y = dte.getFullYear();
		 
		    $("#showDay").html(d);
			$("#showMonth").html(m);
			$("#showYear").html(y);
		 

		 var yearDiffer = y - localStorage.year;
		 
		 if(yearDiffer == 1)
			 {
			 	localStorage.monthsPast = 12;
			 }
		 else if(yearDiffer == 2)
			 {
			 	localStorage.monthsPast = 24;
			 }
		 else if(yearDiffer == 3)
		 {
		 	localStorage.monthsPast = 36;
		 }
		 else if(yearDiffer == 4)
		 {
		 	localStorage.monthsPast = 48;
		 }
		 else
		 {
			 
			
			localStorage.monthsPast = (m+1) - localStorage.month;
			localStorage.idealMiles = localStorage.monthsPast * localStorage.totalMiles;
			localStorage.milesLeft = localStorage.idealMiles - localStorage.currentMiles;
			localStorage.totalMilesLeft = localStorage.allowMiles - localStorage.currentMiles;

			if(localStorage.milesLeft < 0)
			{
				var message = "You are " + ((localStorage.milesLeft) * (-1)) + " over your allowable miles"
				$("#message").html(message)
			}
			
			$("#monthMilesLeft").html(localStorage.milesLeft);
			$("#yearTotal").html(localStorage.allowMiles);
			$("#milesUsed").html(localStorage.currentMiles);
			$("#totalMilesLeft").html(localStorage.totalMilesLeft);

	

			
		 }
		 $.mobile.changePage( "#pagefour", { transition: "pop", changeHash: false });


		 
		 
		


	 }
	