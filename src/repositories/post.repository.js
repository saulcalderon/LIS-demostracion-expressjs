const blogPosts = [
  {
    id: 1,
    title: 'First Post',
    content: 'This is the first post',
  },
  {
    id: 2,
    title: 'Second Post',
    content: 'This is the second post',
  },
  {
    id: 3,
    title: 'Third Post',
    content: 'This is the third post',
  },
];

const get = () => {
  return blogPosts;
};

const getOne = (id) => {
  return blogPosts.find((post) => post.id === parseInt(id));
};

const createOne = (post) => {
  const newPost = {
    id: blogPosts.length + 1,
    title: post.title,
    content: post.content,
  };
  blogPosts.push(newPost);
  return newPost;
};

const updateOne = (id, post) => {
  const postToUpdate = blogPosts.find((post) => post.id === parseInt(id));

  postToUpdate.title = post.title;
  postToUpdate.content = post.content;
  return postToUpdate;
};

const deleteOne = (id) => {
  const postToDelete = blogPosts.find((post) => post.id === parseInt(id));
  blogPosts.splice(blogPosts.indexOf(postToDelete), 1);
  return postToDelete;
};

module.exports = {
  blogPosts,
  get,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
