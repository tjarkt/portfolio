var btn = document.getElementById("btn");
var timeline_education = document.getElementById("education-list");
var timeline_work = document.getElementById("work-list");

function showEducation() {
    btn.style.left = "0";
    timeline_work.style.display = "none";
    timeline_education.style.display = "block";
}

function showWork() {
    btn.style.left = "50%";
    timeline_education.style.display = "none";
    timeline_work.style.display = "block";
}