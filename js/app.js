document.addEventListener('DOMContentLoaded', function () {
    var promoTitle = document.getElementById('promoTitle');
    var nameModal = document.getElementById('nameModal');
    var nameForm = document.getElementById('nameForm');
    var userNameInput = document.getElementById('userNameInput');
    var defaultName = 'мой друг';

    function setTitle(name) {
        var displayName = name && name.trim() ? name.trim() : defaultName;
        promoTitle.innerText = 'Привет, ' + displayName +
            '! Добро пожаловать на сайт группы отелей Selly Hotels!';
    }

    // Проверяем, сохраняли ли имя раньше
    var savedName = localStorage.getItem('sellyUserName');

    if (savedName) {
        setTitle(savedName);
    } else {
        setTitle('');
        // Показываем окно, если имени ещё нет
        nameModal.classList.add('visible');
        userNameInput.focus();
    }

    nameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var enteredName = userNameInput.value.trim();

        if (enteredName) {
            localStorage.setItem('sellyUserName', enteredName);
            setTitle(enteredName);
        } else {
            setTitle('');
        }

        nameModal.classList.remove('visible');
    });

    // Закрытие по клику на затемнённый фон
    nameModal.addEventListener('click', function (event) {
        if (event.target === nameModal) {
            nameModal.classList.remove('visible');
            setTitle(localStorage.getItem('sellyUserName') || '');
        }
    });
});