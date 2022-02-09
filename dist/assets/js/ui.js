var UI = UI || {};

UI.window = $(window);
UI.doc = $(document);
UI.body = $('body');


//modal
UI.modal = (function () {

    return {
        open : function(el) {
            $(el).fadeIn();
        },
        close : function(el) {
            $(el).fadeOut();
        }
    }

})();

//file remove
UI.file = function () {

    const $target = $('.table-edit .add-file-names').find('.ico-cancel');

    $target.off("click").on("click", function() {
        $(this).closest('.file').hide();
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

//navToggle
UI.navToggle = function () {

    const $el =  $('.nav-toggle');
    const $target = $el.next('.nav');

    $el.off("click").on("click", function() {
        $(this).toggleClass('on');
        $target.toggleClass('on');

        if ( $(this).hasClass('on') ){
            $('.wrap').addClass('fixed');
        } else {
            $('.wrap').removeClass('fixed');
        }
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

//통합검색 mobile
UI.searchSelect  = function () {

    var winW = $(window).width();

    if ( winW < 1024 ) {    //모바일 ver일때만
        $('.result-aside').find('.tit').on("click", function() {
            $(this).next().toggle();
        });

        $("body").click(function(e) {
            if( !$(".box-white").has(e.target).length ) {
                $('.result-aside').find('dd:not(.first)').hide();
            }
        });
    }

};

//dropDown
UI.dropDown = function () {

    $('.nav-menu > li > a').off("click").on("click", function(e) {

        if ( $('.nav-toggle').hasClass('on') ) {
            e.preventDefault()

            let _open = $(this).hasClass("on");

            $('.nav-menu > li > a').removeClass('on');

            if ( !_open ) {
                $(this).toggleClass('on');
            }

            $(this).next().slideToggle(300);
            $(".sub-menu").not($(this).next()).slideUp(300);
        }

    });

};

//search
UI.search = function () {

    $('.loop').each(function() {
        $(this).find('.ico-search').off("click").on("click", function() {

            let _class = 'plus';
            let _target= `<div class="loop">
                            <div class="select-wrap w160">
                                <select class="select">
                                    <option>전체</option>
                                    <option>ENG</option>
                                    <option>CHN</option>
                                </select>
                            </div>
                            <div class="input-wrap w323 ml1">
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
    const $foot = $('#container').next('footer').find('.inner');
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
            $target.css('top', $top - 220);
        }
    });

};

//Nav
UI.Nav = function () {

    const $bg =  $('#nav');
    const $bgType2 =  $('.search1');
    const $bgType3 =  $('.search2');
    const $close = $('.btn-close');

    $bg.on('mouseover', function () {
        $('#header').addClass('on');
        $('#header').removeClass('type2');
    });
    $bg.on('mouseout', function () {
        $('#header').removeClass('on');
    });
    $bgType2.on('mouseover', function () {
        $('#header').addClass('type2');
        $('#header').removeClass('on');
        $bgType2.addClass('on');
    });
    $bgType2.on('mouseout', function () {
        $('#header').removeClass('type2');
        $bgType3.addClass('on');
        $bgType2.removeClass('on');
    });
    $bgType3.on('mouseover', function () {
        $('#header').addClass('type2');
        $('#header').removeClass('on');
        $bgType3.addClass('on');
    });
    $bgType3.on('mouseout', function () {
        $('#header').removeClass('type2');
        $bgType3.removeClass('on');
        $bgType2.addClass('on');
    });

    $close.off("click.close").on("click.close", function() {
        $('#header').removeClass('type2');
        // $(this).closest('div').css('display','none');
        // $(this).closest('div').sliblings().css('display','block');

        
    });

    if ( $('.btn-search-view').hasClass('on') ){
        $(this).closest('.btn-search-view').find('div').css('opacity','0');
    } else {
        $(this).closest('.btn-search-view').find('div').css('opacity','1');
    }
};



UI.init = function(){
    UI.Nav();
    UI.navToggle();
    UI.dropDown();
    UI.search();
    UI.file();
    UI.textarea();
    UI.commentDel();
    UI.datepicker();
    UI.tableM();
    UI.sticky();
    UI.modal.open();
    UI.searchSelect();
};

//init
(function(){
    UI.init();
})();
