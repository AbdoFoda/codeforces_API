function analyzeSubmissions(arr) {
    var out = "";
    var i;
    var acCount = 0, waCount = 0 , tleCount = 0,rteCount = 0, mleCount = 0;
    for(i = 0; i < arr.length; i++) {
        if( arr[i].verdict == "OK")
            acCount++;
        else if (arr[i].verdict == "WRONG_ANSWER")
            waCount++;
        else if (arr[i].verdict == "RUNTIME_ERROR")
            rteCount++;
        else if(arr[i].verdict == "TIME_LIMIT_EXCEEDED")
            tleCount++;
        else if(arr[i].verdict == "MEMORY_LIMIT_EXCEEDED")
            mleCount++;
    }
    out = "<table> <tr><th>AC</th><th>WA</th><th>RTE</th><th>TLE</th><th>MLE</th></tr><tr>" 
    out += "<td> "+ acCount +"</td>";
    out += "<td>" + waCount +"</td>";
    out += "<td>" + tleCount +"</td>";
    out += "<td>" + rteCount +"</td>";
    out += "<td>" + mleCount +"</td>";
    out += "</table>"   
    document.getElementById("result").innerHTML= out;
}
