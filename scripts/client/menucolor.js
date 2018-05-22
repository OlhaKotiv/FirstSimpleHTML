//**********menu's change color**********//
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    document.getElementById('headerTop').style.backgroundColor= scrolled==0?"":"#edecf2";
  }
  