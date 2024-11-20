import pool from "../modelo/Banco";
import { ResultSetHeader } from "mysql2";


export class Usuario {
    private _id: number = 0;
    private _nomeUsuario: string = '';
    private _emailUsuario: string = '';
    private _senhaUsuario: string = '';
    private _dataNascimento: Date = new Date();

    constructor(
        id?: number,
        nome?: string,
        email?: string,
        senha?: string,
        dataNascimento?: Date
    ) {
        this.id = id ?? 0; // Valor padrão
        this.nomeUsuario = nome ?? '';
        this.emailUsuario = email ?? '';
        this.senhaUsuario = senha ?? '';
        this.dataNascimento = dataNascimento ?? new Date();
    }

  // Método para buscar usuário no banco
  async get(): Promise<any> {
    const mysql = "SELECT * FROM usuarios WHERE idUsuario = ?";
    try {
      const [rows] = await pool.execute(mysql, [this._id]);
      return rows;
    } catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw new Error("Erro ao buscar usuário no banco");
    }
  }

  async create (): Promise<any> {
    
    const mysql = "insert into usuarios (nomeUsuario,emailUsuario,senhaUsuario,dataNascimento) values (?,?,?,?)";
    try {
      const [rows] = await pool.execute<ResultSetHeader>(mysql, [this._nomeUsuario,this._emailUsuario,this._senhaUsuario,this.dataNascimento]);
      return rows.affectedRows > 0;    
    }catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw new Error("Erro ao criar usuário no banco");
    }
  }


  async update (): Promise<any> {
    
    const mysql = "update usuarios set nomeUsuario =? ,emailUsuario =?,senhaUsuario =?,dataNascimento=? where idUsuario =  ?";
    try {
      const [rows] = await pool.execute<ResultSetHeader>(mysql, [this._nomeUsuario,this._emailUsuario,this._senhaUsuario,this.dataNascimento, this.id]);
      return rows.affectedRows > 0;    
    }catch (error) {
        console.error("Erro ao buscar usuário:", error);
        throw new Error("Erro ao criar usuário no banco");
    }
  }


  async delete (): Promise<any> {
    
    const mysql = "delete from usuarios where idUsuario = ? ";
    try {
      const [rows] = await pool.execute<ResultSetHeader>(mysql, [this.id]);
      return rows.affectedRows > 0;    
    }catch (error) {
        console.error("Erro ao deletar usuário:", error);
        throw new Error("Erro ao deletar usuário no banco");
    }
  }


    get id(): number {
      return this._id;
  }
  set id(value: number) {
      this._id = value;
  }

  // Getter e Setter para nomeUsuario
  get nomeUsuario(): string {
      return this._nomeUsuario;
  }
  set nomeUsuario(value: string) {
      this._nomeUsuario = value;
  }

  // Getter e Setter para emailUsuario
  get emailUsuario(): string {
      return this._emailUsuario;
  }
  set emailUsuario(value: string) {
      this._emailUsuario = value;
  }

  // Getter e Setter para senhaUsuario
  get senhaUsuario(): string {
      return this._senhaUsuario;
  }
  set senhaUsuario(value: string) {
      this._senhaUsuario = value;
  }

  // Getter e Setter para dataNascimento
  get dataNascimento(): Date {
      return this._dataNascimento;
  }
  set dataNascimento(value: Date) {
      this._dataNascimento = value;
  }
}
