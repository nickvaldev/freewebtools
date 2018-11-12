
const app3_weight_el = document.getElementById("app3_input_id_0");
const app3_height_el = document.getElementById("app3_input_id_1");
let resultsText,error1,error2,comment1,comment2,comment3,comment4,comment5,comment6,comment7,comment8;
document.getElementById('app3_form').addEventListener('submit', app3_calculateResults);

function app3_calculateResults(e) {
  let lang = window.location.href;
  if (lang.includes('/el/')) {
    lang = "el";
    resultsText = "Τελικά Αποτελέσματα";
    error1 = "Συμπληρώστε τα στοιχεία σας";
    error2 = "Συμπληρώστε σωστά τα στοιχεία σας. To βάρος πρέπει να είναι σε κιλά (πχ 75) και το ύψος σε μέτρα (πχ 1.75)";
    comment1 = "Είστε σοβαρά παχύσαρκο άτομο, Επισκεφτείτε επειγόντως τον γιατρό σας";
    comment2 = "Είστε παχύσαρκο άτομο, χρειάζεστε συμβουλή γιατρού";
    comment3 = "Είστε υπέρβαρο άτομο, πρέπει να χάσετε κάποιο βάρος";
    comment4 = "Είστε πάνω απο το όριο, καλό θα ήταν να χάνατε κάποιο βάρος";
    comment5 = "Είστε στο φυσιολογικό βάρος!!Μείνετε όπως είστε!";
    comment6 = "Είστε κάτω από το όριο, καλό θα ήταν να πέρνατε κάποιο βάρος";
    comment7 = "Είστε αρκετά κάτω από το όριο, πρέπει να πάρετε κάποιο βάρος";
    comment8 = "Ίσως βρίσκεστε σε τροχιά συνάντησης με τη νευρική ανορεξία. Θα πρέπει να επισκεφθείτε τον γιατρό σας";
  } else {
    lang = "en";
    resultsText = "Final Results";
    error1 = "Fill in your information correctly";
    error2 = "Fill in your information correctly. The weight must be in kilograms (eg 75) and height in meters (eg 1.75)";
    comment1 = "You are a seriously obese person, Visit your doctor urgently";
    comment2 = "You are an obese person, you need a doctor's advice";
    comment3 = "You are overweight, you have to lose some weight";
    comment4 = "You're over the limit, it's a good idea to lose some weight";
    comment5 = "You are in the normal weight! Stay as you are!";
    comment6 = "You are below the limit, it would be good to take some weight";
    comment7 = "You are well below the limit, you have to take some weight";
    comment8 = "You may be in ordeal with anorexia nervosa. You should visit your doctor";
  }
  
  let app3_weight = app3_weight_el.value;
  let app3_height = app3_height_el.value;
  console.log(app3_weight, app3_height)
  if (app3_validation()){
    let app3_bmi_el = document.getElementById("app3_results_span_content_0");
    let app3_comment_el = document.getElementById("app3_results_span_content_1");
    let app3_bmi;
    let app3_comment;
    document.querySelector(".results .panel-title").innerHTML = resultsText;
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
    showError(error1);
       return false;
  }

  else if (parseFloat(app3_height.value) <= 0||
           parseFloat(app3_height.value) >=2.3||
           parseFloat(app3_weight.value) <= 0||
           parseFloat(app3_weight.value) >=400){
            showError(error2);
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
   app3_comment = comment1;
  }

  else if (yourbmi >30 && yourbmi <=40) {
     app3_comment = comment2;
  }

  else if (yourbmi >27 && yourbmi <=30) {
     app3_comment =comment3;
  }

  else if (yourbmi >22 && yourbmi <=27) {
     app3_comment =comment4;
  }

  else if (yourbmi >=21 && yourbmi <=22) {
     app3_comment =comment5;
  }

  else if (yourbmi >=18 && yourbmi <21) {
     app3_comment =comment6;
  }

  else if (yourbmi >=16 && yourbmi <18) {
     app3_comment =comment7;
  }

  else if (yourbmi <16) {
     app3_comment =comment8;
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




