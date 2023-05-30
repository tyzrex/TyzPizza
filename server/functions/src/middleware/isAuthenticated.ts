import {  Response, NextFunction } from 'express';
import * as admin from "firebase-admin";
import { AuthorizedRequest } from '../types/types';

export const isAuthenticated = async (req: AuthorizedRequest, res: Response, next: NextFunction): Promise<any> => {
    let token:string = ""
    
    if (!req.headers.authorization) {
        if (req.cookies.session_token) {
            token = req.cookies.session_token;
        }
        else{
            return res.status(401).send("Unauthorized");
        }
    }
    else{
        token = req.headers.authorization.split("Bearer ")[1];
    }
    if (!token) {
        return res.status(401).send("Unauthorized");
    }
    
    try {
        const user = await admin.auth().verifyIdToken(token as string);
        if(!user){
            return res.status(401).send("Unauthorized");
        }
        //pass user to next middleware
        req.user =  user;
        req.token = token;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).send("Unauthorized");
    }
}
