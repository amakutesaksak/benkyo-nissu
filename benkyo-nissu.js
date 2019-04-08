(function() {
    "use strict"
        //プログラミングを始めた日
        const startedDay = new Date("2019/02/03");
        //今日の日付
        const today = new Date();
        //令和元年最初の日付
        const reiwaDay = new Date("2019/05/01");
        
        /**
         * 今日と始めた日の差を出して何日目かを求める（86,400,000ミリ秒＝1日）
         * Math.floor()で小数点切り捨て
         * 最初の日を1日目として計算するため、最後に1を足す
         */
        const result = Math.floor( (today - startedDay) / 86400000 + 1);
        
        function reiwa() {
            let result2 = Math.floor( (today - reiwaDay) / 86400000);
            if (result2 <= 0) {
                result2 = result2 * - 1;
                return "<h4>あと " + result2 + " 日で元号が令和に変わります</h4>";
            } else {
                result2 = result2 + 1;
                return "<h4>元号が令和に変わってから " + resutl2 + " 日目です</h4>";
            }
        }

        document.write("<h1>@amakutesaksak がプログラミングを始めてから " + result + " 日目です</h1>");
        document.write("<h4>始めた日は " + startedDay.getFullYear() + "年" + (startedDay.getMonth() + 1) + "月"　+ startedDay.getDate() + "日 で</h4>");
        document.write("<h4>今日は " + today.getFullYear() + "年" + (today.getMonth() + 1) + "月"　+ today.getDate() + "日 です</h4>");
        document.write(reiwa());
})();