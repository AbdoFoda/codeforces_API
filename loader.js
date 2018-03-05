function loadDoc(url, cFunction) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText).result;
          cFunction(myArr);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function Loading() {
  document.getElementById("result").innerHTML="Loading ...";
}
function info(handle){
   Loading();
   var url = "http://codeforces.com/api/user.info?handles=" + handle;
   loadDoc(url,getUserInfo); 
}
          

function submissions(handle){
    Loading();
    var url = "http://codeforces.com/api/user.status?handle=" + handle;
    loadDoc(url,analyzeSubmissions);
}

function rating(handle) {
    Loading();
    var url= "http://codeforces.com/api/user.rating?handle=" + handle;
    loadDoc(url,ratingChange);

}
function contest() {
    Loading();
    var url= "http://codeforces.com/api/contest.list?gym=false";
    loadDoc(url,showUpComingContests);
}
function problemFinder(){
    Loading();
    var tags = document.getElementById("category").value;
    var url= "http://codeforces.com/api/problemset.problems?tags=" + tags;
    loadDoc(url,getProblemsByTag);
}