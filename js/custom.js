$(document).ready(function() {
  $(".btn-condensed-view").click(function() {
    $(".reset-selection a").removeClass("active");
    $(this).addClass("active");
    $(".job-boards").addClass("condensed-view");
    $(".job-boards").removeClass("list-view");
    if ($(".job-boards").hasClass("col-sm-3")) {
    } else {
      $(".job-boards").addClass("col-sm-3");
    }
    $(".job-boards").removeClass("col-sm-12");
  });
  $(".btn-list-view").click(function() {
    $(".reset-selection a").removeClass("active");
    $(this).addClass("active");
    $(".job-boards").removeClass("condensed-view");
    $(".job-boards").addClass("list-view");
    $(".job-boards").removeClass("col-sm-3");
    $(".job-boards").addClass("col-sm-12");
  });
  $(".btn-card-view").click(function() {
    $(".reset-selection a").removeClass("active");
    $(this).addClass("active");
    $(".job-boards").removeClass("list-view");
    $(".job-boards").removeClass("condensed-view");
    if ($(".job-boards").hasClass("col-sm-3")) {
    } else {
      $(".job-boards").addClass("col-sm-3");
    }
    $(".job-boards").removeClass("col-sm-12");
  });

  $("#slider").slider({
    range: true,
    min: 0,
    max: 500,
    values: [0, 500],
    slide: function(event, ui) {
      $(".amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $(".amount").text(
    "$" +
      $("#slider").slider("values", 0) +
      " - $" +
      $("#slider").slider("values", 1)
  );

  $('.boards').click(function(){
    $(this).toggleClass('selected');
  });
  $('.btn-create-group').click(function(){
    $('.add-group').show();
    $('.filter-bar').addClass('add-group-visible');
  });
});
