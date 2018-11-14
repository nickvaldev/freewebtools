  
  let finalResults,error1,error2;
  if (whatLang() == "el") {
    var days = new Array("Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο");
    finalResults = 'Τελικά Αποτελέσματα';
    error1 = "Η ημερομηνία που δώσατε δεν είναι έγκυρη. Ελέγξτε ξανά την ημερομηνία που δώσατε.";
    error2 = "Είσάγετε ημερομηνία γέννησης";
  }else {
    var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    finalResults = "Final Results";
    error1 = "The date is invalid. Check it again.";
    error2 = "PLease enter the Birth Date.";
  }
  
  document.getElementById('app8_input_id_0').style.width = "30%";
document.getElementById('app8_form').addEventListener('submit', app8_calculateResults);

function app8_calculateResults(e) {
  
  // var months = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	// 	var days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

    getDateInfo();


		function getDateInfo() {
      var strDate = document.getElementById("app8_input_id_0").value;
      if(strDate == '') {
        showError(error2);
        return false;
      }
      var arrDate = strDate.split("-");
      var m = Number(arrDate[1]);
      var d = Number(arrDate[2]);
      var y  = Number(twoDigYear(arrDate[0]));

			var numDays = getDaysInMonth(y,m);
			if (d < numDays + 1) {
        var c = new Date(y,m-1,d);
        var dayOfWeek = c.getDay();
        document.querySelector(".results .panel-title").innerHTML = finalResults;
				document.getElementById('app8_results_span_content_0').innerHTML = days[dayOfWeek];
			}
			else {
				showError(error1);
			}
		}

		function getDaysInMonth(year, month) {
      var dd = new Date(year, month, 0);
      return dd.getDate();
		}
    
    e.preventDefault();  
  }
  