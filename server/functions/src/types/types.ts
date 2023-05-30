import * as admin from 'firebase-admin';
import { Request } from 'express';

export interface AuthorizedRequest extends Request {
    user?: admin.auth.DecodedIdToken;
    token?: string;
}
