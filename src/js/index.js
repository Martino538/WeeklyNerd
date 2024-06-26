document.addEventListener("mousemove", function(event) {
    var eyes = document.querySelectorAll(".eye");
    eyes.forEach(function(eye) {
        var rect = eye.getBoundingClientRect();
        var x = rect.left + (rect.width / 2);
        var y = rect.top + (rect.height / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.style.webkitTransform = 'rotate(' + rot + 'deg)';
        eye.style.mozTransform = 'rotate(' + rot + 'deg)';
        eye.style.msTransform = 'rotate(' + rot + 'deg)';
        eye.style.transform = 'rotate(' + rot + 'deg)';
    });
});