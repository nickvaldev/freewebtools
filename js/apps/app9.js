// var https = require('https');


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
  var select2 = document.getElementById("app9_select_id_1");
  select2.appendChild(df);
}

for (let i = 0; i < JsonPassKeys.length; i++) {
  let df = document.createDocumentFragment();
  var option = document.createElement("option");
  option.innerHTML = JsonPass[JsonPassKeys[i]].currencyName;
  option.value = JsonPass[JsonPassKeys[i]].id;
  df.appendChild(option);
  var select2 = document.getElementById("app9_select_id_1");
  select2.appendChild(df);
}





// function convertCurrency(amount, fromCurrency, toCurrency, cb) {
//   // var apiKey = 'your-api-key-here';

//   fromCurrency = encodeURIComponent(fromCurrency);
//   toCurrency = encodeURIComponent(toCurrency);
//   var query = fromCurrency + '_' + toCurrency;

//   var url = 'https://free.currencyconverterapi.com/api/v6/convert?q='
//             + query + '&compact=ultra';

//   https.get(url, function(res){
//       var body = '';

//       res.on('data', function(chunk){
//           body += chunk;
//       });

//       res.on('end', function(){
//           try {
//             var jsonObj = JSON.parse(body);

//             var val = jsonObj[query];
//             if (val) {
//               var total = val * amount;
//               cb(null, Math.round(total * 100) / 100);
//             } else {
//               var err = new Error("Value not found for " + query);
//               console.log(err);
//               cb(err);
//             }
//           } catch(e) {
//             console.log("Parse error: ", e);
//             cb(e);
//           }
//       });
//   }).on('error', function(e){
//         console.log("Got an error: ", e);
//         cb(e);
//   });
// }

//uncomment to test

// convertCurrency(10, 'USD', 'PHP', function(err, amount) {
//   console.log(amount);
// });
