// DOM 선택부
const checkicon = document.getElementById('checkicon'); // querySelector로 하나만 선택
const uncheckedSvg = checkicon.querySelector('.unchecked-svg');
const checkedSvg = checkicon.querySelector('.checked-svg');
uncheckedSvg.style.display = 'block';
checkedSvg.style.display = 'none';
let isChecked = false;

checkicon.addEventListener('click', () => {
  if (isChecked) {
    uncheckedSvg.style.display = 'block';
    checkedSvg.style.display = 'none';
  } else {
    uncheckedSvg.style.display = 'none';
    checkedSvg.style.display = 'block';
  }
  isChecked = !isChecked;
});
