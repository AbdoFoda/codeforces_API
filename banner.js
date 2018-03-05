function addToBanner(func,handle,val) {
    var ret="<td> <input type=\'button\' onclick=\"javascript:"+func+"(\'"+handle+"\');\" "+
     "value=\'"+val+"\'> </td>";
   	document.getElementById("banner").innerHTML+= ret;
}