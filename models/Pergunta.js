"use strict";
const app = require("teem");
class Pergunta {
    static async listar() {
        let lista = null;
        await app.sql.connect(async (sql) => {
            lista = (await sql.query("select idperguntas, pergunta, resposta1, resposta2, resposta3, fase from perguntas order by idperguntas asc"));
        });
        return lista || [];
    }
    static async obter(id) {
        let lista = null;
        await app.sql.connect(async (sql) => {
            lista = (await sql.query("select idperguntas, pergunta, resposta1, resposta2, resposta3, fase from perguntas where idperguntas = ?", [
                id,
            ]));
        });
        return (lista && lista[0]) || null;
    }
    static async criar(p) {
        let erro;
        await app.sql.connect(async (sql) => {
            try {
                await sql.query("insert into perguntas (idperguntas, pergunta, resposta1, resposta2, resposta3, fase ) values (?,?,?,?,?,?)", [p.idperguntas, p.pergunta, p.resposta1, p.resposta2, p.resposta3, p.fase]);
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = `A Pergunta ${p.pergunta} já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
    static async alterar(p) {
        let erro;
        await app.sql.connect(async (sql) => {
            try {
                await sql.query("update perguntas set idperguntas = ?, pergunta= ?, resposta1= ?, resposta2= ?, resposta3= ?, fase where idperguntas = ?", [
                    p.idperguntas, p.pergunta, p.resposta1, p.resposta2, p.resposta3, p.fase
                ]);
                if (!sql.affectedRows)
                    erro = "Usuario não encontrado";
            }
            catch (e) {
                if (e.code && e.code === "ER_DUP_ENTRY")
                    erro = ` A Pergunta ${p.pergunta} já existe`;
                else
                    throw e;
            }
        });
        return erro;
    }
    static async excluir(id) {
        let erro = null;
        await app.sql.connect(async (sql) => {
            await sql.query("delete from perguntas where id = ?", [id]);
            if (!sql.affectedRows)
                erro = "Usuario não encontrado";
        });
        return erro;
    }
}
module.exports = Pergunta;
//# sourceMappingURL=Pergunta.js.map