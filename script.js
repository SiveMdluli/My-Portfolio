/* Toggle SideNav Logic */
const sideNav = document.getElementById('sideNav');

function openNav(open) {
  document.getElementById('sideNav').style.width = '100%';
  sideNav.style.width = '100%';
  return open;
}

// document.getElementById('toggleSpan').onclick(openNav);

function closeNav(close) {
  document.getElementById('sideNav').style.width = '0';
  sideNav.style.width = '0';
  return close;
}

/* Contact validation logic Section */
const form = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const email = emailInput.value;

  if (email === email.toLowerCase()) {
    // If it fits requirement[lowercase], ahead
    form.submit();
  } else {
    // Otherwise show dynamic error below
    let errorMessage = form.querySelector('.errorMsg');
    if (errorMessage) {
      form.removeChild(errorMessage);
    }
    errorMessage = document.createElement('p');
    errorMessage.classList.add('errorMsg');
    errorMessage.textContent = 'Oops! An error has occurred, your email must be lowercase.';
    form.appendChild(errorMessage);
  }
}
form.addEventListener('submit', handleSubmit);