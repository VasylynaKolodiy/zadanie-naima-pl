const animTop = document.querySelectorAll(".anim-top");

animTop.forEach((section) => {
    gsap.from(section.children, {
        y: "+=70",
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: section,
            start: "-150% 20%",
            // markers: true,
            toggleActions: "play reverse play none",
        },
    });
});

const animTop2 = document.querySelectorAll(".anim-top2");

animTop2.forEach((section) => {
    gsap.from(section.children, {
        y: "+=70",
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: 0.4,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".anim-top2",
            start: "-195% 20%",
            //  markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const animBottom = document.querySelectorAll(".anim-bottom");

animBottom.forEach((section) => {
    gsap.from(section.children, {
        y: "-=70",
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: section,
            start: "-710% 20%",
            // markers: true,
            toggleActions: "play reverse play none",
        },
    });
});

const animBottom2 = document.querySelectorAll(".anim-bottom2");

animBottom2.forEach((section) => {
    gsap.from(section.children, {
        y: "-=70",
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".anim-bottom2",
            start: "-190% 20%",
            // markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const scale = document.querySelectorAll(".anim-scale");

scale.forEach((section) => {
    gsap.from(section.children, {
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        ease: "easeInOut",
        scale: 0.7,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".anim-scale",
            start: "-80% 20%",
            //  markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const animLeft = document.querySelectorAll(".anim-left");

animLeft.forEach((section) => {
    gsap.from(section.children, {
        x: "-=70",
        opacity: 0,
        stagger: 0.2,
        duration: 0.4,
        // delay: 0.2,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: section,
            start: "-380% 20%",
            // markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const animLeft2 = document.querySelectorAll(".anim-left2");

animLeft2.forEach((section) => {
    gsap.from(section.children, {
        x: "-=70",
        opacity: 0,
        stagger: 0.2,
        duration: 0.6,

        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".anim-left2",
            start: "-450% 20%",
            // markers: true,
            toggleActions: "play reverse play none",
        },
    });
});

const animLeft3 = document.querySelectorAll(".anim-left3");

animLeft3.forEach((section) => {
    gsap.from(section.children, {
        x: "-=70",
        opacity: 0,
        stagger: 0.4,
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".anim-left3",
            start: "-85% 20%",
            // markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const animRight = document.querySelectorAll(".anim-right");

animRight.forEach((section) => {
    gsap.from(section.children, {
        x: "+=70",
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        delay: 0.2,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".anim-right",
            start: "-85% 20%",
            // markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

const icons = document.querySelectorAll(".animIcons");

icons.forEach((icon) => {
    gsap.from(icon.children, {
        y: "-=70",
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "easeInOut",
        scrollTrigger: {
            trigger: ".animIcons",
            start: "-50% 20%",
            // markers: true,
            toggleActions: "play none  reverse none",
        },
    });
});

// show full img
$(".showImg").click(function () {
    var src = $(this).attr("data-src");
    currentFullImg = parseInt($(this).attr("data-id"));
    $("#fullscreen").addClass("active");
    $("#fullscreen iframe").removeClass("active");
    $("#fullscreen img").addClass("active");
    $("#fullscreen img").attr("src", src);
    $(".nav-btn").css("display", "none");
    $(".close").css("display", "block");
});

$("#fullscreen .close").click(function () {
    // var src = $(this).attr('data-src');
    // currentFullImg = parseInt($(this).attr('data-id'));
    $("#fullscreen").removeClass("active");
    // $('#fullscreen iframe').removeClass('active');
    // $('#fullscreen img').addClass('active');
    // $('#fullscreen img').attr('src', src);
    // $('.nav-btn').css('display', 'none');
    console.log("klikkk");
    // $('.close').css('display', 'block');
});


var curImg = 0;
var length = $("#roller .imgShow").length;
var navPrev = $(".gallery-nav-prev");
var navNext = $(".gallery-nav-next");

function changeImg(dir) {
    if (dir == 0) {
        curImg--;
    }
    if (dir == 1) {
        curImg++;
    }
    if (curImg < 1) {
        curImg = length;
    }
    if (curImg === 1) {
        navPrev.addClass("hidden");
    } else {
        navPrev.removeClass("hidden");
    }
    if (curImg === length) {
        navNext.addClass("hidden");
    } else {
        navNext.removeClass("hidden");
    }

    const el = $("#roller img:eq(" + (curImg - 1) + ")");
    el.addClass("active");

    if ($(window).width() >= 1600) {
        $("#roller").css("left", -curImg * 65 + 65 + "vw");
    }
        // else if ($(window).width() >= 1300) {
        //   $("#roller").css("left", -curImg * 100 + 100 + "%");
        // } else if ($(window).width() >= 1024) {
        //   $("#roller").css("left", -curImg * 100 + 100 + "%");
        // }
        // else {
        //   $("#roller").css("left", -curImg * 1166 + 1166 + "px");
    // }
    else {
        $("#roller").css("left", -curImg * 65 + 65 + "vw");
    }
}
changeImg(1);
var imgs = [];
$("#roller .imgShow").each(function () {
    imgs.push($(this).attr("data-src"));
});

var currentFullImg = 0;

$(".imgShow").click(function () {
    var src = $(this).attr("data-src");
    $(".fullGallery").addClass("active");
    $(".fullGallery .imgFullGallery").addClass("active");
    $(".fullGallery .imgFullGallery").attr("src", src);

    currentFullImg = parseInt($(this).attr("data-id"));
});
$(".close-btn").click(function () {
    $(".fullGallery").removeClass("active");
    setTimeout(function () {
        $(".full-img").css("background-image", "");
    }, 300);
});

function changeFullImg(direction) {
    direction ? currentFullImg++ : currentFullImg--;
    if (currentFullImg >= imgs.length) currentFullImg = 0;
    if (currentFullImg < 0) currentFullImg = imgs.length - 1;
    getNewImg(currentFullImg);
}

function getNewImg(index) {
    $(".fullGallery .imgFullGallery").attr("src", imgs[index]);
}

$(".imgShow1").click(function () {
    var src = $(this).attr("data-src");
    $(".fullGallery1").addClass("active");
    $(".fullGallery1 .imgFullGallery").addClass("active");
    $(".fullGallery1 .imgFullGallery").attr("src", src);

    currentFullImg = parseInt($(this).attr("data-id"));
});
$(".close-btn").click(function () {
    $(".fullGallery1").removeClass("active");
    setTimeout(function () {
        $(".full-img").css("background-image", "");
    }, 300);
});


function loading() {
    $("#loading").addClass("hidden");
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("header").addClass("active");
    } else {
        $("header").removeClass("active");
    }
});

$("#menu-btn").click(function () {
    $("nav").toggleClass("active");
    $("#menu-btn").toggleClass("active");
});

// $("#menu-main-menu li a").click(function () {
//   $("nav").toggleClass("active");
//   $("#menu-btn").toggleClass("active");
// });

$(".nav-container div ul li a").click(function () {
    $("nav").toggleClass("active");
    $("#menu-btn").toggleClass("active");
});


