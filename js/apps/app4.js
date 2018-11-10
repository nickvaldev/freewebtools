// app4   -    Υπολογισμός Aποπληρωμής Δανείου

document.getElementById('app4_form').addEventListener('submit', app4_calculateResults);
function app4_calculateResults(e) {


    //UI Vars
    const app4_amount = document.getElementById('app4_input_id_0');
    const app4_interest = document.getElementById('app4_input_id_1');
    const app4_years = document.getElementById('app4_input_id_2');
    const app4_monthly_payments = document.getElementById('app4_results_span_content_0');
    const app4_total_payment = document.getElementById('app4_results_span_content_2');
    const app4_total_interest = document.getElementById('app4_results_span_content_1');

    const principal = parseFloat(app4_amount.value);
    const calculatedInterest = parseFloat(app4_interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(app4_years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);


    if(isFinite(monthly)) {
      app4_monthly_payments.innerHTML = monthly.toFixed(2);
      app4_total_payment.innerHTML = (monthly * calculatedPayments).toFixed(2);
      app4_total_interest.innerHTML = ((monthly * calculatedPayments)-principal).toFixed(2);
      document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
  
      // Show results
      // document.getElementById('app4_results').style.display = 'block';
  
      // // Hide loader
      // document.getElementById('loading').style.display = 'none';
  
    } else {
      showError('Ελέγξτε τους αριθμούς που δώσατε');
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