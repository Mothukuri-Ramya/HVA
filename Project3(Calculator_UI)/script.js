var val=document.getElementById("calc");
function Show(v){
    val.value+=v;
}
function fun(){
         
      val.value="";
      
}

function exe(){
    val.value=eval(val.value);
}
function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
}