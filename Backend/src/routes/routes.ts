import express from 'express';
import CharacterController from '../controllers/CharacterController.js';

const router = express.Router();


router.get('/characters', CharacterController.read);
router.post('/characters', CharacterController.create);
router.put('/characters/:id', CharacterController.update);
router.post('/characters/:id', CharacterController.delete);


router.get('/character', CharacterController.readOne);


export default router