/* Toggle SideNav Logic */
const sideNav = document.getElementById('sideNav');

function openNav(open) {
  document.getElementById('sideNav').style.width = '100%';
  sideNav.style.width = '100%';
  return open;
}

document.getElementById('toggleSpan').onclick(openNav);

function closeNav(close) {
  document.getElementById('sideNav').style.width = '0';
  sideNav.style.width = '0';
  return close;
}
document.getElementById('xOut').onclick(closeNav);

// Contact for validation and giving error feedback