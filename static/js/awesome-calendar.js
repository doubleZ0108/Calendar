window.onload = function() {
    initAwesomeStructure();
    initLogic(true);
};

function initAwesomeStructure() {
    let days = $('#days');

    var min = -5;
    var max = 5;

    for(let i = 1; i <= 42; ++i) {
        var randRotation = parseFloat(Math.random()*(min - max + 1) + max);
        days.append(
            '<div class="day-group">\n' +
            '    <div class="day-outside">\n' +
            '        <div class="day-shadow"></div>\n' +
            '        <div class="day-paper"" style="grid-area: day-' + i + '; transform: rotate(' + randRotation + 'deg);">\n' +
            '            <div class="day-paper-bg" id="day-bgcolor-' + i + '">\n' +
            '            </div>\n' +
            '        </div>\n' +
            '        <div class="cover-content-container">\n' +
            '            <div class="cover-content">\n' +
            '                <h1 id="day-text-' + i + '">' + i + '</h1>\n' +
            '            </div>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="day-inside">\n' +
            '        <div>Text1</div>\n' +
            '        <div>Text2</div>\n' +
            '    </div>\n' +
            '</div>'
        );
    }
}

