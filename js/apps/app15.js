let finalResults,error1,error2,result,text1;
if (whatLang() == "el") {
  finalResults = 'Τελικά Αποτελέσματα';
  text1 = "Επίλυση της Eξίσωσης";
  text2 = "Χρησιμοποιούμε τον τύπο της δευτεροβάθμιας όπου"
  text3 = "Η διακρίνουσα"
  text4 = "δύο πραγματικές ρίζες"
  text5 = "μία πραγματική ρίζα"
  text6 = "δύο μιγαδικές ρίζες"
  text7 = "Συνεπώς, η εξίσωση έχει "
  error1 = "Πρέπει να συμπληρώσετε και τους τρείς συντελεστές a, b και c";
  error2 = "O συντελεστής a δεν μπορεί να ισούται με 0";
} else {
  finalResults = "Final Results";
  text1 = "Find the Solution for";
  text2 = "Using the Quadratic Formula where";
  text3 = "The discriminant";
  text4 = "are two real roots";
  text5 = "is one real root";
  text6 = "are two complex roots";
  text7 = "so,there";
  error1 = "You must enter all the three Coefficients a, b and c";
  error2 = "Coefficient a cannot be 0";
}

document.getElementById('app15_results_title_1').style.borderRight = "1px solid #ddd";
if ( sessionStorage.getItem('a') && sessionStorage.getItem('b') && sessionStorage.getItem('c') ) {
  a = sessionStorage.getItem('a');
  b = sessionStorage.getItem('b');
  c = sessionStorage.getItem('c');
  document.querySelector(".results .panel-title").innerHTML = finalResults;

  document.getElementById('app15_results_title_1').innerHTML = sessionStorage.getItem('par');

  document.getElementById('app15_input_id_0').value = a;
  document.getElementById('app15_input_id_1').value = b;
  document.getElementById('app15_input_id_2').value = c;
  document.getElementById('app15_results_span_content_1').innerHTML = sessionStorage.getItem('roots');;

  sessionStorage.clear();
} 

document.getElementById('app15_form').addEventListener('submit', app15_calculateResults);


function app15_calculateResults(e) {

  var a = document.getElementById('app15_input_id_0').value ;
  var b = document.getElementById('app15_input_id_1').value ;
  var c = document.getElementById('app15_input_id_2').value ;
 
  if (a == '' || b == '' || c == '') {
    shError(error1);
    e.preventDefault();
      return false;
  }
  if (a == 0) {
    shError(error2);
    e.preventDefault();
      return false;
    }
  var par = text1 + " : $ " + a  + " * x^2 + " + b + " * x + " + c + " = 0 $ <br><br>";
  par += text2 + " a = " + a + ", b = " + b + ", and c = " + c + " :<br><br> $$ =>   x_{1,2} = {-"+b+" ± √{"+b+"^2 - 4("+a+")("+c+")}} / {2 ("+a+")} $$ <br>";
  var discriminant = Math.pow(b,2) -4 * a * c;
  par += "$$ =>   x_{1,2} = {-"+b+" ± √{"+discriminant+"}} / {"+2*a+"} $$ <br>";
  if ( discriminant > 0 ) {
    var sign = text3 + ' : $ b^2 - 4ac > 0 $ <br>';
    var text = text4 + ' : ';
    var disNext = parseFloat( -b/(2*a) ) + " ± "+ (Math.sqrt(Math.abs(discriminant)) / (2*a)).toFixed(5) ;
    var root1 = parseFloat(-b/(2*a) + (Math.sqrt(Math.abs(discriminant)) / (2*a))).toFixed(5);
    var root2 = parseFloat(-b/(2*a) - (Math.sqrt(Math.abs(discriminant)) / (2*a))).toFixed(5);
    var roots = '$ x_1 = ' + root1 + ',$ <br>$ x_2 = ' + root2 + ' $';
  } else if(discriminant == 0) {
    var sign = text3 + ' : $ b^2 - 4ac = 0 $ <br>';
    var text = text5 + ' : ';
    var disNext = parseFloat( -b/(2*a) ) ;
    var roots = " $$ x_{1} = {"+ parseFloat( -b/(2*a) )+"} $$"; 
  } else {
    var sign = text3 + ' :  $ b^2 - 4ac < 0 $  <br>';
    var text = text6 + ' : ';
    var disNext = parseFloat( -b/(2*a) ) + " ± "+ (Math.sqrt(Math.abs(discriminant)) / (2*a)).toFixed(5) + "i" ;
    var roots = " $$ x_{1,2} = {"+disNext+"} $$";
  }
  par += sign;
  par += text7 + " " + text;
  par += "$ x_{1,2} = {"+ disNext +"} $";


  sessionStorage.setItem('par', par);
  sessionStorage.setItem('roots', roots);
  sessionStorage.setItem('a', a );
  sessionStorage.setItem('b', b);
  sessionStorage.setItem('c', c);

}

