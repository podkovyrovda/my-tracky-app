const initialState = {
  users: [
    {"id":"104161225096562908764","name":"Денис Подковыров","userpic":"https://lh6.googleusercontent.com/-9U-a0eZaaVI/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfx3o1GpxkHQV9we2dmeyAcfDm5Pg/mo/photo.jpg"},
    {"id":"110153972381158199734","name":"Пкуфен Подковыров","userpic":'https://lh6.googleusercontent.com/-CBFR5qXyXvM/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfbgvIR9QGUUGOfGgXlYNh8SEQmTg/mo/photo.jpg'},
    {"id":"110836739529256586256","name":"Андрей Подковыров","userpic":'https://lh6.googleusercontent.com/-XkwZ5yPuIXU/AAAAAAAAAAI/AAAAAAAAJPE/8fH96to16wk/photo.jpg'}
  ]
};

const userReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
}

export default userReducer;