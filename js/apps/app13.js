let finalResults,error1,error2,result;
if (whatLang() == "el") {
  finalResults = 'Τελικά Αποτελέσματα';
  error1 = "Διαλέχτε διαφορετικά νομίσματα";
  error2 = "Συμπληρώστε το ποσό";
} else {
  finalResults = "Final Results";
  error1 = "The currencies you chose are the same. Choose differently!";
  error2 = "Enter the amount";
}

var JsonPass = passJson;
JsonPassKeys = Object.keys(JsonPass);
// console.log(JsonPassKeys[0]);
for (let i = 0; i < JsonPassKeys.length; i++) {
  let df = document.createDocumentFragment();
  var option = document.createElement("option");
  option.innerHTML =JsonPass[JsonPassKeys[i]].currencyName + ' - ' + JsonPass[JsonPassKeys[i]].id;
  option.value = JsonPass[JsonPassKeys[i]].id;
  df.appendChild(option);
  var select1 = document.getElementById("app13_select_id_0");
  select1.appendChild(df);
}

for (let i = 0; i < JsonPassKeys.length; i++) {
  let df = document.createDocumentFragment();
  var option = document.createElement("option");
  option.innerHTML = JsonPass[JsonPassKeys[i]].currencyName + ' - ' + JsonPass[JsonPassKeys[i]].id;
  option.value = JsonPass[JsonPassKeys[i]].id;
  df.appendChild(option);
  var select2 = document.getElementById("app13_select_id_1");
  select2.appendChild(df);
}

var fromEl = document.getElementById('app13_select_id_0');

var toEl = document.getElementById('app13_select_id_1');

document.getElementById('app13_form').addEventListener('submit', app13_calculateResults);





function app13_calculateResults(e) {

  var input = document.getElementById('app13_input_id_0').value;
  if (input == '') {
    showError(error2);
    return false;
  }
  var fromValue = fromEl.options[fromEl.selectedIndex].value;
  var toValue = toEl.options[toEl.selectedIndex].value;


  if (fromValue == toValue) {
    showError(error1);
    return false;
  }

  fromCurrency = encodeURIComponent(fromValue);
  toCurrency = encodeURIComponent(toValue);
  var query = fromCurrency + '_' + toCurrency;

  $.getJSON('https://free.currencyconverterapi.com/api/v6/convert?q='
  + query + '&compact=ultra', function(data) {

    result = data[query] ;
    result = result * input;
     document.getElementById('app13_results_span_content_1').textContent = result.toFixed(3);  
  }).error(function() { 
    var fromDols = JsonPass[fromValue].dol;
      var toDols = JsonPass[toValue].dol;
      result = (toDols / fromDols) * input ; 
       document.getElementById('app13_results_span_content_1').textContent = result.toFixed(3);
  });
  
  


  if (typeof JsonPass[fromValue].currencySymbol !== 'undefined') {
    document.getElementById('app13_input_span_id_0').textContent = JsonPass[fromValue].currencySymbol;
    document.getElementById('app13_results_span_content_sign_0').textContent = JsonPass[fromValue].currencySymbol;
  } else {
    document.getElementById('app13_input_span_id_0').innerHTML = JsonPass[fromValue].id.toLowerCase() ;
    document.getElementById('app13_results_span_content_sign_0').innerHTML = JsonPass[fromValue].id.toLowerCase() ;
  }

  if (typeof JsonPass[toValue].currencySymbol !== 'undefined') { 
    document.getElementById('app13_results_span_content_sign_1').textContent = JsonPass[toValue].currencySymbol;
  } else {
    document.getElementById('app13_results_span_content_sign_1').innerHTML = JsonPass[toValue].id.toLowerCase() ;
  }
  
  document.getElementById('app13_results_title_0').innerHTML = JsonPass[fromValue].currencyName + ' - ' + JsonPass[fromValue].id;
  document.getElementById('app13_results_title_1').innerHTML = JsonPass[toValue].currencyName + ' - ' + JsonPass[toValue].id;
  document.getElementById('app13_results_span_content_0').textContent = Number(input).toFixed(3);
  document.querySelector(".results .panel-title").innerHTML = finalResults;
  e.preventDefault();
}
