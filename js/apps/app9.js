var JsonPass = passJson;
JsonPassKeys = Object.keys(JsonPass);
// console.log(JsonPassKeys[0]);
for (let i = 0; i < JsonPassKeys.length; i++) {
  let df = document.createDocumentFragment();
  var option = document.createElement("option");
  option.innerHTML = JsonPass[JsonPassKeys[i]].currencyName;
  option.value = JsonPass[JsonPassKeys[i]].id;
  df.appendChild(option);
  var select1 = document.getElementById("app9_select_id_0");
  select1.appendChild(df);
}

for (let i = 0; i < JsonPassKeys.length; i++) {
  let df = document.createDocumentFragment();
  var option = document.createElement("option");
  option.innerHTML = JsonPass[JsonPassKeys[i]].currencyName + ' - ' + JsonPass[JsonPassKeys[i]].id;
  option.value = JsonPass[JsonPassKeys[i]].id;
  df.appendChild(option);
  var select2 = document.getElementById("app9_select_id_1");
  select2.appendChild(df);
}



var fromEl = document.getElementById('app9_select_id_0');

var toEl = document.getElementById('app9_select_id_1');




document.getElementById('app9_form').addEventListener('submit', app9_calculateResults);


function app9_calculateResults(e) {
  var input = document.getElementById('app9_input_id_0').value;
  var fromValue = fromEl.options[fromEl.selectedIndex].value;
  var toValue = toEl.options[toEl.selectedIndex].value;
  var fromDols = JsonPass[fromValue].dol;
  var toDols = JsonPass[toValue].dol;
  var result = (toDols / fromDols) * input ;
  if (typeof JsonPass[fromValue].currencySymbol !== 'undefined') {
    document.getElementById('app9_input_span_id_0').textContent = JsonPass[fromValue].currencySymbol;
    document.getElementById('app9_results_span_content_sign_0').textContent = JsonPass[fromValue].currencySymbol;
  } else {
    document.getElementById('app9_input_span_id_0').innerHTML = JsonPass[fromValue].id;
    document.getElementById('app9_results_span_content_sign_0').innerHTML = JsonPass[fromValue].id;
  }

  if (typeof JsonPass[toValue].currencySymbol !== 'undefined') { 
    document.getElementById('app9_results_span_content_sign_1').textContent = JsonPass[toValue].currencySymbol;
  } else {
    document.getElementById('app9_results_span_content_sign_1').innerHTML = JsonPass[toValue].id;
  }
  
  document.getElementById('app9_results_title_0').innerHTML = JsonPass[fromValue].currencyName + ' - ' + JsonPass[fromValue].id;
  document.getElementById('app9_results_title_1').innerHTML = JsonPass[toValue].currencyName + ' - ' + JsonPass[toValue].id;
  document.getElementById('app9_results_span_content_0').textContent = input;

  document.getElementById('app9_results_span_content_1').textContent = result;

  e.preventDefault();
}
