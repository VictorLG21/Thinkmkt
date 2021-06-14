import app = require("teem");
import Pergunta = require("../models/Pergunta");

class IndexRoute {
  public async index(req: app.Request, res: app.Response) {
    res.render("index.ejs", {
      layout: "layout",
    });
  }
  
  @app.route.methodName( app.root + "/fase")
  public async fase(req: app.Request, res: app.Response) {
    res.render("fase.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/venceu")
  public async venceu(req: app.Request, res: app.Response) {
    res.render("venceu.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/gameover")
  public async gameOver(req: app.Request, res: app.Response) {
    res.render("gameover.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase2")
  public async fase2(req: app.Request, res: app.Response) {
    res.render("fase2.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase3")
  public async fase3(req: app.Request, res: app.Response) {
    res.render("fase3.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase4")
  public async fase4(req: app.Request, res: app.Response) {
    res.render("fase4.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase5")
  public async fase5(req: app.Request, res: app.Response) {
    res.render("fase5.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase6")
  public async fase6(req: app.Request, res: app.Response) {
    res.render("fase6.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase7")
  public async fase7(req: app.Request, res: app.Response) {
    res.render("fase7.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase8")
  public async fase8(req: app.Request, res: app.Response) {
    res.render("fase8.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/fase9")
  public async fase9(req: app.Request, res: app.Response) {
    res.render("fase9.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/criar-pergunta")
  public async criarPergunta(req: app.Request, res: app.Response) {
    res.render("criar-pergunta.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta2")
  public async pergunta2(req: app.Request, res: app.Response) {
    res.render("pergunta2.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta3")
  public async pergunta3(req: app.Request, res: app.Response) {
    res.render("pergunta3.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta4")
  public async pergunta4(req: app.Request, res: app.Response) {
    res.render("pergunta4.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta5")
  public async pergunta5(req: app.Request, res: app.Response) {
    res.render("pergunta5.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta6")
  public async pergunta6(req: app.Request, res: app.Response) {
    res.render("pergunta6.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta7")
  public async pergunta7(req: app.Request, res: app.Response) {
    res.render("pergunta7.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta8")
  public async pergunta8(req: app.Request, res: app.Response) {
    res.render("pergunta8.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta9")
  public async pergunta9(req: app.Request, res: app.Response) {
    res.render("pergunta9.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta10")
  public async pergunta10(req: app.Request, res: app.Response) {
    res.render("pergunta10.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta11")
  public async pergunta11(req: app.Request, res: app.Response) {
    res.render("pergunta11.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta12")
  public async pergunta12(req: app.Request, res: app.Response) {
    res.render("pergunta12.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta13")
  public async pergunta13(req: app.Request, res: app.Response) {
    res.render("pergunta13.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta14")
  public async pergunta14(req: app.Request, res: app.Response) {
    res.render("pergunta14.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta15")
  public async pergunta15(req: app.Request, res: app.Response) {
    res.render("pergunta2.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta16")
  public async pergunta16(req: app.Request, res: app.Response) {
    res.render("pergunta2.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta17")
  public async pergunta17(req: app.Request, res: app.Response) {
    res.render("pergunta17.ejs", {
      layout: "layout",
    });
  }
  @app.route.methodName( app.root + "/pergunta18")
  public async pergunta18(req: app.Request, res: app.Response) {
    res.render("pergunta18.ejs", {
      layout: "layout",
    });
  }

  @app.route.methodName( app.root + "/pergunta")
	public async pergunta(req: app.Request, res: app.Response) {
		
		
			res.render("pergunta.ejs", {
				layout: "layout",
	
			});
			return;
		}


}

export = IndexRoute;
