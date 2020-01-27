(function(a) {
    a.fn.UItoTop = function(d) {
        var f = {
                text: "To Top",
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: "toTop",
                containerHoverID: "toTopHover",
                scrollSpeed: 1000,
                easingType: "linear"
            },
            e = a.extend(f, d),
            c = "#" + e.containerID,
            b = "#" + e.containerHoverID;
        a("body").append('<a href="#" id="' + e.containerID + '">' + e.text + "</a>");
        a(c).hide().on("click.UItoTop", function() {
            a("html, body").animate({
                scrollTop: 0
            }, e.scrollSpeed, e.easingType);
            a("#" + e.containerHoverID, this).stop().animate({
                opacity: 0
            }, e.inDelay, e.easingType);
            return !1
        }).prepend('<span id="' + e.containerHoverID + '"></span>').hover(function() {
            a(b, this).stop().animate({
                opacity: 1
            }, 600, "linear")
        }, function() {
            a(b, this).stop().animate({
                opacity: 0
            }, 700, "linear")
        });
        a(window).scroll(function() {
            var g = a(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") {
                a(c).css({
                    position: "absolute",
                    top: g + a(window).height() - 50
                })
            }
            if (g > e.min) {
                a(c).fadeIn(e.inDelay)
            } else {
                a(c).fadeOut(e.Outdelay)
            }
        })
    }
})(jQuery);