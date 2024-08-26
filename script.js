var menuIcon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainContainer = document.querySelector(".mainContainer")


menuIcon.onclick = function(){
    sidebar.classList.toggle("smaller-sidebar")
    mainContainer.classList.toggle("larger-mainContainer")
    console.log("menu icon clicked");
    
}
var commentInput = document.querySelector('.writeCommentContainer input');
var previousCommentsContainer = document.querySelector('.previousCommentsContainer');
var commentCountElement = document.querySelector('.commentContainer h1'); 
var defaultChannelIconSrc = './images/images/myImg.png'; 

function updateCommentCount() {
    var comments = previousCommentsContainer.getElementsByClassName('previousComments');
    var commentCount = comments.length;
    commentCountElement.textContent = `${commentCount} Comments`;
}


function addComment() {

    var commentText = commentInput.value.trim();

    if (commentText) {
        var newComment = document.createElement('div');
        newComment.classList.add('previousComments', 'd-flex');
        newComment.innerHTML = `
            <img class="channelIcon" src="${defaultChannelIconSrc}" alt="" />
            <div class="nameAndComment">
                <p class="channelName">@LetsUpgrade</p>
                <p class="comment">${commentText}</p>
            </div>
        `;

        previousCommentsContainer.appendChild(newComment);
        commentInput.value = '';
        updateCommentCount();
    }
}

commentInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addComment();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    updateCommentCount();
});
