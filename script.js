const sideNav = document.getElementById("sideNav")

function openNav(open) {
  sideNav.style.width = "100%";
  return open;
}

function closeNav(close) {
  sideNav.style.width = "0";
  return close;
}

// CONTACT VALIDATION

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector("#email");
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // If iy fits requirement[lowercase], ahead
    form.submit();
  } else {
    // Otherwise show dynamic error below
    const errorMessage = document.createElement("p");
    errorMessage.classList.add("errorMsg");
    errorMessage.textContent =
      "Opps! An error has occured, your email must be lowercase.";
    form.appendChild(errorMessage);
  }
}
