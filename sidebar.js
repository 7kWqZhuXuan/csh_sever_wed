document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var toggleButton = document.getElementById('sidebar-toggle');
    adjustSidebar();
    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
      });
    window.addEventListener('resize', adjustSidebar);
    function adjustSidebar() {
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
      }
    }
  });