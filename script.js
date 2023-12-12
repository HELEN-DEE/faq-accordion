const btnIcons = document.querySelectorAll('.btn-icon');
const plusIconPath = 'assets/images/icon-plus.svg';
const minusIconPath = 'assets/images/icon-minus.svg';

btnIcons.forEach((btnIcon) => {
  btnIcon.addEventListener('click', () => {
    const currentIcon = btnIcon.querySelector('img');
    const currentIconSrc = currentIcon.getAttribute('src');

    currentIcon.setAttribute(
      'src',
      currentIconSrc === plusIconPath ? minusIconPath : plusIconPath
    );
  });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
  header.querySelector('button').addEventListener('click', () => {
    const accordionContent = header.nextElementSibling;

    accordionHeaders.forEach((otherHeader) => {
      if (otherHeader !== header) {
        otherHeader.nextElementSibling.classList.remove('show');
        otherHeader.classList.remove('hovered');

        return
      } 
    });
    
    accordionContent.classList.toggle('show');
    header.classList.toggle('hovered')

    
  });
});
