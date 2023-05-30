// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

import express,{Request,Response} from "express";
import cors from "cors";
import * as functions from "firebase-functions";
// import { config } from "dotenv";
import * as admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/auth";

const params = {               
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url,
    universe_domain : serviceAccount.universe_domain
}

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", AuthRoute);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

admin.initializeApp({
  credential: admin.credential.cert(params)
});

export const api = functions.https.onRequest(app);

app.listen(5000, () => console.log("Server running on port 5000"));

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
