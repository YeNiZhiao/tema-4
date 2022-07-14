$(document).ready(function () {
    Swal.fire({
        title: 'Nama Anda',
        input: 'text',
        inputAttributes: {
            autocapitalize: 'off'
        },
        showCancelButton: false,
        confirmButtonText: 'Kirim',
        preConfirm: (nama) => {
            $(".nama").html(nama);
            AOS.init();
        }
    })


    var buka = document.querySelector(".buka");
    buka.addEventListener("click", function () {
        $(".cover").addClass("hilang");
        $('.fade-left').addClass("oke");
        $("#player").get(0).play();
        document.getElementById('player').muted = false;
    })
    // burger
    $(".burger-button").on("click", function () {
        $(".nav").toggleClass("tampil");
        $(".burger").toggleClass("fa-times")
        $(".burger").toggleClass("fa-bars")
    })
    // save the date
    // $(".simpan").on("click", function () {
    //     console.log($('.tanggal').html());
    //     $('.tanggal').select();
    //     navigator.clipboard.writeText($('.tanggal').html())
    //     alert("Tanggal telah disalin")
    // })
    $('.page-scroll').on('click', function (e) {
        //ambil isi href
        var tujuan = $(this).attr('href')
        //tangkap elemen ybs
        console.log(tujuan)
        var elementTujuan = $(tujuan);
        console.log(elementTujuan)
        //pindahkan scroll
        $("html,body").animate({
            scrollTop: elementTujuan.offset().top
        }, 1000, 'swing');
        e.preventDefault();
    });

});



