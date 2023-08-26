function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}
function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'hin'}, 'google_translate_element');
  }

  function showLoading() {
    document.querySelector('.loading').style.display = 'flex';
  }

  function hideLoading() {
    document.querySelector('.loading').style.display = 'none';
  }

  indow.addEventListener('load', hideLoading); 
    window.addEventListener('beforeunload', showLoading);