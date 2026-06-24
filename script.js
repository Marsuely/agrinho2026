// script.js

// Ativar navegação suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Criar botão para voltar ao topo
const backToTopBtn = document.createElement('button');
backToTopBtn.id = 'backToTop';
backToTopBtn.textContent = '↑ Voltar ao Topo';
document.body.appendChild(backToTopBtn);

// Estilizar o botão com CSS via JS
const style = document.createElement('style');
style.innerHTML = `
#backToTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  background-color: #2e7d32;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  font-size: 16px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: background-color 0.3s;
}
#backToTop:hover {
  background-color: #1b5e20;
}
`;
document.head.appendChild(style);

// Mostrar ou esconder o botão ao rolar a página
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    document.getElementById('backToTop').style.display = 'block';
  } else {
    document.getElementById('backToTop').style.display = 'none';
  }
});

// Ação ao clicar no botão para voltar ao topo
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
