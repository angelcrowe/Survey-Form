const form = document.getElementById("survey-form");

//form submission function
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent default from automatically submitting

  // Validation for Name field
  const nameField = document.getElementById("name");
  const nameInput = document.getElementById("name").value.trim();
  if (nameInput === "") {
    displayError(nameField, "Name is required");
    return;
  } else {
    clearError(nameField);
  }

  // Validation for Email field
  const emailField = document.getElementById("email");
  const emailInput = document.getElementById("email").value.trim();
  if (emailInput === "") {
    displayError(emailField, "Email is required");
    return;
  } else if (!isValidEmail(emailInput)) {
    displayError(emailField, "Please enter a valid email address");
    return;
  } else {
    clearError(emailField);
  }

  // Validation for Age field (if present)
  const ageField = document.getElementById("age");
  const ageInput = document.getElementById("age").value.trim();
  if (ageInput !== "" && (isNaN(ageInput) || ageInput < 13 || ageInput > 120)) {
    displayError(ageField, "Please enter a valid age between 13 and 120");
    return;
  } else {
    clearError(ageField);
  }

  // Validation for Role dropdown
  const roleOptionField = document.getElementById("role-option");
  const roleOption = document.getElementById("role-option").value;
  if (roleOption === "") {
    displayError(roleOptionField.parentElement, "Please select a role");
    return;
  } else {
    clearError(roleOptionField.parentElement);
  }

  // Validation for Recommendation radio buttons
  const recommendationOptions = document.getElementsByName("user-recommend");
  let recommendationSelected = false;
  for (const option of recommendationOptions) {
    if (option.checked) {
      recommendationSelected = true;
      break;
    }
  }
  if (!recommendationSelected) {
    displayError(
      document.querySelector("fieldset legend"),
      "Please select a recommendation"
    );
    return;
  } else {
    clearError(document.querySelector("fieldset legend"));
  }

  // Validation for Feature dropdown
  const featureOptionField = document.getElementById("feature-option");
  const featureOption = document.getElementById("feature-option").value;
  if (featureOption === "") {
    displayError(
      featureOptionField.parentElement,
      "Please select a favorite feature"
    );
    return;
  } else {
    clearError(featureOptionField.parentElement);
  }

  // Validation for Checkboxes
  const checkboxesChecked = document.querySelectorAll(
    'input[name="checkboxes"]:checked'
  );
  if (checkboxesChecked.length === 0) {
    displayError(
      document.querySelector("fieldset legend"),
      "Please select at least one checkbox"
    );
    return;
  } else {
    clearError(document.querySelector("fieldset legend"));
  }

  // Validation for Comments textarea
  const commentsField = document.getElementById("comments");
  const commentsInput = document.getElementById("comments").value.trim();
  if (commentsInput === "") {
    displayError(commentsField, "Please enter your comments or suggestions");
    return;
  } else {
    clearError(commentsField);
  }

  // If all validations pass, you can submit the form
  this.submit();
});

// Function to display error message
function displayError(field, message) {
  const errorSpan = document.createElement("span");
  errorSpan.classList.add("error-message");
  errorSpan.textContent = message;
  field.appendChild(errorSpan);
}

// Function to clear error message
function clearError(field) {
  const errorSpan = field.querySelector(".error-message");
  if (errorSpan) {
    field.removeChild(errorSpan);
  }
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
