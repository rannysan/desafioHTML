// Habilitando favoritos

var el = document.getElementById('lista');
el.addEventListener('click', function(e) {
    var myImage = e.target;
        var mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/starBlack.png') {
          myImage.setAttribute ('src','images/starColor.png');
        } else {
          myImage.setAttribute ('src','images/starBlack.png');
        }
});