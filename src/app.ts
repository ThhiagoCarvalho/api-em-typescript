// src/routes/routerUsuario.ts
import express, {Request,Response} from 'express';
import routerUsuario from './routes/routerUsuario';

const app = express ();
const port = 3000;


app.use ( express.json())

app.use('/usuarios/', routerUsuario)
app.listen(port, () =>  
    console.log("Servidor rodando na porta 3000!")
)
