
const updateButton = document.getElementById("update-image");

const inputDate = document.getElementById("date");
const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");



updateButton.addEventListener("click", (e) => {
    console.log(inputDate.value, inputMonth.value, inputYear.value)

    let inputDayValue = inputDate.value;
    let inputMonthValue = inputMonth.value;
    let inputYearValue = inputYear.value;

    let date = new Date();
    let todayDay = date.getDate();
    let todayMonth = date.getMonth()+1;
    let todayYear = date.getFullYear();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if(inputDayValue > todayDay){
        todayDay = todayDay + month[todayMonth-1];
        // todayMonth = todayMonth-1;
    }
    if(inputMonthValue > todayMonth){
        todayMonth = todayMonth + 12;
        todayYear = todayYear -1;
    }

    let newDay = todayDay-inputDayValue;
    let newMonth = todayMonth-inputMonthValue;
    let newYear = todayYear-inputYearValue;

    // console.log(newDay, newMonth, newYear)

    let containerDisplay = document.getElementById("container-display-age");
    let ageDayDisplay = document.getElementById("das-days");
    let ageMonthDisplay = document.getElementById("das-months");
    let ageYearDisplay = document.getElementById("das-years");
    
    
    
    // ageDayDisplay.value === newDay; 
    // ageMonthDisplay.innerHTML=newMonth 
    // ageYearDisplay.innerHTML = newYear
    let ageDayDisplayValue = ageDayDisplay.textContent;
    let ageMonthDisplayValue = ageMonthDisplay.textContent;
    let ageYearDisplayValue = ageYearDisplay.textContent;

    ageDayDisplay.textContent = ageDayDisplay.textContent.replace(ageDayDisplayValue, newDay);
    ageMonthDisplay.textContent = ageMonthDisplay.textContent.replace(ageMonthDisplayValue, newMonth);
    ageYearDisplay.textContent = ageYearDisplay.textContent.replace(ageYearDisplayValue, newYear)
    

    
})