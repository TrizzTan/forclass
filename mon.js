window.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('#monster-section img');
  const overlay = document.getElementById('monster-section imgoverlay');

  images.forEach((image) => {
    image.addEventListener('click', (event) => {
      const name = image.getAttribute('data-name');
      const age = image.getAttribute('data-age');
      const location = image.getAttribute('data-location');
      const imagePath = image.getAttribute('data-img');

      alert(`Name: ${name}\nEntity: ${age}\nTraits: ${location}`);

      document.getElementById('monster-section body').style.backgroundImage = `url(${imagePath})`;

      if (imagePath.endsWith('elephantbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('crashbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('spiderbg.png')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('octo.png')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('maskbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('bearbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('goarbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('monkeybg.png')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('sludgebg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else if (imagePath.endsWith('rhbg.jpg')) {
        document.getElementById('monster-section body').classList.add('blur');
      } else {
        document.getElementById('monster-section body').classList.remove('blur');
      }
    });

    image.addEventListener('mouseenter', (event) => {
      overlay.innerHTML = '';
      const clonedImage = image.cloneNode(true);
      clonedImage.style.width = '100%';
      clonedImage.style.height = '100%';
      overlay.appendChild(clonedImage);
      overlay.style.display = 'block';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    document.getElementById('monster-section body').style.transition = 'background-image 0.5s';
    document.getElementById('monster-section body').style.backgroundImage = 'none';
    document.getElementById('monster-section body').classList.remove('blur');
  });
});
