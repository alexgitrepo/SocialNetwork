import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

it('length of posts should be increased ', function () {
    let action =addPostActionCreator({post:"it-MotherFucker Kamasutra"})
    let state={myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
            {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
            {id: 3, message: 'Mm. Goodbye', count: '0'}]}


            let newState=profileReducer(state,action)

    expect(newState.myPostsData.length).toBe(4)
});



it('New message is correctly added', function () {
    let action =addPostActionCreator({post:"it-MotherFucker Kamasutra"})
    let state={myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
            {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
            {id: 3, message: 'Mm. Goodbye', count: '0'}]}


    let newState=profileReducer(state,action)
    expect(newState.myPostsData[3].message).toBe("it-MotherFucker Kamasutra")
});

it('myPostData.length should be decremented', function () {
    let action =deletePost(1)
    let state={myPostsData: [{id: 1, message: 'HI man. Give me your bag', count: '10'},
            {id: 2, message: 'What did you say? Crazy mother fucker!', count: '20'},
            {id: 3, message: 'Mm. Goodbye', count: '0'}]}
    let newState=profileReducer(state,action)
    expect(newState.myPostsData.length).toBe(2)
});