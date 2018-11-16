// FUNCTIONS
function whatLang() {
let lang = window.location.href;
if (lang.includes('/el/')) { 
  lang = "el";
  return lang;
} else {
  lang = "en";
  return lang;
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


function twoDigYear(yy) {
  yy = Number(yy);
  if (yy < 100){
    if (yy > 20) {
      yy = yy + 1900
    }else{
      yy = yy + 2000
    }
  }
  return yy;
}


// $.getJSON('https://cat-fact.herokuapp.com/facts', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });
// $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });


// function navMenuHref() {
//   let df = document.createDocumentFragment();
//   let p = document.createElement('p');
//   p.textContent = 'Δεν υπάρχουν άλλες εφαρμογές σε αυτή τη κατηγορία';
//   df.appendChild(p);
//   document.getElementById('menua0').appendChild(df);  
// }

// function getAppInfo() {
//   var appInfo = window.location.pathname;
// appInfo = appInfo.substring(0, appInfo.indexOf('.'));
// appInfo = appInfo.substr(appInfo.lastIndexOf("/")+1);
// appInfo = appInfo.split('_');
// return appInfo;
// }

// function ObjectLength( object ) {
//   var length = 0;
//   for( var key in object ) {
//       if( object.hasOwnProperty(key) ) {
//           ++length;
//       }
//   }
//   return length;
// };

// function getCurrentAppInfos(apps , appInfo) {
//   var infos = [];
  
//   for (let i = 0; i < ObjectLength(apps); i++) {
//     if ( apps[i].appNum == appInfo[0] )  {
//       infos.push(apps[i]);   
//     }
  
//   }
//   return infos;
// }


// function getSimilarAppsInfos(apps , appInfo) {
//   var infos = [];
 
//   for (let i = 0; i < ObjectLength(apps); i++) {
//     if ( (apps[i].categoryClass == appInfo[1]) && ( apps[i].appNum != appInfo[0]) )  {
//       infos.push(apps[i]);
//     }
  
//   }
//   if (infos.length == 0) {
//     return false;
//   }
//   return infos;
// }

// function appendSimilarApps(infos) {
//   if (infos) {
//     for (let i = 0; i < infos.length; i++) {
//       let df = document.createDocumentFragment();
//         let li = document.createElement('li');
//         let a = document.createElement('a');
//         li.className = 'list-group-item';
//         a.textContent = infos[i].info;
//         a.href = infos[i].href;
//         df.appendChild(li);
//         li.appendChild(a);
//         document.getElementById('similarAppsLIst').appendChild(df);
//     }
//   } else {
//     let df = document.createDocumentFragment();
//      let p = document.createElement('p');
//      p.textContent = 'Δεν υπάρχουν άλλες εφαρμογές σε αυτή τη κατηγορία';
//      df.appendChild(p);
//      document.getElementById('similarAppsLIst').appendChild(df);
//   } 
// }

// function appendCategoriesNav(id) {
//   if (categories) {
//     for (let i = 0; i < categories.length; i++) {
//       let df = document.createDocumentFragment();
//         let li = document.createElement('li');
//         let sup = document.createElement('sup');
//         li.setAttribute("data-filter", '.'+categories[i].class);
//         sup.className = 'count';
//         li.textContent = categories[i].name;
//         df.appendChild(li);
//         li.appendChild(sup);
//         document.getElementById(id).appendChild(df);
//     }
//   } else {
//     let df = document.createDocumentFragment();
//      let p = document.createElement('p');
//      p.textContent = 'Δεν έχουν οριστεί κατηγορίες';
//      df.appendChild(p);
//      document.getElementById(id).appendChild(df);
//   } 
// }

// function appendNavMenu(id) {
//   if (categories) {
//     let dfo = document.createDocumentFragment();
//     let nav = document.createElement('nav');
//     let ul = document.createElement('ul');
//     nav.className = 'nav';
//     ul.className = 'menu';
//     ul.id = 'navMenu';
//     dfo.appendChild(nav);
//     nav.appendChild(ul);
//     document.getElementById(id).appendChild(dfo);
//     for (let i = 0; i < ObjectLength(categories); i++) {
//         let dfi = document.createDocumentFragment();     
//         let li = document.createElement('li');
//         let a = document.createElement('a');
//         let ulSub = document.createElement('ul');
//         ulSub.className = 'submenu';
//         ulSub.id = 'subMenu' + i;
//         a.href = '#';  
//         a.textContent = categories[i].name;    
//         dfi.appendChild(li);
//         li.appendChild(a);
//         li.appendChild(ulSub);
//         document.getElementById('navMenu').appendChild(dfi);
//     }
//   } else {
//     let df = document.createDocumentFragment();
//      let p = document.createElement('p');
//      p.textContent = 'Δεν έχουν οριστεί κατηγορίες';
//      df.appendChild(p);
//      document.getElementById(id).appendChild(df);
//   } 
// }

// function appendSubMenu(){
//   let k;
//   for (let i = 0; i < ObjectLength(categories); i++) {
//     k = 0;
//     for (let j = 0; j < ObjectLength(apps); j++) {
//       if (apps[j].categoryClass == categories[i].class ) {
//         k++;
//         let dfis = document.createDocumentFragment();  
//         let liSub = document.createElement('li');
//         let a = document.createElement('a');         
//         a.href = apps[j].href;
//         a.textContent = apps[j].info;
//         dfis.appendChild(liSub);
//         liSub.appendChild(a);
//         document.getElementById('subMenu'+i).appendChild(dfis);
//       }      
//     }  
//     if (k == 0) {
//       let dfis = document.createDocumentFragment();
//       let liSub = document.createElement('li');
//       liSub.style.listStyle = 'none';
//       liSub.textContent = 'Δεν υπάρχουν εφαρμογές σε αυτή τη κατηγορία';
//       dfis.appendChild(liSub);
//       document.getElementById('subMenu'+i).appendChild(dfis);
//     }     
//   }
// }

// function appendApps() {
//   for (var i = 0; i < ObjectLength(apps); i++) {
//     var appNum = apps[i].appNum;
//     var info = apps[i].info;
//     var category = apps[i].category;
//     var categoryClass = apps[i].categoryClass;
//     var photoUrl = apps[i].photoUrl;
//     var href = apps[i].href;
//     var lightContent = apps[i].lightContent;

//     var tmpl = document.getElementById('appCards').content.cloneNode(true);
//     tmpl.getElementById('tmpl_category').className = 'entry ' + categoryClass;
//     if (lightContent) {
//     tmpl.getElementById('tmplLight').className = "overlay--caption bottom light--content";
//     }
//     tmpl.getElementById('tmpl_a').href = href;
//     tmpl.getElementById('tmpl_bgphoto').style.backgroundImage = "url('" + photoUrl + "')";
//     tmpl.getElementById('tmpl_categoryText').innerHTML = category;
//     tmpl.getElementById('tmpl_info').innerHTML = info;
//     document.getElementById('tmpl_append').appendChild(tmpl);
//     }
// }