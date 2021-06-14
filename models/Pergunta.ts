import app = require("teem");

class Pergunta {
  public idperguntas: number;
  public pergunta:String;
  public resposta1:String;
  public resposta2:String;
  public resposta3:String;
  public fase:String;

 
  public static async listar(): Promise<Pergunta[]> {
    let lista: Pergunta[] = null;

    await app.sql.connect(async (sql: app.Sql) => {
      lista = (await sql.query(
        "select idperguntas, pergunta, resposta1, resposta2, resposta3, fase from perguntas order by idperguntas asc"
      )) as Pergunta[];
    });

    return lista || [];
  }

  public static async obter(id: number): Promise<Pergunta> {
    let lista: Pergunta[] = null;

    await app.sql.connect(async (sql: app.Sql) => {
      lista = (await sql.query("select idperguntas, pergunta, resposta1, resposta2, resposta3, fase from perguntas where idperguntas = ?", [
        id,
      ])) as Pergunta[];
    });

    return (lista && lista[0]) || null;
  }

  public static async criar(p: Pergunta): Promise<string> {
    let erro: string;
    

    await app.sql.connect(async (sql: app.Sql) => {
      try {
        await sql.query("insert into perguntas (idperguntas, pergunta, resposta1, resposta2, resposta3, fase ) values (?,?,?,?,?,?)", [p.idperguntas, p.pergunta, p.resposta1, p.resposta2, p.resposta3, p.fase]);
      } catch (e) {
        if (e.code && e.code === "ER_DUP_ENTRY")
          erro = `A Pergunta ${p.pergunta} já existe`;
        else throw e;
      }
    });

    return erro;
  }

  public static async alterar(p: Pergunta): Promise<string> {
    let erro: string;

    await app.sql.connect(async (sql: app.Sql) => {
      try {
        await sql.query("update perguntas set idperguntas = ?, pergunta= ?, resposta1= ?, resposta2= ?, resposta3= ?, fase where idperguntas = ?", [
          p.idperguntas, p.pergunta, p.resposta1, p.resposta2, p.resposta3, p.fase
        ]);
        if (!sql.affectedRows) erro = "Usuario não encontrado";
      } catch (e) {
        if (e.code && e.code === "ER_DUP_ENTRY")
          erro = ` A Pergunta ${p.pergunta} já existe`;
        else throw e;
      }
    });

    return erro;
  }

  public static async excluir(id: number): Promise<string> {
    let erro: string = null;

    await app.sql.connect(async (sql: app.Sql) => {
      await sql.query("delete from perguntas where id = ?", [id]);
      if (!sql.affectedRows) erro = "Usuario não encontrado";
    });

    return erro;
  }
}

export = Pergunta;
