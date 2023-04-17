import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POST_SUCCESS:
      console.log('action.type');
      return { ...state, posts: action.payload, loading: false };
  }
  //switch (action.type) {
  // case types.POST_LOADING:
  // console.log('action.type');
  //  return { loading: true };
  // }
  console.log('não encontrei a action.type');
  return { ...state };
};
