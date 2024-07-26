
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

    var projects = document.querySelectorAll(".project-card");
    var span = document.getElementById("close");

    var modal = document.getElementById("modal-id");
    var modalImage = document.getElementById("modal-image");
    var modalText = document.getElementById("modal-text");
    var modalPeriod = document.getElementById("modal-period");
    var modalDetail = document.getElementById("modal-detail");
    // var modalGithub = document.getElementById("modal-github");
    // var modalLiveDemo = document.getElementById("modal-liveDemo");

   
    projects.forEach(function(p) {
        p.addEventListener('click', function(){
            // alert('Button Clicked!');
            var image = p.querySelector('.project-image').getAttribute("src")
            var text = p.querySelector('.project-text').textContent;
            var period = p.querySelector('.project-period').textContent;
            var detail = p.querySelector('.project-detail').textContent;
                

            modal.style.display = "block";
            modalImage.src = image;
            modalText.textContent = text;
            modalPeriod.textContent = period;
            modalDetail.textContent = detail;
        });
    })

    span.onclick = function(){
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
