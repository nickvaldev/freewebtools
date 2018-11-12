  
const app5_apo_el = document.getElementById("app5_select_id_0");
const app5_se_el = document.getElementById("app5_select_id_1");

const app5_apoout = document.getElementById("app5_results_title_0");
const app5_apooutnum = document.getElementById("app5_results_span_content_0");
const app5_seout = document.getElementById("app5_results_title_1");
const app5_seoutnum = document.getElementById("app5_results_span_content_1");

const app5_input_el = document.getElementById("app5_input_id_0");
        

let finalResults,error1,error2;
if (whatLang() == "el") {
	finalResults = 'Τελικά Αποτελέσματα';
	error1 = "Δώστε αριθμό θερμοκρασίας";
	error2 = "Διαλέχτε διαφορετικές μονάδες μέτρησης!";
}else {
	finalResults = "Final Results";
	error1 = "Enter the temperature";
	error2 = "The units you chose are the same. Choose differently!";
}


      

        document.getElementById('app5_form').addEventListener('submit', app5_calculateResults);


        function app5_calculateResults(e) {
          var app5_apo_val = app5_apo_el.options[app5_apo_el.selectedIndex].value;
          var app5_apo_text = app5_apo_el.options[app5_apo_el.selectedIndex].text;
          var app5_se_val = app5_se_el.options[app5_se_el.selectedIndex].value;
          var app5_se_text = app5_se_el.options[app5_se_el.selectedIndex].text;
          var app5_input = parseFloat(app5_input_el.value);
          var app5_output ;
          var app5_aposign;
          var app5_sesign;
          
          if (app5_validation()) {

            if ( app5_apo_val == 'celsius') {
              app5_aposign = '&deg;C';
              switch (app5_se_val) {
                case 'fahrenheit':           
                app5_seoutnum.innerHTML = app5_input*1.8000 + 32.00;
                  break;
                  case 'kelvin': 
                  app5_seoutnum.innerHTML = app5_input + 273.15;
                  break;                 
                default:
                  break;
              }
              
            }
            if ( app5_apo_val == 'fahrenheit') {
              app5_aposign = '&#8457;';
              switch (app5_se_val) {
                case 'celsius': 
                app5_seoutnum.innerHTML = (app5_input-32)/1.8;
                  break;
                  case 'kelvin': 
                  app5_seoutnum.innerHTML = (app5_input-32)/1.8 + 273.15;
                  break;                  
                default:
                  break;
              }  
            }
            if ( app5_apo_val == 'kelvin') {
              app5_aposign = '&deg;K';
              switch (app5_se_val) {
                case 'fahrenheit': 
                app5_seoutnum.innerHTML = (app5_input-273.15) + 32;
                  break;
                  case 'celsius': 
                  app5_seoutnum.innerHTML = app5_input-273.15;
                  break;                 
                default:
                  break;
              }
              
            }


            switch (app5_se_val) {
              case 'celsius':
                app5_sesign = '&deg;C';
                break;
              case 'fahrenheit':
                app5_sesign = '&#8457;';
                break;
              case 'kelvin':
                app5_sesign = '&deg;K';
                break;                    
              default:
                break;
            }
            
            document.querySelector(".results .panel-title").innerHTML = finalResults;
            app5_apoout.innerHTML = app5_apo_text;
            app5_seout.innerHTML = app5_se_text;
            app5_apooutnum.innerHTML = app5_input;
            app5_output = parseFloat(app5_seoutnum.innerHTML);
            app5_seoutnum.innerHTML = app5_output.toFixed(1);
            document.getElementById('app5_results_span_content_sign_0').innerHTML = app5_aposign;
            document.getElementById('app5_results_span_content_sign_1').innerHTML = app5_sesign;
            
            

          }


          e.preventDefault();

        }
      
        function app5_validation() {
          var app5_apo_val = app5_apo_el.options[app5_apo_el.selectedIndex].value;
          var app5_se_val = app5_se_el.options[app5_se_el.selectedIndex].value;
          if (app5_input_el.value == '') {
            showError(error1);
            return false;
          }
          else if (app5_apo_val == app5_se_val){
            showError(error2);
               return false;
          } else {
            return true;
          }
          
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

        }
        
        