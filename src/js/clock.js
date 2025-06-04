var span = document.getElementById('clock');

function time() {
  var dt = new Date();
  var h =  dt.getHours()
  var m = dt.getMinutes();
  if (m < 10) {
    var m = '0' + m;
  }
  var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');
  span.textContent = _time
}

setInterval(time, 1000);