$(document).ready(function () {
  // get content
  $.getJSON("assets/js/content.json", function (data) {
    let profile = data[0];
    // typing animate
    $(".typing").each(function () {
      var typed = new Typed(this, {
        strings: profile.profession,
        typeSpeed: 100,
        BackSpeed: 60,
        loop: true,
      });
    });
    // set profile
    $("#profile-name").text(profile.nama);
    $("#profile-profession").text(profile.profession);
    $("#profile-description").text(profile.description);
    $("#profile-image").attr("src", profile.image);
    $("#profile-resume").attr("href", profile.resume);
  });
});
