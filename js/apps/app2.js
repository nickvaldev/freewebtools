        const app2_apoout = document.getElementById("app2_results_title_0");
        const app2_apooutnum = document.getElementById("app2_results_span_content_0");
        const app2_seout = document.getElementById("app2_results_title_1");
        const app2_seoutnum = document.getElementById("app2_results_span_content_1");
        const app2_input_el = document.getElementById("app2_input_id_0");
        
        const app2_apo_el = document.getElementById("app2_select_id_0");

        const app2_se_el = document.getElementById("app2_select_id_1");

        let finalResults,error1,error2,error3;
        if (whatLang() == "el") {
          finalResults = 'Τελικά Αποτελέσματα';
          error1 = "Διαλέχτε διαφορετικές μονάδες μέτρησης";
          error2 = "Δώστε αριθμό βάρους μεγαλύτερο από το μηδέν";
          error3 = "Δώστε αριθμό βάρους";
        }else {
          finalResults = "Final Results";
          error1 = "The units you chose are the same. Choose differently!";
          error2 = "The input number must be over zero";
          error3 = "Enter the weight number";
        }
        



        document.getElementById('app2_form').addEventListener('submit', app2_calculateResults);


        function app2_calculateResults(e) {
          var app2_apo_val = app2_apo_el.options[app2_apo_el.selectedIndex].value;
          var app2_apo_text = app2_apo_el.options[app2_apo_el.selectedIndex].text;
          var app2_se_val = app2_se_el.options[app2_se_el.selectedIndex].value;
          var app2_se_text = app2_se_el.options[app2_se_el.selectedIndex].text;
          var app2_input = parseFloat(app2_input_el.value);
          var app2_output ;
          var app2_aposign;
          var app2_sesign;
              
          
          if (app2_validation()) {

            if ( app2_apo_val == 'kilograms') {
              app2_aposign = 'kg';
              switch (app2_se_val) {
                case 'pounds': 
                app2_seoutnum.innerHTML = app2_input*2.2046226218;
                  break;
                  case 'ounces': 
                  app2_seoutnum.innerHTML = app2_input*35.27;
                  break;
                  case 'grams': 
                  app2_seoutnum.innerHTML = app2_input*1000;
                break;
                case 'stones': 
                app2_seoutnum.innerHTML = app2_input*0.1574;
                break;
                default:
                  break;
              }
              
            }
            if ( app2_apo_val == 'pounds') {
              app2_aposign = 'lb';
              switch (app2_se_val) {
                case 'kilograms': 
                app2_seoutnum.innerHTML = app2_input/2.2046;
                  break;
                  case 'ounces': 
                  app2_seoutnum.innerHTML = app2_input*16;
                  break;
                  case 'grams': 
                  app2_seoutnum.innerHTML = app2_input/0.0022046;
                break;
                case 'stones': 
                app2_seoutnum.innerHTML = app2_input*0.071429;
                break;
                default:
                  break;
              }  
            }
            if ( app2_apo_val == 'ounces') {
              app2_aposign = 'oz';
              switch (app2_se_val) {
                case 'kilograms': 
                app2_seoutnum.innerHTML = app2_input/35.274;
                  break;
                  case 'pounds': 
                  app2_seoutnum.innerHTML = app2_input*0.0625;
                  break;
                  case 'grams': 
                  app2_seoutnum.innerHTML = app2_input/0.035274;
                break;
                case 'stones': 
                app2_seoutnum.innerHTML = app2_input*0.0044643;
                break;
                default:
                  break;
              }
              
            }
            if ( app2_apo_val == 'grams') {
              app2_aposign = 'g';
              switch (app2_se_val) {
                case 'kilograms': 
                app2_seoutnum.innerHTML = app2_input/1000;
                  break;
                  case 'pounds': 
                  app2_seoutnum.innerHTML = app2_input*0.0022046;
                  break;
                  case 'ounces': 
                  app2_seoutnum.innerHTML = app2_input*0.035274;
                break;
                case 'stones': 
                app2_seoutnum.innerHTML = app2_input*0.00015747;
                break;
                default:
                  break;
              }
              
            }
            if ( app2_apo_val == 'stones') {
              app2_aposign = 'st';
              switch (app2_se_val) {
                case 'kilograms': 
                app2_seoutnum.innerHTML = app2_input/0.15747;
                  break;
                  case 'pounds': 
                  app2_seoutnum.innerHTML = app2_input*14;
                  break;
                  case 'grams': 
                  app2_seoutnum.innerHTML = app2_input/0.00015747;
                break;
                case 'ounces': 
                app2_seoutnum.innerHTML = app2_input*224;
                break;
                default:
                  break;
              }
              
            }
            switch (app2_se_val) {
              case 'kilograms':
                app2_sesign = 'kg';
                break;
              case 'grams':
                app2_sesign = 'g';
                break;
              case 'pounds':
                app2_sesign = 'lb';
                break;
              case 'ounces':
                app2_sesign = 'oz';
                break;
              case 'stones':
                app2_sesign = 'st';
                break;          
              default:
                break;
            }
            
            document.querySelector(".results .panel-title").innerHTML = finalResults;
            app2_apoout.innerHTML = app2_apo_text;
            app2_seout.innerHTML = app2_se_text;
            app2_apooutnum.innerHTML = app2_input;
            app2_output = parseFloat(app2_seoutnum.innerHTML);
            app2_seoutnum.innerHTML = app2_output.toFixed(3);
            document.getElementById('app2_results_span_content_sign_0').textContent = app2_aposign;
            document.getElementById('app2_results_span_content_sign_1').textContent = app2_sesign;
            
            

          }


          e.preventDefault();

        }
      
        function app2_validation() {
          var app2_apo_val = app2_apo_el.options[app2_apo_el.selectedIndex].value;
          var app2_se_val = app2_se_el.options[app2_se_el.selectedIndex].value;
          if (app2_apo_val == app2_se_val){
            showError(error1);
               return false;
          }
          
          if (parseFloat(app2_input_el.value) > 0) {
            return true;
          }

          else if (parseFloat(app2_input_el.value) <= 0){
                    showError(error2);
                   clearForm();
                   return false;
          }else {
            showError(error3);
            clearForm();
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
        
        