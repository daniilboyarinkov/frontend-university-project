document.addEventListener('DOMContentLoaded', function() {
  const allDetails = document.querySelectorAll('.accordion__item');

  allDetails.forEach((details) => {
    details.addEventListener('toggle', function() {
      if (this.open) {
        allDetails.forEach((otherDetails) => {
          if (otherDetails !== this) {
            otherDetails.open = false;
          }
        });
      }
    });
  });
});
