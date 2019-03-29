(function() {
    "use strict"
        //プログラミングを始めた日
        var startedDay = new Date("2019/02/03");
        //今日の日付
        var today = new Date();
        var syudo = new Date("2019/02/03");
    
        //今日と始めた日の差を出して何日目かを求める（86,400,000ミリ秒＝1日）
        //Math.floor()で小数点切り捨て
        //最初の日を1日目として計算するため、最後に1を足す
        var result = Math.floor( (today - startedDay) / 86400000 + 1);
    
        document.write("<h1>@amakutesaksak がプログラミングを始めてから " + result + " 日目です</h1>");
        document.write("<h4>始めた日は " + startedDay.getFullYear() + "年" + (startedDay.getMonth() + 1) + "月"　+ startedDay.getDate() + "日 で</h4>");
        document.write("<h4>今日は " + today.getFullYear() + "年" + (today.getMonth() + 1) + "月"　+ today.getDate() + "日 です</h4>");    
})();