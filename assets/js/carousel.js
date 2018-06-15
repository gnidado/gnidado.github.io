let currentCourse = 'sport';

let toggleActive = (from, to) => {
    $(from).removeClass('active');
    $(to).addClass('active');
}

function changeCourse(course) {
    toggleActive(`#${currentCourse}`, `#${course}`)
    $('#masters').css('background-image', `url('images/courses/${course}.jpg')`);
    currentCourse = course;
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
    $('.masterWrapper > i:nth-child(2)').click(() => nextMaster());
    $('.masterWrapper > i:nth-child(1)').click(() => prevMaster());

    changeLoop;
})