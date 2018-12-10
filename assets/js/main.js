// icons change scroll speed
$.fn.moveIt = function () {
    var $window = $(window);
    var instances = [];
    $(this).each(function () {
        instances.push(new moveItItem($(this)));
    });
    window.addEventListener('scroll', function () {
        var scrollTop = $window.scrollTop();
        instances.forEach(function (inst) {
            inst.update(scrollTop);
        });
    }, { passive: true });
}
var moveItItem = function (el) {
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
};
moveItItem.prototype.update = function (scrollTop) {
    this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};
// Initialization
$(function () {
    $('[data-scroll-speed]').moveIt();
});



$(window).scroll(function () {
    truckPos = $(".thetruck").offset().top - $(".thetruck").height();
    totalDepth = $("body").scrollTop() + $(window).height();
        $("#snowflakeContainer").css({ 'top': totalDepth * 3.1 });
});