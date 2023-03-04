!function(e){"use strict";function t(e,t){return void 0!==e?e:t}e(document).on("ready",function(){window.vcexHovers(),window.vcexResponsiveCSS(),window.vcexResponsiveText(),window.vcexCarousels(),window.vcexCountDown(),window.vcexAnimatedText(),window.vcexSkillbar(),window.vcexIsotopeGrids(),window.vcexNavbarFilterLinks(),window.vcexNavbarMobileSelect()}),e(window).on("load",function(){window.vcexBeforeAfter(),window.vcexMilestone(),window.vcexStickyNavbar()}),e(window).resize(function(){window.vcexResponsiveText()}),e(window).on("orientationchange",function(){window.vcexIsotopeGrids(),window.vcexNavbarFilterLinks()});var i=!1;"undefined"!=typeof wpexLocalize&&(i=wpexLocalize.isRTL),"function"!=typeof window.vcexResponsiveText&&(window.vcexResponsiveText=function(i){e(".wpex-responsive-txt").each(function(){var i=e(this),a=i.width(),n=i.data(),o=t(n.minFontSize,13),s=t(n.maxFontSize,40),c=a/t(n.responsiveTextRatio,10),r=c>s?s:c<o?o:c;i.css("font-size",r+"px")})}),"function"!=typeof window.vcexHovers&&(window.vcexHovers=function(t){var i="",a={};e(".wpex-hover-data").remove(),e("[data-wpex-hover]").each(function(t,i){var n=e(this),o=n.data("wpex-hover"),s="wpex-dhover-"+t,c="",r="";o.parent?(n.parents(o.parent).addClass(s+"-p"),n.addClass(s),r="."+s+"-p:hover ."+s):(n.addClass(s),r="."+s+":hover"),e.each(o,function(e,t){if("target"==e)return!0;c+=e+":"+t+"!important;"}),c&&(a[c]=c in a?a[c]+","+r:r)}),a&&e.each(a,function(e,t){i+=t+"{"+e+"}"}),i&&e("head").append('<style class="wpex-hover-data">'+i+"</style>")}),"function"!=typeof window.vcexResponsiveCSS&&(window.vcexResponsiveCSS=function(t){var i="",a={},n={};e(".wpex-vc-rcss").remove(),n.d="",n="undefined"!=typeof wpexLocalize?e.extend(n,wpexLocalize.responsiveDataBreakpoints):{tl:"1024px",tp:"959px",pl:"767px",pp:"479px"},e.each(n,function(e){a[e]=""}),e("[data-wpex-rcss]").each(function(t,i){var o=e(this),s="wpex-rcss-"+t,c=o.data("wpex-rcss");o.addClass(s),e.each(c,function(t,i){var o=i,c=t;e.each(n,function(e){o[e]&&(a[e]+="."+s+"{"+c+":"+o[e]+"!important;}")})})}),e.each(a,function(e,t){"d"==e?i+=t:t&&(i+="@media(max-width:"+n[e]+"){"+t+"}")}),i&&(i='<style class="wpex-vc-rcss">'+i+"</style>",e("head").append(i))}),"function"!=typeof window.vcexCarousels&&(window.vcexCarousels=function(t){void 0!==e.fn.wpexOwlCarousel&&void 0!==e.fn.imagesLoaded&&e(".wpex-carousel",t).each(function(){var t=e(this),a=t.data("wpex-carousel");if(a){var n={animateIn:!1,animateOut:!1,lazyLoad:!1,autoplayHoverPause:!0,rtl:!!i,navText:['<span class="ticon ticon-chevron-left" aria-hidden="true"></span><span class="screen-reader-text">'+wpexCarousel.i18n.PREV+"</span>",'<span class="ticon ticon-chevron-right" aria-hidden="true"></span><span class="screen-reader-text">'+wpexCarousel.i18n.NEXT+"</span>"],responsive:{0:{items:a.itemsMobilePortrait},480:{items:a.itemsMobileLandscape},768:{items:a.itemsTablet},960:{items:a.items}}};t.imagesLoaded(function(){t.wpexOwlCarousel(e.extend(!0,{},n,a))})}else console.log("Total Notice: The Carousel template in your child theme needs updating to include wpex-carousel data attribute.")})}),"function"!=typeof window.vcexCountDown&&(window.vcexCountDown=function(t){void 0!==e.fn.countdown&&e(".vcex-countdown",t).each(function(){var t=e(this),i=t.data("countdown"),a=t.data("days"),n=t.data("hours"),o=t.data("minutes"),s=t.data("seconds"),c=t.data("timezone");c&&void 0!==moment.tz&&e.isFunction(moment.tz)&&(i=moment.tz(i,c).toDate()),i&&t.countdown(i,function(e){t.html(e.strftime('<div class="wpex-days"><span>%-D</span> <small>'+a+'</small></div> <div class="wpex-hours"><span>%-H</span> <small>'+n+'</small></div class="wpex-months"> <div class="wpex-minutes"><span>%-M</span> <small>'+o+'</small></div> <div class="wpex-seconds"><span>%-S</span> <small>'+s+"</small></div>"))})})}),"function"!=typeof window.vcexAnimatedText&&(window.vcexAnimatedText=function(t){"function"==typeof Typed&&void 0!==e.fn.appear&&e(".vcex-typed-text",t).each(function(){var t=e(this),i=t.data("settings");t.appear(function(){i.typeSpeed=parseInt(i.typeSpeed),i.backDelay=parseInt(i.backDelay),i.backSpeed=parseInt(i.backSpeed),i.startDelay=parseInt(i.startDelay),i.strings=t.data("strings");new Typed(this,i)})})}),"function"!=typeof window.vcexMilestone&&(window.vcexMilestone=function(t){"function"==typeof CountUp&&void 0!==e.fn.appear&&e(".vcex-countup",t).each(function(){var t=e(this),i=t.data("options"),a=i.startVal,n=i.endVal,o=i.decimals,s=i.duration,c={useEasing:!0,useGrouping:!0,separator:i.separator,decimal:i.decimal,prefix:"",suffix:""},r=new CountUp(this,a,n,o,s,c);t.appear(function(){r.start()})})}),"function"!=typeof window.vcexSkillbar&&(window.vcexSkillbar=function(t){void 0!==e.fn.appear&&e(".vcex-skillbar",t).each(function(){var t=e(this);t.appear(function(){t.find(".vcex-skillbar-bar").animate({width:e(this).attr("data-percent")},800)})},{accX:0,accY:0})}),"function"!=typeof window.vcexBeforeAfter&&(window.vcexBeforeAfter=function(t){void 0!==e.fn.twentytwenty&&e(".vcex-image-ba",t).each(function(){var t=e(this);t.twentytwenty(t.data("options"))})}),"function"!=typeof window.vcexIsotopeGrids&&(window.vcexIsotopeGrids=function(){void 0!==e.fn.imagesLoaded&&void 0!==e.fn.isotope&&e(".vcex-isotope-grid").each(function(){var t=e(this);t.imagesLoaded(function(){var a,n=t.prev("ul.vcex-filter-links");if(n.length){var o=n.find("a");(a=t.data("filter"))&&!n.find('[data-filter="'+a+'"]').length&&(a=""),o.click(function(){return s.isotope({filter:e(this).attr("data-filter")}),e(this).parents("ul").find("li").removeClass("active"),e(this).parent("li").addClass("active"),!1})}var s=t.isotope({itemSelector:".vcex-isotope-entry",transformsEnabled:!0,isOriginLeft:!i,transitionDuration:t.data("transition-duration")?t.data("transition-duration")+"s":"0.4s",layoutMode:t.data("layout-mode")?t.data("layout-mode"):"masonry",filter:a})})})}),"function"!=typeof window.vcexNavbarFilterLinks&&(window.vcexNavbarFilterLinks=function(t){void 0!==e.fn.imagesLoaded&&void 0!==e.fn.isotope&&e(".vcex-filter-nav",t).each(function(){var t,a=e(this),n=e("#"+a.data("filter-grid"));n.hasClass("wpex-row")||(n=n.find(".wpex-row")),n.length&&(n.removeClass("vcex-isotope-grid"),n.imagesLoaded(function(){if(n.hasClass("vcex-navbar-filter-grid"))t=n.isotope();else{n.addClass("vcex-navbar-filter-grid");var o=a.data("filter");o&&!a.find('[data-filter="'+o+'"]').length&&(o=""),t=n.isotope({itemSelector:".col",transformsEnabled:!0,isOriginLeft:!i,transitionDuration:a.data("transition-duration")?a.data("transition-duration")+"s":"0.4s",layoutMode:a.data("layout-mode")?a.data("layout-mode"):"masonry",filter:o})}var s=a.find("a");s.click(function(){var i=e(this);return t.isotope({filter:e(this).attr("data-filter")}),s.removeClass("active"),i.addClass("active"),!1})}))})}),"function"!=typeof window.vcexStickyNavbar&&(window.vcexStickyNavbar=function(t){var i=e(".vcex-navbar-sticky"),a=e(window);a.scrollTop();i.length&&i.each(function(){var t=e(this),i=!1,n=t.data("sticky-endpoint")?e(t.data("sticky-endpoint")):"",o=e('<div class="vcex-navbar-sticky-wrapper not-sticky"></div>');function s(){var i=0,a="";if(a=t.data("vcex-sticky-offset-items")?t.data("vcex-sticky-offset-items"):"#top-bar-wrap-sticky-wrapper.wpex-can-sticky,#site-header-sticky-wrapper.wpex-can-sticky #site-header,#site-navigation-sticky-wrapper.wpex-can-sticky,#wpex-mobile-menu-fixed-top,#wpadminbar")return a=a.split(","),e.each(a,function(t,a){var n=e(a);n.is(":visible")&&(i=parseInt(i)+parseInt(n.outerHeight()))}),i}function c(){i&&(o.css("height","").removeClass("is-sticky").addClass("not-sticky"),t.css({width:"",top:""}),i=!1)}function r(){var a,r=e(window).scrollTop(),d=s();r>o.offset().top-d&&0!==r?(a=d,t.is(":visible")?i?t.css({top:s()}):(o.css("height",t.outerHeight()).removeClass("not-sticky").addClass("is-sticky"),t.css({top:a,width:o.width()}),i=!0):c(),n.length&&n.is(":visible")&&(r>n.offset().top-d-t.outerHeight()?o.addClass("sticky-hidden"):o.removeClass("sticky-hidden"))):c()}t.wrapAll(o),o=t.parent(".vcex-navbar-sticky-wrapper"),r(),a.scroll(function(){r()}),a.resize(function(){r(),i?(t.is(":visible")||c(),o.css("height",t.outerHeight()),t.css({top:s(),width:o.width()})):r()}),a.on("orientationchange",function(e){c(),r()})})}),"function"!=typeof window.vcexNavbarMobileSelect&&(window.vcexNavbarMobileSelect=function(t){var i=e(".vcex-navbar-mobile-select");i.length&&i.each(function(){var t=e(this),i=e(this).find("select"),a=t.parent(".vcex-navbar").find(".vcex-navbar-inner");i.change(function(){var t=e(this).val();t&&a.find('a[href="'+t+'"]').get(0).click()})})})}(jQuery);