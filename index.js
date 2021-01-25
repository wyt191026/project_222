window.addEventListener('load', function () {
    var h1 = document.querySelector('h1')
    h1.addEventListener('mousedown', function (e) {
        var x = e.pageX - h1.offsetLeft
        var y = e.pageY - h1.offsetTop
        console.log(x);
        console.log(y);
        h1.addEventListener('mousemove',move)
        function move(e) {
            var X = e.pageX - x
            var Y = e.pageY - y
            h1.style.left = X + 'px'
            h1.style.top = Y + 'px'
        }
        h1.addEventListener('mouseup', function (e) {
            h1.removeEventListener('mousemove',move)
        })
    })
})