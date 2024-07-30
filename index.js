
document.addEventListener('DOMContentLoaded', function () {

   
    // var readMoreLinks = document.querySelectorAll('.read-more');

    // readMoreLinks.forEach(function(link) {
    //     link.addEventListener('click', function() {
    //         var projectDetail = this.closest('.project-detail');
    //         projectDetail.classList.toggle('expanded');
            
    //         if (projectDetail.classList.contains('expanded')) {
    //             this.textContent = 'Read less...';
    //         } else {
    //             this.textContent = 'Read more...';
    //         }
    //     });
    // });

    var projects = document.querySelectorAll(".project-card");
    var span = document.getElementById("close");

    var modal = document.getElementById("modal-id");
    var modalImage = document.getElementById("modal-image");
    var modalText = document.getElementById("modal-text");
    var modalPeriod = document.getElementById("modal-period");
    var modalDetail = document.getElementById("modal-detail");
    var modalLinkGithub = document.getElementById("modal-link-github");
    var modalLinkLiveDemo = document.getElementById("modal-link-liveDemo");
    var modalTag = document.getElementById("modal-tag-container");
    var readMore = document.getElementById('read-more-id');
            
    

   
    projects.forEach(function(p) {
        p.addEventListener('click', function(){
            // alert('Button Clicked!');
            var image = p.querySelector('.project-image').getAttribute("src")
            var text = p.querySelector('.project-text').textContent;
            var period = p.querySelector('.project-period').textContent;
            var detail = p.querySelector('.front-detail').textContent + p.querySelector('.read-more-text').textContent;
            var github = p.querySelector('.project-text').getAttribute("github");
            var liveDemo = p.querySelector('.project-text').getAttribute("liveDemo");
            
            // readMore.style.display = "none";
            // readMore.textContent = " ";
            


            var tagsArray = [];
            var tagParent = p.querySelector(".project-tags");
            var elements = tagParent.querySelectorAll('.project-tag');
            elements.forEach(function(element){
                var tag = element.textContent;
                console.log(tag);
                tagsArray.push(tag);
            });
            console.log(tagsArray);

            modal.style.display = "block";
            modalImage.src = image;
            modalText.textContent = text;
            modalPeriod.textContent = period;
            modalDetail.textContent = detail;
            modalLinkGithub.href = github;
            modalLinkLiveDemo.href = liveDemo;

            modalTag.innerHTML = '';
            for(var i=0; i<tagsArray.length; i++){
                var newDiv = document.createElement('div');
                newDiv.className = "modal-tag";
                newDiv.textContent = tagsArray[i];
                modalTag.appendChild(newDiv);
            }

        });
    })

    span.onclick = function(){
        modal.style.display = "none";
        // readMore.style.display = "inline";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            // readMore.style.display = "inline";
        }
    }
});
