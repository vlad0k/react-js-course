import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
    postsData: [
      {
        id: 1,
        content: 'Hi, there',
        likesCount: 9
      },
      {
        id: 0,
        content: 'My 1st post',
        likesCount: 12
      },
      {
        id: 2,
        content: 'Blah Blah Blah',
        likesCount: 12
      }
    ],
    newPostText: '',
    profile: null,
    status: ''
}

it('length of posts should be incremented', () => {
  // 1. Init  test data
  let action = addPostActionCreator('reactjs.com')

  // 2. Some action
  let newState = profileReducer(state, action);

  // 3. Expectation result
  console.log(newState.postsData.length);
  expect(newState.postsData.length).toBe(4);
  expect(newState.postsData[3].content).toBe('reactjs.com');
});

it('content of new post should be correct', () => {
  // 1. Init  test data
  let action = addPostActionCreator('reactjs.com')

  // 2. Some action
  let newState = profileReducer(state, action);

  // 3. Expectation result
  console.log(newState.postsData.length);
  expect(newState.postsData.length).toBe(4);
  expect(newState.postsData[3].content).toBe('reactjs.com');
});

it('length after deleting should be decremented', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.postsData.length).toBe(2);
})
