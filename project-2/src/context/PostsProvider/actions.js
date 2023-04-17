import * as types from './types';

export const loadPosts = async (dispatch) => {
  dispatch({ type: types.POST_LOADING });

  setTimeout(async () => {
    const postsRaw = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await postsRaw.json();
    dispatch({ type: types.POST_SUCCESS, payload: posts });
  }, 5000);
};
