var db1="";
var db2="";
var testo="";
var lastpress=-1;
var lastdown=-1;
var currdown=-1;
var testotodo="";
var postodo=0;
var errori=0;
var sptonl=0;
function on_body_keydown(event){
  keycode=(!event)?window.event.keyCode:event.which;
  if((!event)&&window.event.shiftKey)keycode=16;
  //db1=db1+'+'+keycode; document.getElementById('db1').innerHTML=db1;
  currdown=keycode;
  //if(keycode==116 /*F5*/) return true;
/*  if(keycode==16) document.getElementById('SHIFT').style.color='red';
  if(keycode==17) document.getElementById('CTRL').style.color='red';
  if(keycode==18) document.getElementById('ALT').style.color='red'; */
  return true;
}
function on_body_keypress(event){
  keycode=(!event)?window.event.keyCode:event.which;
  if((!event)&&window.event.shiftKey)keycode=16;
  //db1=db1+'-'+keycode; document.getElementById('db1').innerHTML=db1;
  //db2=db2+String.fromCharCode(keycode); document.getElementById('db2').innerHTML=db2;
  if(currdown==116 /*F5*/) return true;
  if(lastdown==currdown || lastpress==keycode){
    document.getElementById('AUTOREPEAT').innerHTML='AUTOREPEAT DISABLED!!!!';
    return false;
  }
  if(testotodo.charCodeAt(postodo)==keycode || ( testotodo.charAt(postodo)=="\n" && ( keycode==13 || (sptonl&&keycode==32) ) ) ){
    postodo++;
  }else{
    errori++;
  }
  printtodo();
  lastdown=currdown;
  lastpress=keycode;
  return false;
}
function on_body_keyup(event){
  keycode=(!event)?window.event.keyCode:event.which;
  if((!event)&&window.event.shiftKey)keycode=16;
  //db1=db1+'*'+keycode+' |'; document.getElementById('db1').innerHTML=db1;
  if(keycode==116 /*F5*/) return true;
  if(keycode==lastdown){
    lastpress=-1;
    lastdown=-1;
    document.getElementById('AUTOREPEAT').innerHTML='';
  }
/*  if(keycode==16) document.getElementById('SHIFT').style.color='black';
  if(keycode==17) document.getElementById('CTRL').style.color='black';
  if(keycode==18) document.getElementById('ALT').style.color='black'; */
  return false;
}
