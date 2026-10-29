/* =================================================
   ZAYK SYSTEMS - SCRIPT PRINCIPAL
   ================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Suavização de rolagem para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignora se for apenas "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log('Zayk Systems - Sistema Inicializado com Sucesso.');
});
