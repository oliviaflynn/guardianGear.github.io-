var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://www.bungie.net/platform//Destiny2/4/Account/4611686018470709327/Character/2305843009310267471/Stats/");
xhr.setRequestHeader("X-API-KEY", "0bc20b61afd64962ab3b6a797448abb0");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "815f6c9d-cdf2-454d-89e1-f0cd82150064");

xhr.send(data);