// alert("Hello");
$(".weekly").hide();
$(".monthly").hide();

$("#daily").on("click", function () {
    $(".daily").show();
    $(".weekly").hide();
    $(".monthly").hide();
});

$("#weekly").on("click", function () {
    $(".daily").hide();
    $(".weekly").show();
    $(".monthly").hide();
});

$("#monthly").on("click", function () {
    $(".daily").hide();
    $(".weekly").hide();
    $(".monthly").show();

});