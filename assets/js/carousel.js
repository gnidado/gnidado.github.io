let currentCourse = 'sport';

let toggleActive = (from, to) => {
    $(from).removeClass('active');
    $(to).addClass('active');
}

function changeCourse(course) {
    toggleActive(`#${currentCourse}`, `#${course}`)
    $('#masters').css('background-image', `url('images/courses/${course}.jpg')`);
    currentCourse = course;
    $('.courseNav li a').css('color', '#ffffff')
    switch (course) {
        case 'sport':
            $('.courseNav li:nth-child(1) a').css('color', '#a082f3')
            break;
        case 'english':
            $('.courseNav li:nth-child(2) a').css('color', '#a082f3')
            break;
        case 'networking':
            $('.courseNav li:nth-child(3) a').css('color', '#a082f3')
            break;
        case 'digital':
            $('.courseNav li:nth-child(4) a').css('color', '#a082f3')
            break;
    
        default:
            break;
    }
}

let mastersId = ['#bizukova', '#orlova', '#maslenikov'];
let currentMaster = 0;

function nextMaster() {
    let id = (currentMaster+1)%3;
    toggleActive(mastersId[currentMaster], mastersId[id])
    currentMaster = id;
    window.clearInterval(changeLoop);
    changeLoop = setInterval(nextMaster, 8000);
}

function prevMaster() {
    let id = (currentMaster+2)%3
    toggleActive(mastersId[currentMaster], mastersId[id])
    currentMaster = id;
    window.clearInterval(changeLoop);
    changeLoop = setInterval(nextMaster, 8000);
}

let changeLoop = setInterval(nextMaster, 8000);

$(function () {
    $('.courseNav li:nth-child(1) a').css('color', '#a082f3')
    $('.masterWrapper > i:nth-child(2)').click(() => nextMaster());
    $('.masterWrapper > i:nth-child(1)').click(() => prevMaster());

    changeLoop;
})