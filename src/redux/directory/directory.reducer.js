const INITIAL_STATE = {
    sections: [
        {
          title: 'cats',
          imageUrl: 'https://i.imgur.com/oNmSnNN.jpg',
          id: 1,
          linkUrl: 'shop/cats'
        },
        {
          title: 'robots',
          imageUrl: 'https://i.imgur.com/iuLX4wQ.jpg',
          id: 2,
          linkUrl: 'shop/robots'
        },
        {
          title: 'alpacas',
          imageUrl: 'https://i.imgur.com/i3HM70T.jpg',
          id: 3,
          linkUrl: 'shop/alpacas'
        },
        {
          title: 'ducks',
          imageUrl: 'https://i.imgur.com/NUYRuIJ.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/ducks'
        },
        {
          title: 'critterz',
          imageUrl: 'https://i.imgur.com/sdZjFRB.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/critterz'
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;