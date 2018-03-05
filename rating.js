function ratingChange(changes) {
	var ret="<table><tr><th>contest name</th><th>rank</th><th>old rate</th><th>new rate</th></tr>";
	for(var i=0;i<changes.length;++i){
		ret+="<tr>";
		ret+="<td>"+changes[i].contestName+"</td>";
		ret+="<td>"+changes[i].rank+"</td>";
		ret+="<td>"+changes[i].oldRating+"</td>";
		ret+="<td>"+changes[i].newRating+"</td>";
		ret+="</tr>"
	}
	ret+="</table>";	
	document.getElementById("result").innerHTML= ret;
}

