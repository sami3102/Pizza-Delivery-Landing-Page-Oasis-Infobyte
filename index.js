
const orderIdInput = document.getElementById("order_id_input");
const submitBtn = document.getElementById("order_id_submit");
const cartBtn = document.getElementById("add_to_box");
var count = 1;
function addCart(){
  let cartval = document.getElementById("cart_val");
  cartval.innerText = count;
  count++;
  
}
function checkStatus(){
  if(orderIdInput.value == 123456||orderIdInput.value == 123457){
    document.getElementById("delivery").style.display = "block";
    document.querySelector(".success").style.display = "flex";
    var line = document.getElementsByClassName("line");
    for(i=0;i<line.length;i++){
      line[i].style.backgroundColor = "lightgreen";
  }
}
  else if(orderIdInput.value == 121212){
    document.getElementById("delivery").style.display = "block";
    document.querySelector(".success").style.display = "flex";
    line = document.getElementsByClassName("line");
    for(i=0;i<line.length;i++){
      line[i].style.backgroundColor = "red";
  }
}
  else{
    document.querySelector(".success").style.display = "none";
    document.getElementById("delivery").style.display = "none";
  }
}

function hoverImage(event) {
    var x = document.querySelectorAll(".branches_mapping");
    var sDisplay;
    if(event.type==="mouseout"){
       sDisplay = document.getElementById("onhover").style.zIndex = "-1";
    }
    if(event.type==="mouseover"){
        sDisplay =  document.getElementById("onhover").style.zIndex = "1";
    }
    
    x[0].style.display = sDisplay;
  }

  function hoverImage2(event) {
    var x2 = document.querySelectorAll(".branches_mapping2");
    var sDisplay2;
    if(event.type==="mouseout"){
       sDisplay2 = document.getElementById("onhover2").style.zIndex = "-1";
    }
    if(event.type==="mouseover"){
        sDisplay2 =  document.getElementById("onhover2").style.zIndex = "1";
    }
    
    x[0].style.display2 = sDisplay2;
  }

  function hoverImage3(event) {
    var x2 = document.querySelectorAll(".branches_mapping3");
    var sDisplay3;
    if(event.type==="mouseout"){
       sDisplay3 = document.getElementById("onhover3").style.zIndex = "-1";
    }
    if(event.type==="mouseover"){
        sDisplay3 =  document.getElementById("onhover3").style.zIndex = "1";
    }
    
    x[0].style.display2 = sDisplay3;
  }


/*Status */

/*const payment_circle = document.getElementsByClassName("payment_box");
// const order_ready = document.getElementsByClassName("payment_box");
// const payment_circle = document.getElementsByClassName("payment_box");
// const payment_circle = document.getElementsByClassName("payment_box");
*/

