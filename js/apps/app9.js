// app9   -    Υπολογισμός Aποπληρωμής Δανείου
let finalResults,error1,error2;
if (whatLang() == "el") {
	finalResults = 'Τελικά Αποτελέσματα';
	error1 = 'Ελέγξτε τους αριθμούς που δώσατε';
}else {
	finalResults = "Final Results";
	error1 = "Check again the information you entered";
}


document.getElementById('app9_form').addEventListener('submit', app9_calculateResults);
function app9_calculateResults(e) {


    //UI Vars
    const app9_amount = document.getElementById('app9_input_id_0');
    const app9_interest = document.getElementById('app9_input_id_1');
    const app9_years = document.getElementById('app9_input_id_2');
    const app9_monthly_payments = document.getElementById('app9_results_span_content_0');
    const app9_total_payment = document.getElementById('app9_results_span_content_2');
    const app9_total_interest = document.getElementById('app9_results_span_content_1');

    const monthly = parseFloat(app9_amount.value);
    const calculatedInterest = parseFloat(app9_interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(app9_years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const principal  = (monthly*(x-1) ) / (x*calculatedInterest);


    if(isFinite(monthly)) {
      app9_monthly_payments.innerHTML = monthly;
      app9_total_payment.innerHTML =  principal.toFixed(2);
      app9_total_interest.innerHTML = app9_interest.value ;
      document.querySelector(".results .panel-title").innerHTML = finalResults;
  
      // Show results
      // document.getElementById('app9_results').style.display = 'block';
  
      // // Hide loader
      // document.getElementById('loading').style.display = 'none';
  
    } else {
      showError(error1);
    }
    e.preventDefault();
}

// Show Error
function showError(error){
  // Hide results
  // document.getElementById('results').style.display = 'none';
  
  // Hide loader
  // document.getElementById('loading').style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){
  document.querySelector('.alert').remove();
}