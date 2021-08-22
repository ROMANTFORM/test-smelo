const refs = {
    mainContainer: document.querySelector('.main-container'),

    section01: document.querySelector('.section-01'),
    section02: document.querySelector('.section-02'),
    section03: document.querySelector('.section-03'),
    section04: document.querySelector('.section-04'),

    logo: document.querySelector('.logo-img'),

    titleHolder1: document.querySelector('.title-holder1'),
    titleHolder2: document.querySelector('.title-holder2'),
    titleHolder3: document.querySelector('.title-holder3'),
    titleHolder4: document.querySelector('.title-holder4'),

    sectionTitle1: document.querySelector('.title1'),
    sectionTitle2: document.querySelector('.title2'),
    sectionTitle3: document.querySelector('.title3'),
    sectionTitle4: document.querySelector('.title4'),

    textHolder: document.querySelector('text-holder'),

    sectionText1: document.querySelector('.text1'),
    sectionText2: document.querySelector('.text2'),
    sectionText3: document.querySelector('.text3'),
    sectionText4: document.querySelector('.text4'),

    sectionLink1: document.querySelector('.link1'),
    sectionLink2: document.querySelector('.link2'),
    sectionLink3: document.querySelector('.link3'),
    sectionLink4: document.querySelector('.link4'),

    sectionBtn1: document.querySelector('.btn1'),
    sectionBtn2: document.querySelector('.btn2'),
    sectionBtn3: document.querySelector('.btn3'),
    sectionBtn4: document.querySelector('.btn4'),
};

function hoverOn(title, text, btn, link, section) {
    title.style.color = '#fff';
    text.style.color = '#fff';
    btn.style.backgroundColor = '#fff';
    link.style.color = '#fff';
   section.classList.add('animated');
};
function hoverOff(title, text, btn, link) {
    title.style.color = '#000000';
    text.style.color = '#bab9b9';
    btn.style.backgroundColor = '#bab9b9';
    link.style.color = '#000000';
};

refs.section01.addEventListener('mouseenter', () => {
    refs.section01.style.backgroundColor = '#95BC00';
    hoverOn(
        refs.sectionTitle1,
        refs.sectionText1,
        refs.sectionBtn1,
        refs.sectionLink1,
        refs.section01,
    );
    refs.titleHolder1.classList.add('title-holder-white');
    refs.titleHolder1.classList.remove('title-holder1');
});

refs.section01.addEventListener('mouseleave', () => {
    refs.section01.style.backgroundColor = '#fff';
    hoverOff(
        refs.sectionTitle1,
        refs.sectionText1,
        refs.sectionBtn1,
        refs.sectionLink1,
    );
    refs.titleHolder1.classList.remove('title-holder-white');
    refs.titleHolder1.classList.add('title-holder1');
});

refs.section02.addEventListener('mouseenter', () => {
    refs.section02.style.backgroundColor = '#F34E4E';
    hoverOn(
        refs.sectionTitle2,
        refs.sectionText2,
        refs.sectionBtn2,
        refs.sectionLink2,
        refs.section02,
    );
    refs.titleHolder2.classList.add('title-holder2-white');
    refs.titleHolder2.classList.remove('title-holder2');
});

refs.section02.addEventListener('mouseleave', () => {
    refs.section02.style.backgroundColor = '#fff';
    hoverOff(
        refs.sectionTitle2,
        refs.sectionText2,
        refs.sectionBtn2,
        refs.sectionLink2,
    );
    refs.titleHolder2.classList.remove('title-holder2-white');
    refs.titleHolder2.classList.add('title-holder2');
});

refs.section03.addEventListener('mouseenter', () => {
    refs.section03.style.backgroundColor = '#FFD745';
    hoverOn(
        refs.sectionTitle3,
        refs.sectionText3,
        refs.sectionBtn3,
        refs.sectionLink3,
        refs.section03,
    );
    refs.titleHolder3.classList.add('title-holder3-white');
    refs.titleHolder3.classList.remove('title-holder3');
});
refs.section03.addEventListener('mouseleave', () => {
    refs.section03.style.backgroundColor = '#fff';
    hoverOff(
        refs.sectionTitle3,
        refs.sectionText3,
        refs.sectionBtn3,
        refs.sectionLink3,
    );
    refs.titleHolder3.classList.remove('title-holder3-white');
    refs.titleHolder3.classList.add('title-holder3');
});

refs.section04.addEventListener('mouseenter', () => {
    refs.section04.style.backgroundColor = '#008FC0';
    hoverOn(
        refs.sectionTitle4,
        refs.sectionText4,
        refs.sectionBtn4,
        refs.sectionLink4,
        refs.section04,
    );
    refs.titleHolder4.classList.add('title-holder4-white');
    refs.titleHolder4.classList.remove('title-holder4');
});
refs.section04.addEventListener('mouseleave', () => {
    refs.section04.style.backgroundColor = '#fff';
    hoverOff(
        refs.sectionTitle4,
        refs.sectionText4,
        refs.sectionBtn4,
        refs.sectionLink4,
    );
    refs.titleHolder4.classList.remove('title-holder4-white');
    refs.titleHolder4.classList.add('title-holder4');
});