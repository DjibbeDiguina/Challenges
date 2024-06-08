document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');

    photos.forEach(photo => {
        photo.addEventListener('mouseover', function() {
            const knowMoreLink = photo.querySelector('.know-more');
            if (knowMoreLink) {
                knowMoreLink.style.display = 'inline-block';
            }
        });

        photo.addEventListener('mouseout', function() {
            const knowMoreLink = photo.querySelector('.know-more');
            if (knowMoreLink) {
                knowMoreLink.style.display = 'none';
            }
        });
    });
});
