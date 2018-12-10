
///////////////PARRALAX/////////////////////
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
/////////////END PARRALAX////////////////////

////////////snowlake.js//////////////////////
$(window).scroll(function () {
    
    totalDepth = $("body").scrollTop() + $(window).height();
        $("#snowflakeContainer").css({ 'top': totalDepth * 3.1 });
});
////////end snowflake.js//////////////////////

////////////greensock clouds//////////////////////
var windowwidth = $(window).width(); 
var stalkAnim = new TimelineMax({ repeat: -1 });
stalkAnim.fromTo('#cloud1', 3, { left: -300, ease: Power0.easeNone, delay: 0, scale: 0.7 }, { left: windowwidth, ease: Power0.easeNone });


////////////end greensock clouds//////////////////////