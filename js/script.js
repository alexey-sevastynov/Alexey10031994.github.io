"use stict";

// проверяем с какого оборудывания заходит пользователь телефон или компьютер 

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        //проверяем длину этого элемента 
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function () {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// -----------------------------GAMBURGER

const iconMenu = document.querySelector('.hat__burger');
if (iconMenu) {
    const menuBody = document.querySelector('.hat__menu');

    iconMenu.addEventListener('click', function () {
        document.body.classList.toggle('_lock');
        // что меню бургер в активном состоянии - не скролился 
        iconMenu.classList.toggle('_active');
        // для анимации
        menuBody.classList.toggle('_active');
        // для открытия\закрытия бургер меню
    });
}

// --------------------------------LANGUAGE

const ukr = document.querySelectorAll('.text-ua'),
    table__ua = document.querySelectorAll('.table__ua'),
    table__rus = document.querySelectorAll('.table__rus'),
    rus = document.querySelectorAll('.text-rus'),
    btnUkr = document.querySelector('.hat__language_ukr'),
    btnRus = document.querySelector('.hat__language_rus');

btnUkr.addEventListener('click', () => {
    if (btnUkr) {
        for (let ua of ukr) {
            ua.style.display = 'block';
        }
        for (let tUa of table__ua) {
            tUa.style.display = 'table';
        }
        for (let ru of rus) {
            ru.style.display = 'none';
        }
        for (let tRu of table__rus) {
            tRu.style.display = 'none';
        }
    }

});
btnRus.addEventListener('click', () => {
    if (btnRus) {
        for (let ru of rus) {
            ru.style.display = 'block';
        }
        for (let tRu of table__rus) {
            tRu.style.display = 'table';
        }
        for (let ua of ukr) {
            ua.style.display = 'none';
        }
        for (let tUa of table__ua) {
            tUa.style.display = 'none';
        }
    }
});


// --------------------------------callback

const btnsCall = document.querySelectorAll('.btn'),
    btnsClose = document.querySelectorAll('.callback__close'),
    sectionPromoMenu = document.querySelector('.promo__form');

if (btnsCall) {



    for (let btnCall of btnsCall) {
        btnCall.addEventListener('click', function () {
            document.body.classList.add('_lock');
            // что меню бургер в активном состоянии - не скролился 
            sectionPromoMenu.classList.add('callback__active');
            // для открытия\закрытия бургер меню
        });
    }

}

if (btnsClose) {
    for (let btnClose of btnsClose)
        btnClose.addEventListener('click', function () {
            document.body.classList.remove('_lock');
            sectionPromoMenu.classList.remove('callback__active');
        });
}


