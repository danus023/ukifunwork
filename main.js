SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4';
});

$(document).ready(function() {
  SC.stream('/tracks/173826641', function(song) {
    $('#p1').click(function() {
      e.preventDefault();
      song.start();
    });
    $('#pu1').click(function() {
        e.preventDefault();
        song.pause();
    });
    $('#s1').click(function() {
      e.preventDefault();
      song.stop();
    });
  });
});
