const enviroment = 'DEV';

export const myProxy = enviroment === 'DEV' ? 'http://localhost:3300' : 'http://18.116.42.126';