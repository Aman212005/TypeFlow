const timeDropdownBtn = document.getElementById("timeDropdownBtn");
const modeDropdownBtn = document.getElementById("modeDropdownBtn");
const difficultyDropdownBtn = document.getElementById("difficultyDropdownBtn");

const timeDropdown = document.getElementById("timeDropdown");
const modeDropdown = document.getElementById("modeDropdown");
const difficultyDropdown = document.getElementById("difficultyDropdown");

const timeDropdownWrapper = document.getElementById("timeWrapper");
const modeDropdownWrapper = document.getElementById("modeWrapper");
const difficultyDropdownWrapper = document.getElementById("difficultyWrapper");

const dropdowns = [
    timeDropdown,
    modeDropdown,
    difficultyDropdown
];

const dropdownWrappers = [
    timeDropdownWrapper,
    modeDropdownWrapper,
    difficultyDropdownWrapper
];


function toggleDropdown(selectedDropdown) {

    dropdowns.forEach(function(dropdown) {

        if (dropdown === selectedDropdown) {

            dropdown.classList.toggle("active");

        } else {

            dropdown.classList.remove("active");

        }

    });

}

document.addEventListener("click", function(event) {

    const clickedInside = dropdownWrappers.some(function(wrapper) {
        return wrapper.contains(event.target);
    });

    if (!clickedInside) {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove("active");
        });
    }

});
timeDropdownBtn.addEventListener("click", function() {
    toggleDropdown(timeDropdown);
});

modeDropdownBtn.addEventListener("click", function() {
    toggleDropdown(modeDropdown);
});

difficultyDropdownBtn.addEventListener("click", function() {
    toggleDropdown(difficultyDropdown);
});

function setupDropdown(dropdownID, selectedValueID) {
  const dropdown = document.getElementById(dropdownID);
  const selectedValue = document.getElementById(selectedValueID);
  const options = dropdown.querySelectorAll(".dropdown-option");
  options.forEach(function (option) {
    option.addEventListener("click",function(){
        selectedValue.textContent=option.dataset.value;
        dropdown.classList.remove("active");
    });
  });
}

setupDropdown("timeDropdown", "selectedTime");

setupDropdown("modeDropdown", "selectedMode");

setupDropdown("difficultyDropdown", "selectedDifficulty");


