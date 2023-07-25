function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data not found');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('An unexpected error:', error);
      throw error;
    });
}

function displayPost(post) {
  const postTitle = document.createElement('h2');
  postTitle.innerText = post.title;
  const postBody = document.createElement('p');
  postBody.innerText = post.body;
  const postWrapper = document.createElement('div');
  postWrapper.id = 'postWrapper';
  postWrapper.append(postTitle, postBody);
  const postContainer = document.getElementById('postHolder');

  if (!postContainer.contains(postWrapper)) {
    postContainer.innerHTML = '';
    postContainer.append(postWrapper);
  }
}

function displayComments(comments) {
  const commentContainer = document.createElement('div');
  commentContainer.id = 'commentsContainer';

  const existingCommentsContainer = document.getElementById('commentsContainer');
  if (existingCommentsContainer) {
    existingCommentsContainer.remove();
  }

  comments.forEach(comment => {
    const commentItem = document.createElement('p');
    commentItem.innerText = comment.body;
    commentContainer.append(commentItem);
  });

  const postContainer = document.getElementById('postHolder');
  postContainer.append(commentContainer);
}

document.querySelector('#searchButton').addEventListener('click', () => {
  const postId = document.querySelector('#postId').value;

  if (postId >= 1 && postId <= 100) {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetchData(postUrl)
      .then((post) => {
        displayPost(post);
        document.querySelector('#commentButton').classList.add('visible');

        let isCommentVisible = false;

        document.querySelector('#commentButton').addEventListener('click', () => {
          const commentsContainer = document.querySelector('#commentsContainer');
          if (isCommentVisible) {
            if (commentsContainer) {
              commentsContainer.innerHTML = '';
            }
          } else {
            const commentUrl = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
            fetchData(commentUrl)
              .then(comments => displayComments(comments))
              .catch(error => {
                console.error('Error while fetching comments:', error);
              });
          }
          isCommentVisible = !isCommentVisible;
        });
      })
      .catch(error => {
        console.error('Error while fetching post:', error);
      });
  } else {
    alert("Invalid Post ID. Enter a number from 1 to 100.");
  }
});

