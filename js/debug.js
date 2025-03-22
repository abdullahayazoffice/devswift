document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded successfully');
  
  // Check if images are loading properly
  const images = document.querySelectorAll('img');
  console.log(`Total images on page: ${images.length}`);
  
  images.forEach((img, index) => {
    img.addEventListener('error', function() {
      console.error(`Failed to load image #${index}: ${img.src}`);
    });
    
    if (img.complete) {
      if (img.naturalHeight === 0) {
        console.error(`Image #${index} failed to load: ${img.src}`);
      } else {
        console.log(`Image #${index} loaded successfully: ${img.src}`);
      }
    }
  });
});
