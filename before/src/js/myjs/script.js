$("#resetAddress").on("click", function() {
    var gosVal = $("#gos").val();
    var onsVal = $("#ons").val();
    // console.log(1)
    $("#gos").val(onsVal);
    $("#ons").val(gosVal)

})

$("#btn").on("click", function() {
    // console.log(11)
    location.href = "html/detail.html"
})