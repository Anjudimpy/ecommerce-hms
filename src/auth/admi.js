
// isLoginedIn
export const isLogIn = () => {
    let data = localStorage.getItem('data');
    return data !== null;
  };
  
  // isAdminLoginedIn
  export const isAdminLoginedIn = () => {
    let data = localStorage.getItem('data');
    return data !== null && JSON.parse(data).user.username === 'admin';
  };
  
  // doLogin => set to localStorage
  export const doLogIn = (username, password, next) => {
    // Hardcoded admin credentials
    const adminCredentials = {
      user: {
        username: 'admin', // Hardcoded admin username
        // You can set other admin details here
      },
      token: 'your-admin-token', // Hardcoded admin token or generate dynamically
    };
  
    // Check if the provided username and password match the admin credentials
    if (username === 'admin' && password === '121') {
      localStorage.setItem('data', JSON.stringify(adminCredentials));
      next();
      return true; // Indicate successful login
    } else {
      // Handle incorrect username or password
      console.error('Incorrect username or password');
      return false; // Indicate login failure
    }
  };
  
  // doLogout => remove from localStorage
  export const doLogOut = (next) => {
    localStorage.removeItem('data');
    next();
  };
  
  // getCurrentUserDetail
  export const getCurrentAdminDetail = () => {
    if (isLogIn()) {
      return JSON.parse(localStorage.getItem('data')).user;
    } else {
      return undefined;
    }
  };
  
  // getToken
  export const getToken = () => {
    if (isLogIn()) {
      return JSON.parse(localStorage.getItem('data')).token;
    } else {
      return null;
    }
  };
  