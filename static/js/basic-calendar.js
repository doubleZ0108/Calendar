window.onload = function(){
    var now = document.getElementById('current-year-month');
    // var left = document.getElementById('left');
    // var right = document.getElementById('right');
    var days = document.getElementById("days");

    var monthLetter = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var nowDay = new Date();
    var thisYear = nowDay.getFullYear(); //获取当前年份
    var thisMonth = nowDay.getMonth() + 1; //获取当前月份
    var today = nowDay.getDate(); //获取当前号数

    var dayNum = today.toString(); //用于变更操作
    var changeYear = thisYear;
    var changeMonth = thisMonth;
    var changeDay = dayNum;

    function refresh() { //刷新页面
        for(var i = 1; i <= 42; i++) {
            var Rday = document.getElementById("day" + i);
            Rday.innerHTML = " ";
            Rday.style = "backgroud-color:#eeeeee";
        }
    }

    function printDays(year, month) { //显示当前月的信息
        refresh();
        var nowMonthStartDay = new Date(year, month - 1, 1).getDay(); //当前月第一天是周几
        if(nowMonthStartDay == 0) {
            nowMonthStartDay = 7;
        }
        var numberOfDaysInMonth = new Date(year, month, 0).getDate(); //当前月有多少天
        now.innerHTML = " ";
        now.innerHTML = monthLetter[month - 1] + '</br>' + year; //改变title的内容
        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) { //判断变色的日期
            var Day = document.getElementById("day" + j);
            Day.innerHTML = "" + i;
            if(year == thisYear && month == thisMonth && i.toString() == dayNum) { //当前日期一直是绿色
                Day.style = "background-color:#1abc9c";
            }
            if(i.toString() == changeDay) { //选中的符合要求的日期显示绿色
                Day.style = "background-color:#1abc9c";
            }
        }
    }

    printDays(thisYear, thisMonth);

    // left.onclick = function() {
    //     if(changeMonth == 1) {
    //         changeYear--;
    //         changeMonth = 12;
    //     } else {
    //         changeMonth--;
    //     }
    //     changeDay = 0; //翻页的时候将选中的日期清空
    //     printDays(changeYear, changeMonth); //打印下一个月的日期
    // }
    // right.onclick = function() {
    //     if(changeMonth == 12) {
    //         changeYear++;
    //         changeMonth = 1;
    //     } else {
    //         changeMonth++;
    //     }
    //     changeDay = 0;
    //     printDays(changeYear, changeMonth);
    // }
    // days.onmouseover = function(e) { //鼠标移上变橘黄色
    //     if(e.target && e.target.nodeName == "DIV") {
    //         e.target.style = "background-color:orange";
    //     }
    // }
    // days.onmouseout = function(e) { //鼠标移走恢复原色
    //     if(e.target && e.target.nodeName == "DIV") {
    //         e.target.style = "background-color:#eeeeee";
    //     }
    //     printDays(changeYear, changeMonth); //确保点击的日期显示颜色
    // }

    // days.onclick = function(e) { //点击日期，判断选中的年，月，日是否大于当前日期
    //     var clickDay = e.target.innerHTML;
    //     if(changeYear > thisYear) {
    //         changeDay = clickDay;
    //     } else if(changeYear == thisYear && changeMonth > thisMonth) {
    //         changeDay = clickDay;
    //     } else if(changeYear == thisYear && changeMonth == thisMonth && clickDay >= today) {
    //         changeDay = clickDay;
    //     }
    //     printDays(changeYear, changeMonth);
    // }

}