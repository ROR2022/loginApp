import User from "../models/user.model.js";
import bcrypt from "bcrypt";


export const getAllUsers = (req, res) => {
    res.send("Get all users");
};

export const getUser = (req, res) => {
    res.send("Get user");
};

export const createUser = (req, res) => {
    res.send("Create user");
}

export const updateUser = (req, res) => {
    res.send("Update user");
}

export const deleteUser = (req, res) => {
    res.send("Delete user");
}

export const loginUser = async(req, res) => {
    try {
        const dataUser= req.body;
        const {email, password} = dataUser;
        //compare password
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(400).json({message: "Invalid credentials"});
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(`Error loginUser: ${error}`);
        return res.status(500).json({message: "Error loginUser" , error: String(error)});
    }
}

export const signupUser = async(req, res) => {
    try {
        const dataUser= req.body;
        const hash = await bcrypt.hash(dataUser.password, 10);
        dataUser.password = hash;
        const newUser = new User(dataUser);
        await newUser.save();
        return res.status(201).json(newUser);
        
    } catch (error) {
        console.log(`Error signupUser: ${error}`);
        return res.status(500).json({message: "Error signupUser", error:String(error)});
    }
}
