var getUser = (id , callback) => {
   user = {
      id: id,
      name: 'Ahmad'
    };
    callback(user);
  };
getUser(32, (userObject) => {
  console.log(userObject);
});
