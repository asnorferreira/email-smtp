import express from 'express';
import { login } from '../controller/login.js';

export const router = express();

router.post('/login', login);