document.addEventListener('DOMContentLoaded', function () {
    var readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            var projectDetail = this.closest('.project-detail');
            projectDetail.classList.toggle('expanded');
            
            if (projectDetail.classList.contains('expanded')) {
                this.textContent = 'Read less...';
            } else {
                this.textContent = 'Read more...';
            }
        });
    });
});
