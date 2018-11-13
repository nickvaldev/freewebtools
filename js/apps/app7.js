
  let finalResults,error1,yearsText,daysText,monthsText;
  if (whatLang() == "el") {
    finalResults = 'Τελικά Αποτελέσματα';
    error1 = "Η πρώτη ημερομηνία να προηγείται της δεύτερης ημερομηνίας";
  }else {
    finalResults = "Final Results";
    error1 = "The first Date must be prior to the second Date.";
  }
  
  
  
  function initializeDates() {
    var tmpToday = new Date();
    var month = tmpToday.getMonth() + 1;
    var day = tmpToday.getDate();
    var year = tmpToday.getFullYear();
    var ageInput = year + '-' + month + '-' + day;
  
    document.getElementById('app7_input_id_1').value = ageInput;
  
  }
  initializeDates();

document.getElementById('app7_form').addEventListener('submit', app7_calculateResults);



function app7_calculateResults(e) {

  calcage();

  function twoDigYear(yy) {
    yy = Number(yy);
    if (yy < 100){
      if (yy > 20) {
        yy = yy + 1900
      }else{
        yy = yy + 2000
      }
    }
    return yy;
  }
  

  function daysInMonth(month,year) {
    var dd = new Date(year, month, 0);
    return dd.getDate();
  }
  function calcage() {
    var strDate = document.getElementById("app7_input_id_0").value;
    var arrDate = strDate.split("-");
    strBirthMonth = arrDate[1];
    strBirthDay = arrDate[2];
    strBirthYear = twoDigYear(arrDate[0]);

    strDate = document.getElementById("app7_input_id_1").value;
    arrDate = strDate.split("-");
    strTestMonth = arrDate[1];
    strTestDay = arrDate[2];
    strTestYear = twoDigYear(arrDate[0]);
  
  
    var strBirthDate = strBirthMonth + "/" + strBirthDay + "/" + strBirthYear;
    var strTestDate = strTestMonth + "/" + strTestDay + "/" + strTestYear;

  
      var tmpBornDate = new Date(strBirthYear, strBirthMonth - 1, strBirthDay);
   
      var tmpTestDate = new Date(strTestYear, strTestMonth - 1, Number(strTestDay));
      var intDifYears = (strTestMonth < strBirthMonth) ? strTestYear - strBirthYear - 1 : strTestYear - strBirthYear;
 
      var intDifMonths = (strTestMonth < strBirthMonth) ? (12 - strBirthMonth) + strTestMonth : strTestMonth - strBirthMonth;
  
      // convention is to use 30 day months rather than real number of days
      // if that should change, adjust comments below
      
      // comment out below for 30 day months
      // var intDifDays = (strTestDay < strBirthDay) ? daysInMonth(strBirthMonth,strBirthYear) - strBirthDay + strTestDay : strTestDay - strBirthDay;
      // This should use true days in month
      var intDifDays = (strTestDay < strBirthDay) ? 30 - strBirthDay + strTestDay : strTestDay - strBirthDay;
      
      //borrow months and years
      var intDifMonths = (strTestDay < strBirthDay) ? intDifMonths-1 : intDifMonths;
      if (intDifMonths < 0) {
        intDifMonths = 11;
        intDifYears = intDifYears - 1;
      }
  
      if (intDifYears < 0) {
        showError(error1);
        return false;
      }
  
      var strYears = "";
      var strDays = intDifDays;
      var strMonths = intDifMonths;
      var strYears = intDifYears;
      document.querySelector(".results .panel-title").innerHTML = finalResults;
      if (whatLang() == "el") {
        if (strYears > 1) {
          yearsText = 'χρόνια';
        } else if (strYears == 1){
          yearsText = 'χρόνος';
        } else {
          yearsText = '';
          strYears = '';
        }
        if (strMonths > 1) {
          monthsText = 'μήνες';
        } else if (strYears == 1){
          monthsText = 'μήνας';
        } else {
          monthsText = '';
          strMonths = '';
        } 
        if (strDays > 1) {
          daysText = 'ημέρες';
        } else if (strYears == 1){
          daysText = 'ημέρα';
        } else {
          daysText = '';
          strDays = '';
        } 
      } else {
        if (strYears > 1) {
          yearsText = 'years';
        } else if (strYears == 1){
          yearsText = 'year';
        } else {
          yearsText = '';
          strYears = '';
        }
        if (strMonths > 1) {
          monthsText = 'months';
        } else if (strYears == 1){
          monthsText = 'month';
        } else {
          monthsText = '';
          strMonths = '';
        } 
        if (strDays > 1) {
          daysText = 'days';
        } else if (strYears == 1){
          daysText = 'day';
        } else {
          daysText = '';
          strDays = '';
        } 
      }

      document.getElementById('app7_results_span_content_0').innerHTML = strYears + " " + yearsText + "<br>" + strMonths + " " + monthsText + "<br>" + strDays + " "+ daysText ;
    
  }
  
 e.preventDefault();  
}


