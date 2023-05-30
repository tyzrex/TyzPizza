import {  Response } from 'express';
// import * as admin from "firebase-admin";
import { AuthorizedRequest } from '../types/types';

export const loginUser = async (req: AuthorizedRequest, res: Response) => {
    try{
        const user = req.user;
        const token = req.token;
        if(user){
            return res.cookie("session_token", token, {
                httpOnly: true,
                secure: false,
            }).json({
                message: "User logged in successfully",
                user: user
            })
        }
        else{
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

export const getUser = async (req: AuthorizedRequest, res: Response) => {
    try{
        const user = req.user;
        if(user){
            return res.json({
                message: "User found",
                user: user
            })
        }
        else{
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


