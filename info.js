  function getUserInfo(users){
        var out = "";
        if(users.length > 0){
            var handle = users[0].handle;
            var rate = users[0].rating;
            var maxRate = users[0].maxRating;
            out ="<table> <tr><th>Handle</th><th>Rate</th><th>Max Rate</th></tr><tr>" 
            out += "<td> "+ handle +"</td>";
            out += "<td>" + rate +"</td>";
            out += "<td>" + maxRate +"</td>";
            out += "</table>" 
            document.getElementById("result").innerHTML= out;
        }
}