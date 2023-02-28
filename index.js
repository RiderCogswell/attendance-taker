// Find all i tags with class of dropdown and store in an array
let dropdownIcons = document.querySelectorAll('.dropdown');

// Function to perform the action
function performAction(i) {
    // Click the i-th item
    dropdownIcons[i].click();
    // Wait for 0.001 second
    setTimeout(() => {
        // Find the div that has a class of visible and menu
        let menuDivs = Array.from(dropdownIcons[i].parentNode.getElementsByClassName("visible"));
        for (let j = 0; j < menuDivs.length; j++) {
            let spans = Array.from(menuDivs[j].getElementsByTagName("span"));
            for (let k = 0; k < spans.length; k++) {
                if (spans[k].classList.contains("text") && spans[k].innerText.includes("Present")) {
                    spans[k].click();
                    break;
                }
            }
        }
        // Call the function again with a delay for the next element
        if (i < dropdownIcons.length - 1) {
            setTimeout(() => {
                performAction(i + 1);
            }, 1);
        }
    }, 1);
}

// Call the function for the first element
performAction(0);