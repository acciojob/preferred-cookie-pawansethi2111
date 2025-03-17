//your JS code here. If required.
// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Function to set a cookie with a name, value, and expiration days
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to apply the saved preferences from cookies
function applyPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');
  
  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  }
  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
  }
}

// Function to save the current preferences to cookies
function savePreferences(event) {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  setCookie('fontsize', fontSize, 30); // Save for 30 days
  setCookie('fontcolor', fontColor, 30); // Save for 30 days
}

// Event listener to save preferences when the form is submitted
document.getElementById('settings-form').addEventListener('submit', savePreferences);

// Apply preferences on page load
window.onload = applyPreferences;
