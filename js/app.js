//header menu second level menu

let headerMenuItems = document.querySelectorAll('.header-top-item');
if (headerMenuItems.length > 0) {
    for (let i = 0; headerMenuItems.length > i; i++) {
        let headerMenuItemSecondLevel = headerMenuItems[i].querySelector('.header-top-item-second');
        if (headerMenuItemSecondLevel) {
            let headerMenuText = headerMenuItems[i].querySelector('.header-top-item-text');
            headerMenuText.onmouseover = () => {
                headerMenuItemSecondLevel.classList.add('active')
            }
            headerMenuItems[i].onmouseleave = () => {
                headerMenuItemSecondLevel.classList.remove('active')

            }
        }
    }
}

//popular slider

const popularSlider = new Swiper('.popularCarSlider', {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
        prevEl: '.popularArrowPrew',
        nextEl: '.popularArrowNext',
    },
    pagination: {
        el: '.popularPaggination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
});

const DEliteThis = new Swiper('.patientsSlider', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 2,
    navigation: {
        prevEl: '.patients-arr-prev',
        nextEl: '.patients-arr-next',
    },
    pagination: {
        el: '.patients-paggination',
        clickable: true,
    },
});

let rangeInputs = document.querySelectorAll('.rabgeInp');
let rangeHeading = document.querySelectorAll('.imputLineHeader')

for(let i = 0; rangeInputs.length > i; i++) {
    rangeInputs[i].onchange = ()=>{
        let forWhat = rangeInputs[i].getAttribute('data-for')
        let heading;
        console.log(forWhat)
        for(let o = 0; rangeHeading.length > o; o++) {
            if(rangeHeading[o].getAttribute('data-range') == forWhat) {
                heading = rangeHeading[o]
            }
        }
        console.log(heading)
        heading.innerHTML = rangeInputs[i].value
    }
}

let questions = document.querySelectorAll('.faqItem'); //вставляем class блока с вопросом
if(questions.length > 0) {
    questions[0].classList.add('active')
    for(let i = 0; questions.length > i; i++) {
        questions[i].onclick = ()=>{
            questions[i].classList.toggle('active')
        }
    }
}