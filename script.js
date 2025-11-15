const openSidebarBtn = document.getElementById('openSidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');
const sidebar = document.getElementById('projectSidebar');
const overlay = document.getElementById('sidebarOverlay');
const projectForm = document.getElementById('projectForm');

// Abrir sidebar
openSidebarBtn.addEventListener('click', () => {
  sidebar.classList.add('open');
  overlay.classList.add('active');
});

// Cerrar sidebar
const closeSidebar = () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
};

closeSidebarBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Manejar envío del formulario
projectForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    projectName: document.getElementById('projectName').value,
    location: document.getElementById('location').value,
    projectType: document.getElementById('projectType').value,
    population: document.getElementById('population').value,
    flowrate: document.getElementById('flowrate').value,
    coverage: document.getElementById('coverage').value,
    horizon: document.getElementById('horizon').value,
    turbidity: document.getElementById('turbidity').value,
    ph: document.getElementById('ph').value,
    waterSource: document.getElementById('waterSource').value,
    notes: document.getElementById('notes').value,
    timestamp: new Date().toISOString()
  };

  console.log('Datos del Proyecto:', formData);
  alert('✓ Proyecto "' + formData.projectName + '" creado.\n\nVerifica la consola para detalles.');

  projectForm.reset();
  closeSidebar();
});