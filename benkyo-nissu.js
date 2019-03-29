(function() {
    "use strict"
    //プログラミングを始めた日
    var startedDay = new Date("2019/02/03");
    //今日の日付
    var today = new Date();

    //差を出して何日目かを求める（86,400,000ミリ秒＝1日）
    //Math.floor()で小数点切り捨て
    //最初の日を1日目と計算するため最後に1を足します
    var result = Math.floor( (today - startedDay + 1) / 86400000 ) + 1;
    console.log("プログラミングを始めてから" + result + "日目です");
    console.log("始めた日 " + startedDay.getFullYear() + "年" + (startedDay.getMonth() + 1) + "月"　+ startedDay.getDate() + "日");
    console.log("今日 " + today.getFullYear() + "年" + (today.getMonth() + 1) + "月"　+ today.getDate() + "日");
})();