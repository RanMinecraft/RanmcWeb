(function($) {
    "use strict";

    $("#js-rotating").Morphext({
        animation: "fadeIn",
        separator: ",",
        speed: 2000,
        complete: function () {}
    });
    
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false, /* keep it false to avoid html tag shift with margin-right: 17px */
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });
    
    $('.filters-button-group').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // 修复手机端卡牌都堆叠在一起问题 分辨率大小变化的时候刷新ui
    $(window).on('resize', function() {
      $grid.isotope('layout');
    });
    
})(jQuery);