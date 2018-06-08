var apiKey = "0bc20b61afd64962ab3b6a797448abb0";

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://www.bungie.net/platform//Destiny2/4/Account/4611686018470709327/Character/2305843009310267471/Stats/", true);
xhr.setRequestHeader( "X-API-Key", apiKey);

xhr.onreadystatechange = function(){

 if(this.readyState === 4 && this.status === 200){

  var json = JSON.parse(this.responseText);
  console.log(json);

 }



}

xhr.send();

/*
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://www.bungie.net/platform/Destiny2/SearchDestinyPlayer/-1/Zyenax%231565/", true);
xhttp.setRequestHeader('X-API-Key', 'MY KEY IS HERE');
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
// Typical action to be performed when the document is ready:
var data = JSON.parse(xhttp.responseText);
console.log(data);
}
};*/