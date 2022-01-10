var UI = UI || {};

// if(typeof UI === 'undefined') {  위에꺼랑 결국 같은 뜻
// 	var UI = {}; 
// } 

UI.window = $(window);
UI.doc = $(document);
UI.body = $('body');


// 생성자
UI.a = function() {};
UI.b = function() {};

UI.c = (function () {
    const $var1 = '';
    let _var2 = '';

    return {
        init: function () { //이걸 실행
            this.open();   //여기서 this는 UI임
        },
        
        open: function ( target ) {

        },
        close: function ( target ) {
            
        }
    }
})();  //즉시 실행


// 변수
UI.variable = 0;

// 객체 컨테이너
UI.modules = {};

// 객체 컨테이너 안에 객체 사용 가능
UI.modules.module1 = {}; 
UI.modules.module1.data = { a : 1, b : 2 }; 
UI.modules.module2 = {};



/* 실행 선언 */
UI.init = function(){
	UI.a();
	UI.b();
	UI.c.init();
};

/* 실행 */
(function(){
   UI.init();
})();