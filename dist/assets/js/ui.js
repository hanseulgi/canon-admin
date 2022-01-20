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


// dim
UI.dim = function () {

    const $targetDim = $('[data-dim]');

    $targetDim.off("mouseover").on("mouseover", function() {
        $('.dim').addClass('on');
    });

    $targetDim.off("mouseleave").on("mouseleave", function() {
        $('.dim').removeClass('on');
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

            let _target= `<div class="loop">
                            <div class="select-wrap w130">
                                <select class="select">
                                    <option>전체</option>
                                    <option>ENG</option>
                                    <option>CHN</option>
                                </select>
                            </div>
                            <div class="input-wrap w370">
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


/* 실행 선언 */
UI.init = function(){
	// UI.a();
	// UI.b();
	// UI.c.init();
    UI.dim();
    UI.modal.init();
    UI.navToggle();
    UI.dropDown();
    UI.search();

};

/* 실행 */
(function(){
    UI.init();
})();
