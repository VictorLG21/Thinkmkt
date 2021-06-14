"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const app = require("teem");
class IndexRoute {
    async index(req, res) {
        res.render("index.ejs", {
            layout: "layout",
        });
    }
    async fase(req, res) {
        res.render("fase.ejs", {
            layout: "layout",
        });
    }
    async venceu(req, res) {
        res.render("venceu.ejs", {
            layout: "layout",
        });
    }
    async gameOver(req, res) {
        res.render("gameover.ejs", {
            layout: "layout",
        });
    }
    async fase2(req, res) {
        res.render("fase2.ejs", {
            layout: "layout",
        });
    }
    async fase3(req, res) {
        res.render("fase3.ejs", {
            layout: "layout",
        });
    }
    async fase4(req, res) {
        res.render("fase4.ejs", {
            layout: "layout",
        });
    }
    async fase5(req, res) {
        res.render("fase5.ejs", {
            layout: "layout",
        });
    }
    async fase6(req, res) {
        res.render("fase6.ejs", {
            layout: "layout",
        });
    }
    async fase7(req, res) {
        res.render("fase7.ejs", {
            layout: "layout",
        });
    }
    async fase8(req, res) {
        res.render("fase8.ejs", {
            layout: "layout",
        });
    }
    async fase9(req, res) {
        res.render("fase9.ejs", {
            layout: "layout",
        });
    }
    async criarPergunta(req, res) {
        res.render("criar-pergunta.ejs", {
            layout: "layout",
        });
    }
    async pergunta2(req, res) {
        res.render("pergunta2.ejs", {
            layout: "layout",
        });
    }
    async pergunta3(req, res) {
        res.render("pergunta3.ejs", {
            layout: "layout",
        });
    }
    async pergunta4(req, res) {
        res.render("pergunta4.ejs", {
            layout: "layout",
        });
    }
    async pergunta5(req, res) {
        res.render("pergunta5.ejs", {
            layout: "layout",
        });
    }
    async pergunta6(req, res) {
        res.render("pergunta6.ejs", {
            layout: "layout",
        });
    }
    async pergunta7(req, res) {
        res.render("pergunta7.ejs", {
            layout: "layout",
        });
    }
    async pergunta8(req, res) {
        res.render("pergunta8.ejs", {
            layout: "layout",
        });
    }
    async pergunta9(req, res) {
        res.render("pergunta9.ejs", {
            layout: "layout",
        });
    }
    async pergunta10(req, res) {
        res.render("pergunta10.ejs", {
            layout: "layout",
        });
    }
    async pergunta11(req, res) {
        res.render("pergunta11.ejs", {
            layout: "layout",
        });
    }
    async pergunta12(req, res) {
        res.render("pergunta12.ejs", {
            layout: "layout",
        });
    }
    async pergunta13(req, res) {
        res.render("pergunta13.ejs", {
            layout: "layout",
        });
    }
    async pergunta14(req, res) {
        res.render("pergunta14.ejs", {
            layout: "layout",
        });
    }
    async pergunta15(req, res) {
        res.render("pergunta2.ejs", {
            layout: "layout",
        });
    }
    async pergunta16(req, res) {
        res.render("pergunta2.ejs", {
            layout: "layout",
        });
    }
    async pergunta17(req, res) {
        res.render("pergunta17.ejs", {
            layout: "layout",
        });
    }
    async pergunta18(req, res) {
        res.render("pergunta18.ejs", {
            layout: "layout",
        });
    }
    async pergunta(req, res) {
        res.render("pergunta.ejs", {
            layout: "layout",
        });
        return;
    }
}
__decorate([
    app.route.methodName(app.root + "/fase")
], IndexRoute.prototype, "fase", null);
__decorate([
    app.route.methodName(app.root + "/venceu")
], IndexRoute.prototype, "venceu", null);
__decorate([
    app.route.methodName(app.root + "/gameover")
], IndexRoute.prototype, "gameOver", null);
__decorate([
    app.route.methodName(app.root + "/fase2")
], IndexRoute.prototype, "fase2", null);
__decorate([
    app.route.methodName(app.root + "/fase3")
], IndexRoute.prototype, "fase3", null);
__decorate([
    app.route.methodName(app.root + "/fase4")
], IndexRoute.prototype, "fase4", null);
__decorate([
    app.route.methodName(app.root + "/fase5")
], IndexRoute.prototype, "fase5", null);
__decorate([
    app.route.methodName(app.root + "/fase6")
], IndexRoute.prototype, "fase6", null);
__decorate([
    app.route.methodName(app.root + "/fase7")
], IndexRoute.prototype, "fase7", null);
__decorate([
    app.route.methodName(app.root + "/fase8")
], IndexRoute.prototype, "fase8", null);
__decorate([
    app.route.methodName(app.root + "/fase9")
], IndexRoute.prototype, "fase9", null);
__decorate([
    app.route.methodName(app.root + "/criar-pergunta")
], IndexRoute.prototype, "criarPergunta", null);
__decorate([
    app.route.methodName(app.root + "/pergunta2")
], IndexRoute.prototype, "pergunta2", null);
__decorate([
    app.route.methodName(app.root + "/pergunta3")
], IndexRoute.prototype, "pergunta3", null);
__decorate([
    app.route.methodName(app.root + "/pergunta4")
], IndexRoute.prototype, "pergunta4", null);
__decorate([
    app.route.methodName(app.root + "/pergunta5")
], IndexRoute.prototype, "pergunta5", null);
__decorate([
    app.route.methodName(app.root + "/pergunta6")
], IndexRoute.prototype, "pergunta6", null);
__decorate([
    app.route.methodName(app.root + "/pergunta7")
], IndexRoute.prototype, "pergunta7", null);
__decorate([
    app.route.methodName(app.root + "/pergunta8")
], IndexRoute.prototype, "pergunta8", null);
__decorate([
    app.route.methodName(app.root + "/pergunta9")
], IndexRoute.prototype, "pergunta9", null);
__decorate([
    app.route.methodName(app.root + "/pergunta10")
], IndexRoute.prototype, "pergunta10", null);
__decorate([
    app.route.methodName(app.root + "/pergunta11")
], IndexRoute.prototype, "pergunta11", null);
__decorate([
    app.route.methodName(app.root + "/pergunta12")
], IndexRoute.prototype, "pergunta12", null);
__decorate([
    app.route.methodName(app.root + "/pergunta13")
], IndexRoute.prototype, "pergunta13", null);
__decorate([
    app.route.methodName(app.root + "/pergunta14")
], IndexRoute.prototype, "pergunta14", null);
__decorate([
    app.route.methodName(app.root + "/pergunta15")
], IndexRoute.prototype, "pergunta15", null);
__decorate([
    app.route.methodName(app.root + "/pergunta16")
], IndexRoute.prototype, "pergunta16", null);
__decorate([
    app.route.methodName(app.root + "/pergunta17")
], IndexRoute.prototype, "pergunta17", null);
__decorate([
    app.route.methodName(app.root + "/pergunta18")
], IndexRoute.prototype, "pergunta18", null);
__decorate([
    app.route.methodName(app.root + "/pergunta")
], IndexRoute.prototype, "pergunta", null);
module.exports = IndexRoute;
//# sourceMappingURL=index.js.map