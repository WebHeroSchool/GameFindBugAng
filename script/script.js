const LEVELS = ['simple', 'medium', 'hard'];
const button = document.getElementById('start');

let chooseLevelById = function (ids) {
  ids.forEach(id => {
    let level = document.getElementById(id);
    level.addEventListener("click", () => {
      document.querySelectorAll('.clickToList').forEach((item) => item.classList.remove('clickToList'));
      level.classList.add('clickToList');
      button.onclick = () => {
        document.location = `./table.html`;
        localStorage.setItem('level', id);
      }
    });
    });
};

chooseLevelById(LEVELS);
