const posts = [];
let lastActivityTime;

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("No posts to delete");
      }
    }, 1000);
  });
}

function handlePostCreationAndDeletion() {
  const createPostPromise = createPost({ title: "New Post" });
  const updateActivityPromise = updateLastUserActivityTime();

  Promise.all([createPostPromise, updateActivityPromise])
    .then(([_, updatedActivityTime]) => {
      console.log("Posts:", posts); 
      console.log("Last Activity Time:", updatedActivityTime);
      return deletePost();
    })
    .then((deletedPost) => {
      console.log("Deleted Post:", deletedPost);
      console.log("Remaining Posts:", posts);
      return deletePost();
    })
    .then((deletedPost) => {
      console.log("Deleted Post:", deletedPost);
      console.log("Remaining Posts:", posts);
    })
    .catch((error) => console.log(error));
}

handlePostCreationAndDeletion();
