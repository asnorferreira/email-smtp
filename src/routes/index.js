import express from 'express';
import { sendMail } from '../controller/index.js';

export const router = express();

router.post('/send', sendMail);