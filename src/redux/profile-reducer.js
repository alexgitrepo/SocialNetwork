const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
let profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {id: 4, message: state.newPostText, count: '20'};
        state.myPostsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
   }
  }


export default profileReducer