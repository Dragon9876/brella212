
let tabHeaderNodes = document.querySelectorAll('.tabs__left-link');
let tabBodyNodes   = document.querySelectorAll('.tabs__right-item');

console.log(tabBodyNodes);
console.log(tabHeaderNodes);

let = 0;

const showTab = (indx) => {

   tabHeaderNodes.forEach(item => {
      item.classList.remove('active');
   });

   tabBodyNodes.forEach(item => {
      item.style.opacity   = 0;
      item.style.transform = "translateY(-10px)";
   });

   
   tabBodyNodes[indx].style.opacity   = 1;
   tabBodyNodes[indx].style.transform = "translateY(0px)";
   tabHeaderNodes[indx].classList.add('active');
   
};

showTab(0);