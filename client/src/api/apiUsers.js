
import {myProxy} from '../assets/enviroment';
import axios from 'axios';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${myProxy}/api/users`);
        return response.data;
    } catch (error) {
        console.error(`Error en getUsers: ${error}`);
        return error;
    }
};

export const getUser = async (email) => {
    try {
        const response = await axios.get(`${myProxy}/api/users/${email}`);
        return response.data;
    } catch (error) {
        console.error(`Error en getUser: ${error}`);
        return error;
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${myProxy}/api/users`, user);
        return response.data;
    } catch (error) {
        console.error(`Error en createUser: ${error}`);
        return error;
    }
};

export const updateUser = async (email, user) => {
    try {
        const response = await axios.put(`${myProxy}/api/users/${email}`, user);
        return response.data;
    } catch (error) {
        console.error(`Error en updateUser: ${error}`);
        return error;
    }
};

export const deleteUser = async (email) => {
    try {
        const response = await axios.delete(`${myProxy}/api/users/${email}`);
        return response.data;
    } catch (error) {
        console.error(`Error en deleteUser: ${error}`);
        return error;
    }
};

export const loginUser = async (user) => {
    try {
        const response = await axios.post(`${myProxy}/api/login`, user);
        return response;
    } catch (error) {
        console.error(`Error en loginUser: ${error}`);
        return error;
    }
};

export const signupUser = async (user) => {
    try {
        const response = await axios.post(`${myProxy}/api/signup`, user);
        return response;
    } catch (error) {
        console.error(`Error en signupUser: ${error}`);
        return error;
    }
};