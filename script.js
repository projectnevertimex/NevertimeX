document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const isActive = content.classList.contains('active');
        const icon = button.querySelector('i');

        // Закрыть все секции
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
            item.style.maxHeight = null;
            item.previousElementSibling.querySelector('i').style.transform = 'rotate(0deg)';
        });

        // Открыть текущую секцию
        if (!isActive) {
            content.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.style.transform = 'rotate(90deg)'; // Поворот иконки
        }
    });
});