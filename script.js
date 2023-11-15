let count=0;
let count2=0;
let numeroCasuale;
let randomNum;
let arr = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let arr9 = [];
let arr10 = [];
let arr11 = [];
let arr12 = [];
let arr13 = [];
let array01=[];
let array02=[];
let array03=[];
let array04=[];
let array05=[];
let array06=[];

//RIEMPIMENTO ARRAY
for (let i = 0; i < 90; i++){
    arr.push(i+1);
  }
for (let i = 0; i < 30; i++){
    arr2.push(i+1);
    arr3.push(i+31);
    arr4.push(i+61);
    arr5.push(i+1);
    arr6.push(i+31);
    arr7.push(i+61);
  }
for (let i = 0; i < 9; i++){
    arr8.push(i+1);
    arr9.push(i+1);
    arr10.push(i+1);
    arr11.push(i+1);
    arr12.push(i+1);
    arr13.push(i+1);
  }

// FUNZIONE ESTRAZIONE NUMERI CASUALI
document.getElementById("estrai").onclick=function Estrazione(){
    numeroCasuale = arr[Math.floor(Math.random() * arr.length)];
    let any=[];
    for( let i = 0; i < arr.length; i++){ 
        if ( arr[i] === numeroCasuale) {
          arr.splice(i, 1); 
        }
        //console.log("Random Test: " + arr[i]);
     }
    document.getElementById("estratti").innerHTML += `${numeroCasuale}` + " ";
    
    console.log("2 - " + numeroCasuale);
    for(let i=1; i<=90; i++){
        if(numeroCasuale==i){
            document.getElementById(`td${i}`).style.backgroundColor="red";
        }
    }
    for(let i=91; i<=144; i++){
        if(numeroCasuale==document.getElementById(`td${i}`).innerHTML){
            let casella = document.getElementById(`td${i}`);
            //console.log("3 - " + casella.id);
            document.getElementById(casella.id).style.backgroundColor="red";
            if(i>=91 && i<=117){
              count++;
            }else if(i>=118 && i<=144){
              count2++;
            }
        }
    }
    //console.log("Count: " + count + " - Count2: " + count2)
    CheckWin();
}

//FUNZIONE CONTROLLO VINCITORE
function CheckWin(){
  if(count==15 && count2!=15){
    document.getElementById("winner").innerHTML = "Ha vinto il giocatore 1";
    document.getElementById("estrai").remove();
    NuovoGame();
  }
  else if(count2==15 && count!=15){
    document.getElementById("winner").innerHTML = "Ha vinto il giocatore 2";
    document.getElementById("estrai").remove();
    NuovoGame();
  }
  else if(count==15 && count2==15){
    document.getElementById("winner").innerHTML = "Hanno vinto entrambi i giocatori";
    document.getElementById("estrai").remove();
    NuovoGame();
  }
}

//FUNZIONE NUOVO GIOCO
function NuovoGame(){
  let newBtn = document.createElement("button");
  newBtn.id="newGame";
  newBtn.innerHTML="Nuovo Gioco";
  document.getElementById("newBtn").insertAdjacentElement("afterend", newBtn);
  newBtn.onclick=function NuovoGioco(){
    window.location.href="index.html";
  }
}

// TABELLONE
for(let i=0; i<5;i++){
    document.getElementById("tabellone").innerHTML+=`<tr id="tr${i}"></tr>`;
    for(let j=0; j<18;j++){
        if(document.getElementById(`tr${i}`).id=="tr0")
        document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+1}">${j+1}</td>`;
        else if(document.getElementById(`tr${i}`).id=="tr1")
        document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+19}">${j+19}</td>`;
        else if(document.getElementById(`tr${i}`).id=="tr2")
        document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+37}">${j+37}</td>`;
        else if(document.getElementById(`tr${i}`).id=="tr3")
        document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+55}">${j+55}</td>`;
        else if(document.getElementById(`tr${i}`).id=="tr4")
        document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+73}">${j+73}</td>`;
    }
}

