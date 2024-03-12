import express from 'express';
import { sendMail, registerMail } from '../controller/index.js';

export const router = express();

router.post('/send', sendMail);
router.post('/register', registerMail);