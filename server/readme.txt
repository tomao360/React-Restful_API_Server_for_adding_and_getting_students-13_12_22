npm init --yes
tsc --init
npm i express
npm i @types/express
npm i cors
npm i @types/cors
npm i dotenv

import express, { Request, Response } from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
app.use(express.json());
app.use(cors());