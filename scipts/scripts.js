//-------------------КОД ДЛЯ ПОЯВЛЕНИЯ SVG------------------------------------------------------------//
let svg = document.getElementById('svg');
let svgLength = svg.getTotalLength();
svg.style.strokeDasharray = svgLength;
svg.style.strokeDashoffset = svgLength;

let style = document.createElement('style');
style.innerHTML = `
  @keyframes sign {
    to {
      stroke-dashoffset: 0;
    }
  }
`;
document.head.appendChild(style);

svg.style.animation = 'sign 1.8s ease';
svg.style.animationFillMode = 'forwards';

svg.addEventListener('animationend', function() {
  svg.style.animation = '';
  svg.style.strokeDashoffset = '';
  svg.style.strokeDasharray = '';
  document.head.removeChild(style);

  const svgElement = document.querySelector('#svg-container path');
  
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  function bendLine(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetY = (mouseY - centerY) / 100;
    const offsetX = (mouseX - centerX) / 60; 
    const controlX1 = 258.396 + offsetX * 10; 
    const controlY1 = 741.05 + offsetY * 10;
    const controlX2 = 626.859 + offsetX * 15;
    const controlY2 = 949.876 + offsetY * 15;
    const controlX3 = 236.405 + offsetX * 20;
    const controlY3 = 1021 + offsetY * 20;
    const controlX4 = 353.857 + offsetX * 20;
    const controlY4 = 454.613 + offsetY * 20;
    const controlX5 = 950.615 + offsetX * 10;
    const controlY5 = 650.727 + offsetY * 10;
    const controlX7 = 94 + offsetX * -6;
    const controlY8 = 1 + offsetX * -3;
    const controlX9 = 928 + offsetX * 3;

    const newPath = `
    M${controlX9} 3
    C${controlX1} ${controlY1}, ${controlX2} ${controlY2}, 928.624 1021
    C${controlX3} ${controlY3}, ${controlX4} ${controlY4}, ${controlY8} ${controlX7},
    C1 733.565, ${controlX5} ${controlY5}, ${controlX9} 3Z
    `;

    svgElement.setAttribute('d', newPath);
  }

  window.addEventListener('mousemove', bendLine);
});
