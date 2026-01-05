// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Funcionalidad botones sociales
    document.querySelectorAll('footer button').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.classList[0].split('-')[1];
            
            switch(type) {
                case 'github':
                    window.open('https://github.com/yaeldealbadev', '_blank');
                    break;
                case 'linkedin':
                    window.open('https://linkedin.com/in/yael-dealba', '_blank');
                    break;
                case 'email':
                    window.location.href = 'mailto:yael.dealba.dev@gmail.com';
                    break;
                case 'portafolio':
                    window.open('https://yael-portafolio.com', '_blank');
                    break;
            }
        });
    });

    // Animación de aparición
    const mainCard = document.querySelector('main');
    if (mainCard) {
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            mainCard.style.transition = 'all 0.6s ease';
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'translateY(0)';
        }, 100);
    }
});