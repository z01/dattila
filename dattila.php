<html>
  <head>
    <title>Dattilografia</title>
    <script src='res/tasti.js'></script>
    <script src='res/schermo.js'></script>
  </head>
  <body onkeydown="return on_body_keydown(event)" onkeyup="return on_body_keyup(event)" onkeypress="return on_body_keypress(event)">
<!--    debug1:<div id='db1'></div><br>
debug2:<div id='db2'></div><br> -->
    errori:<div id='errori'></div><br>
<?php
  if(isset($_REQUEST['testo'])){
    echo '<script>testotodo="'.str_replace("\n",'\n',str_replace("\r","",$_REQUEST['testo'])).'";</script>';
  }else{
    echo '<script>testotodo="ciao a\ntutti";</script>';
  }
?>
  <table>
<tr>
<td><pre><div id='testo'></div></pre></td>
</tr></table>
  <script>printtodo();</script>

  <div id='SHIFT'>SHIFT</div>
  <div id='CTRL'>CTRL</div>
  <div id='ALT'>ALT</div>
  <div style='color:red' id='AUTOREPEAT'></div>

<!--  <pre>
  <script>
    for (var i=0;i<12555;i++){
	if(!(i%50))document.write("\n"+i+":- ");
      document.write('&#'+i+'; ');
    }
  </script>
</pre>-->

</body>
</html>
