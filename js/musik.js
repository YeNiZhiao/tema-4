$(document).ready(function () {

    $(".music").on("click", function () {
        console.log($(".player"));
        $(".player");
        $("#player").get(0).play();
        if (!$(".music").hasClass("mactive")) {
            $(".music").addClass("mactive");
            $(".music").removeClass("shadow-md");
            $(".music").addClass("shadow-lg");
            $(".music").removeClass("bg-primary");
            $(".music").addClass("bg-komponen");
            $(".music").removeClass("text-textPrimary");
            $(".music").addClass("text-textPrimary");
            $(".music-icon").addClass("fa-play");
            $(".music-icon").removeClass("fa-pause");



        }
        else {
            $(".music").removeClass("mactive");
            $(".music").removeClass("shadow-lg");
            $(".music").addClass("shadow-md");
            $(".music").removeClass("bg-komponen");
            $(".music").addClass("bg-primary");
            $(".music").removeClass("text-komponen");
            $(".music").addClass("text-textPrimary");
            $(".music-icon").addClass("fa-pause");
            $(".music-icon").removeClass("fa-play");
            $("#player").get(0).pause();
        }
    });
});

