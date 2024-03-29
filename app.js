let myObj = [];

for (let i = 1; i < 7; i++){

fetch(`base/Amazon-Content-0${i}-11-2023.json`)
  .then(response => response.json())
  .then(data => myObj.push(data));

}

fetch(`base/Amazon-Content-31-10-2023.json`)
  .then(response => response.json())
  .then(data => myObj.push(data));

/////////////////////////////////////////////

// for (let i = 0; i < myObj.length; i++) {

//     for (let e = 0; e < myObj[i].length; e++) {
        
//    myObj[i][e].input_short_commercial_ref =  typeof(myObj[i][e].input_short_commercial_ref) == 'string' ? myObj[i][e].input_short_commercial_ref : String(myObj[i][e].input_short_commercial_ref)
        
//     }
    
// }