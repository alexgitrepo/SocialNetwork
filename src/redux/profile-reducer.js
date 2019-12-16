const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
let initialState = {myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
        {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
        {id: 3, message: 'Mm. Goodbye', count: '0'}],
    newPostText: ""}
let profileReducer = (state=initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {id: 4, message: state.newPostText, count: '20'};
        state.myPostsData.push(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostText = action.newText;
   }
    return state
  }
export let updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST,
    newText: text
});
export let addPostActionCreator = () => ({type: ADD_POST})

export default profileReducer