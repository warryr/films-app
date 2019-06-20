const userSchema = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      required: true,
      minLength: 3,
    },
    email: {
      type: 'string',
      required: true,
      pattern: '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/',
    },
    password: {
      type: 'string',
      required: true,
      minLength: 6,
    },
  },
};

export default userSchema;
