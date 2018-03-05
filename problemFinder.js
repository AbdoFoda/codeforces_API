function getProblemsByTag(res){
    var problems = res.problems;
    if(problems.length==0) {
        document.getElementById("result").innerHTML = "NO problems found with this tag";
        return ;
    }
    var ret="<table><tr><th>problem index</th><th>problem name</th><th>tags</th></tr>";
    for(i = 0; i < problems.length && i < 100 ;++i) {
        var index = problems[i].index;
        var problemName = problems[i].name;
        var tags  = problems[i].tags;

        ret+="<tr>";
        ret+="<td>"+index+"</td>";
        ret+="<td>"+problemName+"</td>";
        ret+="<td>"+tags+"</td>";
        ret+="</tr>"
    }
    document.getElementById("result").innerHTML = ret;
}