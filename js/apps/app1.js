// NA TO KANW SAN TA ALLA ME EVENTLISTENER
    var exvat = 0;
    var inclvat = 0;
    var vatamount = 0;
    var totalamount = 0;
    var vatpercentage;
    let finalResults,vat;
    if (whatLang() == "el") {
      finalResults = 'Τελικά Αποτελέσματα';
      vat = "ΦΠΑ";
    }else {
      finalResults = "Final Results";
      vat = "VAT";
    }
    

function app1_func_0() {
    
    //Παίρνουμε το value απο το input
    var exvat = document.getElementById('app1_input_id_0').value;
    vatpercentage = document.getElementById('app1_input_id_1').value;
    (!vatpercentage) ? vatpercentage = 24 : vatpercentage = parseFloat(vatpercentage);
    document.getElementById('app1_results_title_1').textContent = vat + ' ' + vatpercentage + '%';
    //Metatropi string se arithmo
    exvat = parseFloat(exvat);
    //To poso tou FPA kai Metatropi arithmou se string kai afairesi mi epithimitwn xaraktirwn 
    vatamount = currencyFormat(parseFloat(((exvat * vatpercentage) / 100)));
    // To sinoliko poso
    totalamount = currencyFormat(parseFloat(exvat * ( 100 + vatpercentage ) / 100 ));
    // To poso xwris to FPA
    exvat_converted = currencyFormat(parseFloat(exvat));
    document.querySelector(".results .panel-title").innerHTML = finalResults;
    document.getElementById('app1_results_span_content_2').innerHTML = exvat_converted;
    document.getElementById('app1_results_span_content_1').innerHTML = vatamount;
    document.getElementById('app1_results_span_content_0').innerHTML = totalamount;
}

//get value from user and exclude VAT
function app1_func_1() {
    //calculations
    var inclvat = document.getElementById('app1_input_id_0').value;
    inclvat = parseFloat(inclvat);
    vatamount = currencyFormat(parseFloat(Math.abs(inclvat - (inclvat / ( 1 + vatpercentage/100)))));
    console.log(vatamount);
    totalamount = currencyFormat(parseFloat(inclvat / ( 1 + vatpercentage/100)));
    // vatamount = currencyFormat(parseFloat(Math.abs(
        
    //     inclvat / (vatpercentage / 100) - inclvat
        
    //     )));  
   
    inclvat_converted = currencyFormat(parseFloat(inclvat));
    document.querySelector(".results .panel-title").innerHTML = finalResults;
    document.getElementById('app1_results_span_content_0').innerHTML = inclvat_converted;
    document.getElementById('app1_results_span_content_1').innerHTML = vatamount;
    document.getElementById('app1_results_span_content_2').innerHTML = totalamount;

}

function currencyFormat(num) {
    var exvat = 0;
    var inclvat = 0;
    var vatamount = 0;
    var totalamount = 0;
    // The toFixed() method converts a number into a string, keeping a specified number of decimals.
    return "&euro;" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

