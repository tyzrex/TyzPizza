import {  Response, NextFunction } from 'express';
import * as admin from "firebase-admin";
import { AuthorizedRequest } from '../types/types';

export const isAuthenticated = async (req: AuthorizedRequest, res: Response, next: NextFunction): Promise<any> => {
    if (!req.headers.authorization) {
        return res.status(500).send("Token Not Found");
    }
    const token:string = req.headers.authorization.split(" ")[1];

    try {
        console.log("Verifying token");
        const user = await admin.auth().verifyIdToken(token as string);
        if(!user){
            return res.status(401).send("Unauthorized");
        }
        console.log("Token verified");
        //pass user to next middleware
        req.user =  user;
        next();
    }
    catch (err) {
        console.log(err);
        return res.status(401).send("Unauthorized");
    }
}
