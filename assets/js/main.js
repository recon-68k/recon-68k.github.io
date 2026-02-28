function fixRetinaImage(img) {
  function setHalfSize() {
    if (img.naturalWidth) {
      img.style.maxWidth = (img.naturalWidth / 2) + 'px';
      img.style.maxHeight = (img.naturalHeight / 2) + 'px';
    }
  }
  if (img.complete && img.naturalWidth) {
    setHalfSize();
  } else {
    img.addEventListener('load', setHalfSize);
  }
}

// Watch for any images GLightbox inserts into the DOM
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    mutation.addedNodes.forEach(function(node) {
      if (node.nodeType === 1) {
        if (node.tagName === 'IMG' && node.closest('.gslide-image')) {
          fixRetinaImage(node);
        }
        node.querySelectorAll && node.querySelectorAll('.gslide-image img').forEach(fixRetinaImage);
      }
    });
  });
});
observer.observe(document.body, { childList: true, subtree: true });

const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  zoomable: false
});
