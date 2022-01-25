var UI = UI || {};

// if(typeof UI === 'undefined') {  위에꺼랑 결국 같은 뜻
// 	var UI = {};
// }

UI.window = $(window);
UI.doc = $(document);
UI.body = $('body');



// 생성자
// UI.a = function() {};
// UI.b = function() {};

// UI.c = (function () {
//     const $var1 = '';
//     let _var2 = '';

//     return {
//         init: function () { //이걸 실행
//             this.open();   //여기서 this는 UI임
//         },

//         open: function ( target ) {

//         },
//         close: function ( target ) {

//         }
//     }
// })();  //즉시 실행



/* modal */
let open = function(el) {
    $(el).fadeIn();
};
let close = function(el) {
    $(el).fadeOut();
};



// dim
// UI.dim = function () {
//     const $targetDim = $('[data-dim]');

//     $targetDim.off("mouseover").on("mouseover", function() {
//         $('.dim').addClass('on');
//     });

//     $targetDim.off("mouseleave").on("mouseleave", function() {
//         $('.dim').removeClass('on');
//     });

// };


/* file remove */
UI.file  = function () {

    const $target = $('.table-edit .add-file-names').find('.name');

    $target.off("click").on("click", function() {
        $(this).hide();
    });
};

/* textarea */
UI.textarea  = function () {

    $('.comment-wrap textarea').off('keyup').on('keyup', function() {
        //const $this = $(this);
        const $counter = $('.counter');
        let _target = $(this).val();
        let _max = _target.length;

        $counter.html(_max + ' <span>/ 200</span>');

        if ( _max >= 300 ) {
            console.log('글자 입력 수 초과')
        };
    });
};

// nav
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

    if ( $('.show-right').length == 0 ){
        $('.show-top2').css('width','100%');
    } else {
        $('.show-top2').css('width','85%');
    }
};

// commentDel
UI.commentDel = function () {

    $('.comment-item').find('.del').off("click").on("click", function() {
        $(this).closest('.comment-item').hide();
    });

};

// dropDown
UI.dropDown = function () {

    $('.nav-menu > li > a').off("click").on("click", function(e) {

        e.preventDefault();

        $('.sub-menu').slideUp();
        $(this).next().slideDown();

    });

};


UI.search = function () {

    $('.loop').each(function(){

        //const $children = $(".loop").clone();

        $(this).find('.ico-search').off("click").on("click", function() {

            let _class = 'plus';
            //let _null = '';

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
                $(".add").append(_target);
            }
            // if ( $(this).hasClass('minus') ){
            //     $(this).removeClass('minus');
            //     $(this).addClass('plus');
            //     $(".add").append(_target);
            // }

        });
    });
};


// modal
UI.modal = (function () {

    return {
        init: function() {

        },
        open: function() {

        },
        close: function() {

        },
    }
})();


UI.datepicker = function () {
    $.datepicker.setDefaults({
       dateFormat: 'yy-mm-dd' //Input Display Format 변경
       ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
       ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
       // ,changeYear: true //콤보박스에서 년 선택 가능
       // ,changeMonth: true //콤보박스에서 월 선택 가능
       ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
       ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
       ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
       ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
       ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
       // ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
       // ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
    });

    $( ".datepicker" ).datepicker();

    /* skin */
    $( ".datepicker" ).datepicker('widget').wrap('<div class="ll-skin-santiago"/>');

};



// 2022-01-25 작업중
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

/* 실행 선언 */
UI.init = function(){
	// UI.a();
	// UI.b();
	// UI.c.init();
    // UI.dim();
    UI.navToggle();
    UI.dropDown();
    UI.search();
    UI.file();
    UI.textarea();
    UI.commentDel();
    UI.datepicker();
    UI.tableM();
    UI.sticky();
    //UI.modal.init();
};

/* 실행 */
(function(){
    UI.init();
})();
