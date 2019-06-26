const registerUser = async user => {
  try {
    const response = await fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (response.status !== 200) {
      // how to throw an error ??
    }
    const data = await response.json();
    return {
      user: {
        username: data.username,
        email: data.email,
      },
      code: response.status,
    };
  } catch (err) {
    console.log(err);

    switch (err.status) {
      case 400: {
        throw err;
      }
      case 422: {
        throw err;
      }
      case 409: {
        if (err.message.contains('username')) {
          err.errors = { username: 'Username is taken' };
        } else if (err.message.contains('email')) {
          err.errors = { email: 'Email address is already used for another account' };
        }
        throw err;
      }
      default: {
        throw err;
      }
    }
  }
};

export default {
  registerUser,
};
