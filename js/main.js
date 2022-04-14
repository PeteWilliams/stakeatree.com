document.addEventListener('DOMContentLoaded', function() {

    // Slow down video
    var video = document.getElementById("myVideo");
    video.playbackRate = 0.5;

    // Update Tree Nation values
    getJSON( 'https://tree-nation.com/api/forests/411749', function(status, data){
        document.getElementById('trees').innerHTML = data.tree_count;
        document.getElementById('carbon').innerHTML = data.co2_compensated;
    });  


}, false);



// Get Tree Nation JSON
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};