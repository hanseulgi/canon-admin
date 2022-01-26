var UI = UI || {};

UI.window = $(window);
UI.doc = $(document);
UI.body = $('body');

//modal
let open = function(el) {
    $(el).fadeIn();
}
let close = function(el) {
    $(el).fadeOut();
};

//file remove
UI.file  = function () {

    const $target = $('.table-edit .add-file-names').find('.name');

    $target.off("click").on("click", function() {
        $(this).hide();
    });

};

//textarea
UI.textarea  = function () {

    $('.comment-wrap textarea').off("keyup").on("keyup", function() {

        const $counter = $('.counter');
        let _target = $(this).val();
        let _max = _target.length;

        $counter.html(_max + ' <span>/ 200</span>');

        if ( _max >= 300 ) {
            console.log('글자 입력 수 초과')
        };

    });

};

//nav
UI.navToggle = function () {

    const $el =  $('.nav-toggle');
    const $target = $el.next('.nav');

    $el.off("click").on("click", function() {
        $(this).toggleClass('on');
        $target.toggleClass('on');
    });

};

//tableM
UI.tableM = function () {

    if ( $('.show-right').length == 0 ) {
        $('.show-top2').css('width','90%');
    } else {
        $('.show-top2').css('width','70%');
    }

};

//commentDel
UI.commentDel = function () {

    $('.comment-item').find('.del').off("click").on("click", function() {
        $(this).closest('.comment-item').hide();
    });

};

//dropDown
UI.dropDown = function () {

    $('.nav-menu > li > a').off("click").on("click", function(e) {

        e.preventDefault();

        $('.sub-menu').slideUp();
        $(this).next().slideDown();

    });

};

//search
UI.search = function () {

    $('.loop').each(function() {
        $(this).find('.ico-search').off("click").on("click", function() {

            let _class = 'plus';
            let _target= `<div class="loop">
                            <div class="select-wrap w130">
                                <select class="select">
                                    <option>전체</option>
                                    <option>ENG</option>
                                    <option>CHN</option>
                                </select>
                            </div>
                            <div class="input-wrap w370 ml6">
                                <input type="text" class="input">
                            </div>
                            <button type="button" class="ico-search ${_class}"><em class="blind">플러스 마이너스 아이콘</em></button>
                        </div>`

            if ( $(this).hasClass('plus') ) {
                $(this).removeClass('plus');
                $(this).addClass('minus');
                $('.add').append(_target);
            }

        });
    });

};

//datepicker
UI.datepicker = function () {
    $.datepicker.setDefaults({
        dateFormat: 'yy-mm-dd'
        ,showOtherMonths: true
        ,showMonthAfterYear:true
        ,yearSuffix: "년"
        ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12']
        ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        ,dayNamesMin: ['일','월','화','수','목','금','토']
        ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    });

    $( ".datepicker" ).datepicker();

    //skin
    $( ".datepicker" ).datepicker('widget').wrap('<div class="ll-skin-santiago"/>');

};

//sticky
UI.sticky = function () {

    const $target = $('.result-aside');
    const $foot = $('footer');
    const $top = 20;
    let _offsetTop = $target.offset().top - $top;
    let _offsetBottom = $foot.offset().top - ( $top*2 + $target.height() );

    $(window).scroll(function () {
        let _scrollTop = $(window).scrollTop();

        if ( _scrollTop > _offsetTop && $target.hasClass('default') ) {
            $target.removeClass('default').addClass('fixed').css('top', $top);
        }
        if ( _offsetTop > _scrollTop && $target.hasClass('fixed') ) {
            $target.removeClass('fixed').addClass('default').css('top', 'auto');
        }
        if ( _scrollTop > _offsetBottom && $target.hasClass('fixed') ) {
            $target.removeClass('fixed').css('top', _offsetBottom + $top);
        }
        if ( _offsetBottom > _scrollTop && $target.hasClass('bottom') ) {
            $target.addClass('fixed').css('top', $top);
        }
    });

};

UI.init = function(){
    UI.navToggle();
    UI.dropDown();
    UI.search();
    UI.file();
    UI.textarea();
    UI.commentDel();
    UI.datepicker();
    UI.tableM();
    UI.sticky();
};

//init
(function(){
    UI.init();
})();
