// script.js

function calculateCPUScore() {
    var cpuScore = parseInt(document.getElementById('cpuSelect').value);
    var speedScore = parseInt(document.getElementById('speedSelect').value);
    var totalScore = cpuScore + speedScore;
    window.location.href = "ram.html?cpuscore=" + totalScore;
}

function calculateRAMScore() {
    var ramTypeScore = parseInt(document.getElementById('ramTypeSelect').value);
    var ramCapacityScore = parseInt(document.getElementById('ramCapacitySelect').value);
    var totalScore = ramTypeScore + ramCapacityScore;
    var urlParams = new URLSearchParams(window.location.search);
    var cpuScore = urlParams.get('cpuscore');
    window.location.href = "case.html?cpuscore=" + cpuScore + "&ramscore=" + totalScore;
}

function calculateCaseScore() {
    var caseSizeScore = parseInt(document.getElementById('caseSizeSelect').value);
    var rgbScore = parseInt(document.getElementById('rgbSelect').value);
    var caseTypeScore = parseInt(document.getElementById('caseTypeSelect').value);
    var totalScore = caseSizeScore + rgbScore + caseTypeScore;
    var urlParams = new URLSearchParams(window.location.search);
    var cpuScore = urlParams.get('cpuscore');
    var ramScore = urlParams.get('ramscore');
    window.location.href = "finish.html?cpuscore=" + cpuScore + "&ramscore=" + ramScore + "&casescore=" + totalScore;
}
