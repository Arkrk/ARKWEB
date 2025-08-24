export function dropdown(btnId, menuId) {
  const dropdownBtn = document.getElementById(btnId);
  const dropdownMenu = document.getElementById(menuId);

  const toggleDropdown = function () {
    dropdownMenu.classList.toggle('show');
  };

  dropdownBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener('click', function () {
    if (dropdownMenu.classList.contains('show')) {
      toggleDropdown();
    }
  });
}