document.getElementById('filtro-positivo').addEventListener('change', function() {
    document.querySelectorAll('.testimonio.positivo').forEach(el => {
        if (this.checked) {
            el.classList.add('resaltado');
        } else {
            el.classList.remove('resaltado');
        }
    });
});

document.getElementById('filtro-negativo').addEventListener('change', function() {
    document.querySelectorAll('.testimonio.negativo').forEach(el => {
        if (this.checked) {
            el.classList.add('resaltado');
        } else {
            el.classList.remove('resaltado');
        }
    });
});