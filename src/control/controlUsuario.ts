import { Request, Response } from 'express';
import { Usuario } from "../modelo/Usuario";

export const getUsuario = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id, 10);
    try{ 
        
    const user = new Usuario();
    user.id = id;
    const buscarUsuario = await user.get();

    const objResposta = { 
        status  : true,
        dados : buscarUsuario ?  buscarUsuario : "Usuario nao encontrado!" 
    }
    res.json(objResposta);
    
  }catch (error)  {
    res.status(500).json({ status: false, error: "Erro ao buscar usuário" });
  }
};


export const createUsuario = async (req: Request, res: Response) => {
    const nomeUsuario : string  = req.body.nomeUsuario
    const emailUsuario : string  = req.body.emailUsuario
    const senhaUsuario : string  = req.body.senhaUsuario
    const dataNascimento : Date  = req.body.dataNascimento

    console.log(req.body)

    try{ 
        
        const user = new Usuario();
        user.nomeUsuario = nomeUsuario;

        user.emailUsuario = emailUsuario;
        user.senhaUsuario = senhaUsuario;
        user.dataNascimento = dataNascimento;
        console.log("nome"  + user.nomeUsuario)

        const criarUsuario = await user.create();

        const objResposta = { 
            status  : true,
            dados : criarUsuario ?  criarUsuario : "Usuario nao encontrado!" 
        }
        res.json(objResposta);
        
    }catch (error)  {
        res.status(500).json({ status: false, error: "Erro ao criar usuário" });
    }
};


export const updateUsuario = async (req: Request, res: Response) => {
    const idUsuario: number = parseInt(req.params.id, 10)
    const nomeUsuario : string  = req.body.nomeUsuario
    const emailUsuario : string  = req.body.emailUsuario
    const senhaUsuario : string  = req.body.senhaUsuario
    const dataNascimento : Date  = req.body.dataNascimento

    try{ 
        const user = new Usuario();
        user.id = idUsuario;
        user.nomeUsuario = nomeUsuario;
        user.emailUsuario = emailUsuario;
        user.senhaUsuario = senhaUsuario;
        user.dataNascimento = dataNascimento;

        const atualizarUsuario = await user.update();

        const objResposta = { 
            status  : true,
            dados : atualizarUsuario ?  atualizarUsuario : "Usuario nao encontrado!" 
        }
        res.json(objResposta);
        
    }catch (error)  {
        res.status(500).json({ status: false, error: "Erro ao atualizar usuário" });
    }
};


export const deleteUsuario = async (req: Request, res: Response) => {
    const idUsuario: number = parseInt(req.params.id, 10)


    try{ 
        const user = new Usuario();
        user.id = idUsuario;

        const deletarUsuario = await user.delete();

        const objResposta = { 
            status  : true,
            dados : deletarUsuario ?  deletarUsuario : "Erro ao deletar!" 
        }
        res.json(objResposta);
        
    }catch (error)  {
        res.status(500).json({ status: false, error: "Erro ao deletar usuário" });
    }
};



