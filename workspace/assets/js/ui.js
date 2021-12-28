var canon = function () {
	var common = {
		init: function () {
            common.datepicker();
			common.tab.init();
		},

		datepicker : function () {
			$( "#datepicker" ).datepicker({
				showOn: "button",
                changeMonth: true,
                changeYear: true,
				dateFormat: 'yy-mm-dd',
				showMonthAfterYear: true,
				prevText: '이전 달',
				nextText: '다음 달',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
				dayNames: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				yearSuffix: '.',
				currentText: "오늘",
				setToday : false,
				defaultDate : null,
			});
        },

		tab : {
			init : function () {
				
			},
			open : function(){
				
			}
		},
	};
	
	return common;

}();
$(function () {
	canon.init();
});


	

