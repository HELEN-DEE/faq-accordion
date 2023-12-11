const accordionHeaders  = document.querySelectorAll('.accordion-header')
let openAccordion = null

const btnIcons = document.querySelectorAll('.btn-icon')
const plusIconPath = 'assets/images/icon-plus.svg';
const minusIconPath = 'assets/images/icon-minus.svg';

btnIcons.forEach(function (btnIcon) {
    btnIcon.addEventListener('click', function () {
        const currentIconSrc = btnIcon.querySelector('img').getAttribute('src');

        if (currentIconSrc === plusIconPath) {
            btnIcon.querySelector('img').setAttribute('src', minusIconPath);
        } else {
            btnIcon.querySelector('img').setAttribute('src', plusIconPath);
        }
    });
});

accordionHeaders.forEach( function(header) {
    header.querySelector('button').addEventListener('click', function(){
        const accordionContent = header.nextElementSibling;
        if(accordionContent.style.display === 'block' || accordionContent.style.display === '') {
            accordionContent.style.display = 'none'
            // header.style.color = 'hsl(292, 42%, 14%)'
            header.classList.remove('selected');
            openAccordion = null

        } else {
            if (openAccordion) {
                openAccordion.nextElementSibling.style.display = 'none'
                openAccordion.classList.remove('selected')
            }

            accordionContent.style.display = 'block';
            // header.style.color = 'hsl(293, 66%, 61%)'
            header.classList.add('selected');
            openAccordion = header
        }
    
    })
})