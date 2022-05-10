var r = document.querySelector(':root');

function lightMode() {
    r.style.setProperty('--background', '#ededed');
    r.style.setProperty('--primary', '#dbdbdb');
    r.style.setProperty('--secondary', '#ededed');
    r.style.setProperty('--border', '#bababa');
    r.style.setProperty('--font', 'black');
    r.style.setProperty('--postfont', 'black');
    r.style.setProperty('--secondaryfont', '#474747');
}

function darkMode() {
    r.style.setProperty('--background', '#111a27');
    r.style.setProperty('--primary', 'rgba(34, 35, 48, 0.5)');
    r.style.setProperty('--secondary', 'rgba(31, 41, 55, 1)');
    r.style.setProperty('--border', 'rgb(37 47 61)');
    r.style.setProperty('--font', 'white');
    r.style.setProperty('--postfont', 'lightgrey');
    r.style.setProperty('--secondaryfont', 'white');
}

function updateTheme() {
  if(localStorage.getItem("theme") == "light") {
    lightMode();
  }else{
    darkMode();
  }
}

updateTheme()

function changeTheme() {
  let theme = document.getElementById("theme").value;
  if(theme == "light") {
    localStorage.setItem("theme", "light");
    lightMode();
  }else{
    localStorage.setItem("theme", "dark");
    darkMode();
  }
}