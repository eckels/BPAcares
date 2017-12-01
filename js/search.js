$(document).ready(function() {
  $('.smooth-scroll').smoothScroll();
  var searchresults
  $(document).keyup(function() {
    searchresults = document.getElementById('search').value;
    searchresults.toLowerCase();
    console.log(searchresults);

    var w = 0;
    while (w < 18) {
      document.getElementsByClassName('award-link')[w].style.display = "none";
      w++;
    }

    var q = 0;
    while (q < 18) {
      var match = document.getElementsByClassName('award-link')[q].id;
      match = match.toLowerCase();
      console.log(match);
      console.log(searchresults);
      if (match.includes(searchresults)) {
        document.getElementsByClassName('award-link')[q].style.display = "inline-block";
      }
      q++;
    }

    if (searchresults !== "") {
      var ii = 0;
      while (ii < 3) {
        document.getElementsByClassName('wide')[ii].style.display = "none";
        ii++;
      }
    }

    if (searchresults == "") {
      var i = 0;
      while (i < 3) {
        document.getElementsByClassName('wide')[i].style.display = "inline-block";
        i++;
      }
    }

  });
});
