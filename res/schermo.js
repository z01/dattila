function printtodo(){
  colortext=postodo>0?testotodo.substring(0,postodo):"";
  if(postodo<testotodo.length){
    if(testotodo.substring(postodo,postodo+1)=="\n"){
      colortext+="<span style='color:red; background-color:yellow;'>"+(sptonl?" ":"&#182;")+"</span>\n";
    }else{
      colortext+="<span style='color:red; background-color:yellow;'>"+testotodo.substring(postodo,postodo+1)+"</span>";
    }
  }
  colortext+=postodo<testotodo.length-1?testotodo.substring(postodo+1):"";
  document.getElementById('testo').innerHTML=colortext;
  document.getElementById('errori').innerHTML=errori;
}