// CARTELLA PRIMO GIOCATORE
for(let i=5; i<8; i++){
    document.getElementById("tab1").innerHTML+=`<tr id="tr${i}"></tr>`;
    for(let j=90; j<99;j++){
        if(document.getElementById(`tr${i}`).id=="tr5"){
            numeroCasuale = arr2[Math.floor(Math.random() * arr2.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+1}">` + "" + `</td>`;
            array01[j-90]=numeroCasuale;
            /*document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+1}">` + numeroCasuale + `</td>`;*/
            for( let k = 0; k < arr2.length; k++){ 
                if ( arr2[k] === numeroCasuale) {
                  arr2.splice(k, 1); 
                }
             }
        }
        else if(document.getElementById(`tr${i}`).id=="tr6"){
            numeroCasuale = arr3[Math.floor(Math.random() * arr3.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+10}">` + "" + `</td>`;
            array02[j-90]=numeroCasuale;
            //document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+10}">` + numeroCasuale + `</td>`;
            for( let k = 0; k < arr3.length; k++){ 
                if ( arr3[k] === numeroCasuale) {
                  arr3.splice(k, 1); 
                }
             }
        }
        else if(document.getElementById(`tr${i}`).id=="tr7"){
            numeroCasuale = arr4[Math.floor(Math.random() * arr4.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+19}">` + "" + `</td>`;
            array03[j-90]=numeroCasuale;
            //document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+19}">` + numeroCasuale + `</td>`;
            for( let k = 0; k < arr4.length; k++){ 
                if ( arr4[k] === numeroCasuale) {
                  arr4.splice(k, 1); 
                }
             }
        }
    }
}

//RIPOSIZIONAMENTO NUMERI IN ORDINE CRESCENTE NEGLI ARRAY CARTELLA GIOCATORE 1
array01.sort(function(a, b) {
    return a - b;
  });
//console.log("Array01: " + array01);
array02.sort(function(a, b) {
    return a - b;
  });
//console.log("Array02: " + array02);
array03.sort(function(a, b) {
    return a - b;
  });
//console.log("Array03: " + array03);

//RIEMPIMENTO CARTELLA GIOCATORE 1
for(let i=0; i<9; i++){
    document.getElementById(`td${i+91}`).innerHTML=array01[i];
}
for(let i=0; i<9; i++){
    document.getElementById(`td${i+100}`).innerHTML=array02[i];
}
for(let i=0; i<9; i++){
    document.getElementById(`td${i+109}`).innerHTML=array03[i];
}

//RIMOZIONE DI 12 CELLE CASUALI NELLA CARTELLA DEL GIOCATORE 1
for(let i=5; i<8; i++){
    for(let j=0; j<4;j++){
        if(document.getElementById(`tr${i}`).id=="tr5"){
            randomNum = arr8[Math.floor(Math.random() * arr8.length)];
            for( let k = 0; k < arr8.length; k++){ 
                if ( arr8[k] === randomNum) {
                  arr8.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=90;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
        else if(document.getElementById(`tr${i}`).id=="tr6"){
            randomNum = arr9[Math.floor(Math.random() * arr9.length)];
            for( let k = 0; k < arr9.length; k++){ 
                if ( arr9[k] === randomNum) {
                  arr9.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=99;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
        else if(document.getElementById(`tr${i}`).id=="tr7"){9
            randomNum = arr10[Math.floor(Math.random() * arr10.length)];
            for( let k = 0; k < arr10.length; k++){ 
                if ( arr10[k] === randomNum) {
                  arr10.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=108;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
    }
}
/*console.log("Array8: " + arr8);
console.log("Array9: " + arr9);
console.log("Array10: " + arr10);
console.log("Array2: " + arr2);
console.log("Array3: " + arr3);
console.log("Array4: " + arr4);*/

// CARTELLA SECONDO GIOCATORE
for(let i=8; i<11; i++){
    document.getElementById("tab2").innerHTML+=`<tr id="tr${i}"></tr>`;
    
    for(let j=117; j<126;j++){
        if(document.getElementById(`tr${i}`).id=="tr8"){
            numeroCasuale = arr5[Math.floor(Math.random() * arr5.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+1}">` + "" + `</td>`;
            array04[j-117]=numeroCasuale;
            //document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+1}">` + numeroCasuale + `</td>`;
            for( let k = 0; k < arr5.length; k++){ 
                if ( arr5[k] === numeroCasuale) {
                  arr5.splice(k, 1); 
                }
             }
        }
        else if(document.getElementById(`tr${i}`).id=="tr9"){
            numeroCasuale = arr6[Math.floor(Math.random() * arr6.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+10}">` + "" + `</td>`;
            array05[j-117]=numeroCasuale;
            //document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+10}">` + numeroCasuale + `</td>`;
            for( let k = 0; k < arr6.length; k++){ 
                if ( arr6[k] === numeroCasuale) {
                  arr6.splice(k, 1); 
                }
             }
        }
        else if(document.getElementById(`tr${i}`).id=="tr10"){
            numeroCasuale = arr7[Math.floor(Math.random() * arr7.length)];
            document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+19}">` + "" + `</td>`;
            array06[j-117]=numeroCasuale;
            //document.getElementById(`tr${i}`).innerHTML+=`<td id="td${j+19}">` + numeroCasuale + `</td>`;
            for( let k = 0; k < arr7.length; k++){ 
                if ( arr7[k] === numeroCasuale) {
                  arr7.splice(k, 1); 
                }
             }
        }
    }
}

//RIPOSIZIONAMENTO NUMERI IN ORDINE CRESCENTE NEGLI ARRAY CARTELLA GIOCATORE 2
array04.sort(function(a, b) {
    return a - b;
  });
//console.log("Array04: " + array04);
array05.sort(function(a, b) {
    return a - b;
  });
//console.log("Array05: " + array05);
array06.sort(function(a, b) {
    return a - b;
  });
//console.log("Array06: " + array06);

//RIEMPIMENTO CARTELLA GIOCATORE 2
for(let i=0; i<9; i++){
    document.getElementById(`td${i+118}`).innerHTML=array04[i];
}
for(let i=0; i<9; i++){
    document.getElementById(`td${i+127}`).innerHTML=array05[i];
}
for(let i=0; i<9; i++){
    document.getElementById(`td${i+136}`).innerHTML=array06[i];
}

//RIMOZIONE DI 12 CELLE CASUALI NELLA CARTELLA DEL GIOCATORE 2
for(let i=8; i<11; i++){
    for(let j=0; j<4;j++){
        if(document.getElementById(`tr${i}`).id=="tr8"){
            randomNum = arr11[Math.floor(Math.random() * arr11.length)];
            for( let k = 0; k < arr11.length; k++){ 
                if ( arr11[k] === randomNum) {
                  arr11.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=117;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
        else if(document.getElementById(`tr${i}`).id=="tr9"){
            randomNum = arr12[Math.floor(Math.random() * arr12.length)];
            for( let k = 0; k < arr12.length; k++){ 
                if ( arr12[k] === randomNum) {
                  arr12.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=126;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
        else if(document.getElementById(`tr${i}`).id=="tr10"){
            randomNum = arr13[Math.floor(Math.random() * arr13.length)];
            for( let k = 0; k < arr13.length; k++){ 
                if ( arr13[k] === randomNum) {
                  arr13.splice(k, 1); 
                }
             }
            //console.log(`Numero: ${j} ` + randomNum);
            randomNum+=135;
            document.getElementById(`td${randomNum}`).innerHTML ="";
        }
    }
}
/*console.log("Array11: " + arr11);
console.log("Array12: " + arr12);
console.log("Array13: " + arr13);
console.log("Array5: " + arr5);
console.log("Array6: " + arr6);
console.log("Array7: " + arr7);*/