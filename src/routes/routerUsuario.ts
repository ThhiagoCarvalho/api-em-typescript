import { Router } from 'express';
import { getUsuario, createUsuario, updateUsuario, deleteUsuario } from "../control/controlUsuario";

const router = Router();

router.get('/:id', getUsuario);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

export default router;