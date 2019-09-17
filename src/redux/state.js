let state = {
  profilePage: {
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
    ]
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Dima'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Lena'},
      {id: 4, name: 'Sveta'},
      {id: 5, name: 'Sasha'},
      {id: 6, name: 'Victor'}
    ],
    messages: [
      {
        id: 1,
        content: 'Hi!'
      },
      {
        id: 2,
        content: 'How are u?!'
      },
      {
        id: 3,
        content: "The weather is good isn't it?"
      }
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    content: postMessage,
    likesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  console.log(state.profilePage.postsData);
}

export default state;
