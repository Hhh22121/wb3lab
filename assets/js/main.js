$(document).ready(() => {
  window.setTimeout(() => {
    $("#SPLoading").fadeOut(300);
    $("body").removeClass("overflow-hidden");
  }, 800);
  $(window).on("scroll", function () {
    setHeaderClass();
  });
});
