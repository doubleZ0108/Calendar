var nowDay = new Date();
var thisYear = nowDay.getFullYear(); 
var thisMonth = nowDay.getMonth() + 1; 
var today = nowDay.getDate();

var dayNum = today.toString(); //用于变更操作
var changeYear = thisYear;
var changeMonth = thisMonth;
var changeDay = dayNum;

function initLogic(){
    var now = document.getElementById('current-year-month');
    var month_left = document.getElementById('month-left');
    var month_right = document.getElementById('month-right');
    var year_left = document.getElementById('year-left');
    var year_right = document.getElementById('year-right');
    var days = document.getElementById("days");

    var monthLetter = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    

    /**
     * 刷新页面
     */
    function refresh() {
        document.querySelectorAll(".day").forEach(function(elem){
            elem.innerHTML = " ";
            elem.style = "backgroud-color:#eeeeee";
        });
    }

    /**
     * 显示某年某月的信息
     */
    function printDays(year, month) {
        refresh();
        var nowMonthStartDay = new Date(year, month - 1, 1).getDay();   //当前月第一天是周几
        if(nowMonthStartDay == 0) {
            nowMonthStartDay = 7;
        }
        var numberOfDaysInMonth = new Date(year, month, 0).getDate();   //当前月有多少天
        now.innerHTML = " ";
        now.innerHTML = monthLetter[month - 1] + '<br />' + year;        //改变title的内容
        for(var i = 1, j = nowMonthStartDay; i <= numberOfDaysInMonth; i++, j++) {  //判断变色的日期
            var Day = document.getElementById("day" + j);
            Day.innerHTML = "" + i;
            if(year == thisYear && month == thisMonth && i.toString() == dayNum) {   //当前日期一直是绿色
                Day.style = "background-color:#1abc9c";
            }
            if(i.toString() == changeDay) {     //选中的符合要求的日期显示绿色
                Day.style = "background-color:#1abc9c";
            }
        }
    }

    printDays(thisYear, thisMonth);

    month_left.onclick = function() {
        if(changeMonth == 1) {
            changeYear--;
            changeMonth = 12;
        } else {
            changeMonth--;
        }
        changeDay = 0; //翻页的时候将选中的日期清空
        printDays(changeYear, changeMonth); //打印下一个月的日期
    }
    month_right.onclick = function() {
        if(changeMonth == 12) {
            changeYear++;
            changeMonth = 1;
        } else {
            changeMonth++;
        }
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }

    year_left.onclick = function(){
        changeYear--;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }
    year_right.onclick = function(){
        changeYear++;
        changeDay = 0;
        printDays(changeYear, changeMonth);
    }

    days.onclick = function(e) { 
        var clickDay = e.target.innerHTML;
        changeDay = clickDay;
        printDays(changeYear, changeMonth);
    }
}