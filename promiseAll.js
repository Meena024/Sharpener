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

async function handlePostCreationAndDeletion() {
  try{
    await createPost({ title: "New Post" });
    const updatedActivityTime = await updateLastUserActivityTime();
    console.log("Posts:", posts); 
    console.log("Last Activity Time:", updatedActivityTime);
    const deletedPost1 = await deletePost();
    console.log("Deleted Post:", deletedPost1);
    console.log("Remaining Posts:", posts);
    const deletedPost2 = await deletePost();
    console.log("Deleted Post:", deletedPost2);
    console.log("Remaining Posts:", posts);
  } catch(err){
    console.log(err);
  }
}
handlePostCreationAndDeletion();
