function showUpComingContests(contests) {
	var ret="<table><tr><th>contest name</th><th>contest duration</th><th>remaining time</th></tr>";
	var secondsPerHour = 60 * 60;
	var secondsPerMinute = 60;
	var i;
	for(i=0;i<contests.length;++i){
		if(contests[i].phase!="BEFORE")
			break;

		ret+="<tr>";
		ret+="<td>"+contests[i].name+"</td>";

		var dur_hours = parseInt(contests[i].durationSeconds/secondsPerHour);
		var dur_min =   parseInt((contests[i].durationSeconds%secondsPerHour)/secondsPerMinute);

		var rem_hours = parseInt(-contests[i].relativeTimeSeconds/secondsPerHour);
		var rem_minutes =parseInt( (-contests[i].relativeTimeSeconds%secondsPerHour)/secondsPerMinute);

		ret+="<td>"+ dur_hours+" hr , "+dur_min +"minutes" +"</td>";
		ret+="<td>"+ rem_hours+ "hr ," + rem_minutes+"minutes" + "</td>";

		ret+="</tr>"
	}
	if(i==0){
		ret="<p> NO UPCOMING CONTESTS! </p>";
		document.getElementById("result").innerHTML = ret;
	}else{
		ret+="</table>";
		document.getElementById("result").innerHTML = ret;
	}
}