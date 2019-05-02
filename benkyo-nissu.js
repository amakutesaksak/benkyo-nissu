(function() {
    "use strict"
        //プログラミングを始めた日
        let startedDay = new Date("2019/02/03");
        //今日の日付
        let today = new Date();
        //令和元年最初の日付 newEraName=新元号
        const newEraName = new Date("2019/05/01");
        
        /**
         * 今日と始めた日の差を出して何日目かを求める（86,400,000ミリ秒＝1日）
         * Math.floor()で小数点切り捨て
         * 最初の日を1日目として計算するため、最後に1を足す
         */
        const result = Math.floor( (today - startedDay) / 86400000 + 1);


        const startedDayYear = startedDay.getFullYear();
        const startedDayMonth = startedDay.getMonth() + 1;
        const startedDayDate = startedDay.getDate() 
        
        const todayYear =  today.getFullYear();
        const todayMonth = today.getMonth() + 1;
        const todayDate = today.getDate();

        const startedDayYearDivided = document.getElementById('startedDayYear');
        startedDayYearDivided.innerText = startedDayYear;
        const startedDayMonthDivided = document.getElementById('startedDayMonth');
        startedDayMonthDivided.innerText = startedDayMonth;
        const startedDayDateDivided = document.getElementById('startedDayDate');
        startedDayDateDivided.innerText = startedDayDate;

        const todayYearDivided = document.getElementById('todayYear');
        todayYearDivided.innerText = todayYear;
        const todayMonthhDivided = document.getElementById('todayMonth');
        todayMonthhDivided.innerText = todayMonth;
        const todayDateDivided = document.getElementById('todayDate');
        todayDateDivided.innerText = todayDate;

        const programingDayDivided = document.getElementById('programingDay');
        programingDayDivided.innerText = result;
        
        const eraNameDayDivided = document.getElementById('eraNameDay');

        let result2 = Math.floor( (today - newEraName) / 86400000);
        if (result2 < 0) {
            result2 = result2 * -1;
            eraNameDayDivided.innerText = (`あと ${result2} 日で元号が令和に変わります`);
            }else {
            result2 = result2 + 1;
            eraNameDayDivided.innerText = (`元号が令和に変わってから ${result2} 日目です`);
        }
        

        /**
        document.write("<h1>@amakutesaksak がプログラミングを始めてから " + result + " 日目です</h1>");
        document.write("<h4>始めた日は " + startedDay.getFullYear() + "年" + (startedDay.getMonth() + 1) + "月"　+ startedDay.getDate() + "日 で</h4>");
        document.write("<h4>今日は " + today.getFullYear() + "年" + (today.getMonth() + 1) + "月"　+ today.getDate() + "日 です</h4>");
        document.write(reiwa());
         */
})();