const enviroment = 'DEV';

export const myProxy = enviroment === 'DEV' ? 'http://localhost:3300' : 'https://myapp.herokuapp.com';