
const app3_weight_el = document.getElementById("app3_input_id_0");
const app3_height_el = document.getElementById("app3_input_id_1");
document.getElementById('app3_form').addEventListener('submit', app3_calculateResults);

function app3_calculateResults(e) {
  let app3_weight = app3_weight_el.value;
  let app3_height = app3_height_el.value;
  console.log(app3_weight, app3_height)
  if (app3_validation()){
    let app3_bmi_el = document.getElementById("app3_results_span_content_0");
    let app3_comment_el = document.getElementById("app3_results_span_content_1");
    let app3_bmi;
    let app3_comment;
    document.querySelector(".results .panel-title").innerHTML = 'Τελικά Αποτελέσματα';
    app3_bmi = bmi(app3_weight, app3_height);
    app3_bmi_el.innerHTML = app3_bmi.toFixed(2);
    app3_comment = comment(app3_bmi);
    app3_comment_el.innerHTML = app3_comment;
  }
  e.preventDefault();
}


function app3_validation() {
  let app3_weight = app3_weight_el.value;
  let app3_height = app3_height_el.value;
  if (app3_weight==null||app3_weight.length==0 || app3_height==null||app3_height.length==0){
    showError("Συμπληρώστε τα στοιχεία σας");
       return false;
  }

  else if (parseFloat(app3_height.value) <= 0||
           parseFloat(app3_height.value) >=2.3||
           parseFloat(app3_weight.value) <= 0||
           parseFloat(app3_weight.value) >=400){
            showError("Συμπληρώστε σωστά τα στοιχεία σας. To βάρος πρέπει να είναι σε κιλά (πχ 75) και το ύψος σε μέτρα (πχ 1.75)");
           clearForm();
           return false;
  }
  return true;
}

function bmi(weight, height) {

  bmindx=weight/eval(height*height);
  return bmindx;
}

function comment(yourbmi) {

  if (yourbmi >40) {
   app3_comment ="Είστε σοβαρά παχύσαρκο άτομο, Επισκεφτείτε επειγόντως τον γιατρό σας";
  }

  else if (yourbmi >30 && yourbmi <=40) {
     app3_comment ="Είστε παχύσαρκο άτομο, χρειάζεστε συμβουλή γιατρού";
  }

  else if (yourbmi >27 && yourbmi <=30) {
     app3_comment ="Είστε υπέρβαρο άτομο, πρέπει να χάσετε κάποιο βάρος";
  }

  else if (yourbmi >22 && yourbmi <=27) {
     app3_comment ="Είστε πάνω απο το όριο, καλό θα ήταν να χάνατε κάποιο βάρος";
  }

  else if (yourbmi >=21 && yourbmi <=22) {
     app3_comment ="Είστε στο φυσιολογικό βάρος!!Μείνετε όπως είστε!";
  }

  else if (yourbmi >=18 && yourbmi <21) {
     app3_comment ="Είστε κάτω από το όριο, καλό θα ήταν να πέρνατε κάποιο βλαρος";
  }

  else if (yourbmi >=16 && yourbmi <18) {
     app3_comment ="Είστε αρκετά κάτω από το όριο, πρέπει να πάρετε κάποιο βάρος";
  }

  else if (yourbmi <16) {
     app3_comment ="Ίσως βρίσκεστε σε τροχιά συνάντησης με τη νευρική ανορεξία. Θα πρέπει να επισκεφθείτε τον γιατρό σας";
  }

  return app3_comment;
}

function showError(error){
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

function clearForm(){

  app3_weight_el.value = "";
  app3_height_el.value = "";
}




