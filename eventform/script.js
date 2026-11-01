const form = document.querySelector("#eventForm");
const userType = document.querySelector("#userType");
const idContainer = document.querySelector("#idContainer")
const codeContainer = document.querySelector("#codeContainer")
const studentId = document.querySelector("#studentId")
const code = document.querySelector("#code")
const output = document.querySelector("#output");


function updateCodeField() {
    const value = userType.value;

    if (value === "student") {
        idContainer.hidden = false;
        studentId.required = true;

        codeContainer.hidden = true;
        code.required = false;
    } else if (value === "guest") {
        idContainer.hidden = true;
        studentId.required = false;

        codeContainer.hidden = false;
        code.required = true;
    } else {
        idContainer.hidden = true;
        studentId.required = false;

        codeContainer.hidden = true;
        code.required = false;
    }
}

userType.addEventListener("change", updateCodeField);
updateCodeField();

function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosen = new Date(value + "T00:00:00");

    return chosen <= today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const userType = form.userType.value;
    const eventDate = form.eventDate.value;
    const studentId = form.studentId.value.trim();
    const code = form.code.value.trim();

    if (isPastDate(eventDate)) {
        output.textContent = "Please select a date later than today"
        return;
    }

    if (userType === "student" && studentId.length !== 9) {
        output.textContent = "Please enter a 9-digit student I#"
        return;
    } else if (userType === "guest" && code !== "EVENT131") {
        output.textContent = "Your access code is invalid"
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${userType}</p>
    <p>${eventDate}</p>
    <p></p>
    `;
});