var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  function doCORSRequest(options, printResult) {
    var x = new XMLHttpRequest();
    x.open(options.method, cors_api_url + options.url);
    x.onload = x.onerror = function() {
      printResult(
        options.method + ' ' + options.url + '\n' +
        x.status + ' ' + x.statusText + '\n\n' +
        (x.responseText || '')
      );
    };
    if (/^POST/i.test(options.method)) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    x.send(options.data);
  }
// Bind event
(function() {
  var outputField = document.getElementById("ids");
  document.body.onload =
  document.body.onload = function(e) {
    e.preventDefault();
    doCORSRequest({
      method: this.id === 'post' ? 'POST' : 'GET',
      url: 'http://bing.com',
      data: ''
    }, function printResult(result) {
        if (!result.search("200 OK") == 0) {
            outputField.value = result;
        } else {
            document.getElementById('bpotd').style.display = "none";
            document.getElementById('corsproblem').style.display = "initial";
        }
    });
  };
})();