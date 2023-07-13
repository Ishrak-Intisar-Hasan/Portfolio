window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 0";
    document.getElementById("navbar").style.backgroundColor = "#2423238c";
  } else {
    document.getElementById("navbar").style.padding = "30px 0";
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}