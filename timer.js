var h = 0,
	m = 0,
	s = 0,
	timerBox = document.getElementById('timer'),
	start = document.querySelector('.start'),
	pause = document.querySelector('.pause'),
	stop = document.querySelector('.stop'),
	isPaused = false;

timerBox.innerHTML = h + ':' + m + ':' + s;

var timer = setInterval(function () {
	if (isPaused) {
		s++;
		if (s == 60) {
			m++;
			s = 0;
			s++;
		}
		else if (m == 60) {
			h++;
			m = 0;
			m++;
		} else if(h == 24) {
			h = 0;
			h++;
		}
		timerBox.innerHTML = h + ':' + m + ':' + s;
	}
}, 1000);

start.onclick = function() {
	isPaused = true;
};

pause.onclick = function() {
	isPaused = false;
};

stop.onclick = function() {
	clearInterval(timer);
};