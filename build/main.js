webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connexion_connexion__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_article_article__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_articles_utilisateur__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_articles__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotificationsPage = (function () {
    function NotificationsPage(nav, artUsers, Arts, alertCtrl, modalCtrl) {
        this.nav = nav;
        this.artUsers = artUsers;
        this.Arts = Arts;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.utilisateur = this.artUsers.utilisateur;
        this.Arts.obtenirArticle().then(function (data) {
            _this.articles = data;
            _this.articlesRelatifs = _this.articles.filter(function (article) {
                var k = 0;
                for (var i in article.cible) {
                    if (article.cible[i].matricule.toLowerCase() == _this.utilisateur.user_id) {
                        k = k + 1;
                    }
                }
                return k > 0;
            });
            _this.articlesRelatifsRecents = _this.articlesRelatifs.sort(function (a, b) {
                a = new Date(a.datePost);
                b = new Date(b.datePost);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            _this.articlesUtilisateur = _this.articlesRelatifsRecents;
            _this.artUsers.obtenirDonnees().then(function (data) {
                _this.articlesLus = data;
                for (var i in _this.articlesLus) {
                    for (var j in _this.articlesUtilisateur) {
                        if (_this.articlesUtilisateur[j]._id == _this.articlesLus[i]._id) {
                            _this.articlesUtilisateur[j].estLu = true;
                        }
                    }
                }
            });
        });
    };
    NotificationsPage.prototype.ouvrirArticle = function (article) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__components_article_article__["a" /* ArticleComponent */], {
            article: article
        });
        modal.present();
    };
    NotificationsPage.prototype.deconnexion = function () {
        this.artUsers.deconnexion();
        this.utilisateurs = null;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__connexion_connexion__["a" /* ConnexionPage */]);
    };
    NotificationsPage.prototype.deleteTodo = function (todo) {
        this.artUsers.supprimerArticleUtilisateur(todo);
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-notifications',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\notifications\notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notifications</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="deconnexion()"><ion-icon name="power"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <p> Votre nom ou votre numéro matricule a été cité dans les documents suivants: </p>\n\n<ion-list>\n      <button ion-item [ngClass]="{\'Lu\': article.estLu}" *ngFor="let article of articlesRelatifsRecents" (click)="ouvrirArticle(article)">\n        <ion-grid>\n          <ion-row >\n            <ion-col><h2 [ngClass]="{\'nonLu\': !article.estLu}">{{article.auteur}} </h2></ion-col>\n            <ion-col text-right>\n              <h4><i> {{article.datePost | tempsrelatif}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-badge color= "light2">{{article.tags[[0]]}}</ion-badge>\n        <p [ngClass]="{\'nonLu\': !article.estLu}">{{article.titre}}</p>\n      </button>\n    </ion-list>\n\n</ion-content>\n \n\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\notifications\notifications.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */], __WEBPACK_IMPORTED_MODULE_5__providers_articles__["a" /* Articles */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], NotificationsPage);
    return NotificationsPage;
}());
//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_cible_details_cible__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleComponent = (function () {
    function ArticleComponent(viewCtrl, params, modalCtrl, articles, artUser) {
        var _this = this;
        this.viewCtrl = viewCtrl;
        this.params = params;
        this.modalCtrl = modalCtrl;
        this.articles = articles;
        this.artUser = artUser;
        this.Actif = "primary";
        this.Inactif = "";
        this.article = params.get('article');
        this.slideCount = 1;
        this.sliderOptions = {
            pager: false,
            autoplay: 0,
            loop: false,
            initialSlide: 0,
            speed: 300,
            direction: 'horizontal'
        };
        setTimeout(function () {
            _this.slider.slideTo(1, 300);
        }, 750);
        this.artUser.obtenirDonnees().then(function (data) {
            if (typeof (data) != 'undefined') {
                // fouille pour recupérer l'id de l'article savoir si l'article est favori; le cas echeant, k>0
                _this.lambda = data;
                for (var i in _this.lambda) {
                    if (_this.lambda[i]._id == _this.article._id) {
                        _this.articleSelectionne = _this.lambda[i];
                    }
                }
                console.log(_this.articleSelectionne);
                if (typeof _this.articleSelectionne == 'undefined') {
                    _this.couleurFavori = _this.Inactif;
                }
                else {
                    if (_this.articleSelectionne.estFavori == true) {
                        _this.couleurFavori = _this.Actif;
                    }
                    else
                        _this.couleurFavori = _this.Inactif;
                }
            }
        });
    }
    ArticleComponent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavorisPage');
        //this.article.estLu = true;
        //this.favori = this.articleSelectionne.estFavori;
        // Inscription dans la liste des articles lus
        this.artUser.maj({
            _id: this.article._id //,
        });
    };
    ArticleComponent.prototype.fermer = function () {
        var _this = this;
        // fermeture slider
        this.slider.slideTo(0, 300);
        setTimeout(function () {
            _this.viewCtrl.dismiss();
        }, 750);
    };
    ArticleComponent.prototype.onSlideChanged = function (index) {
        this.slideCount = index + 1;
    };
    ArticleComponent.prototype.afficherDetails = function (cible) {
        var detailModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__details_cible_details_cible__["a" /* DetailsCibleComponent */], {
            cible: cible, source: this.article.source
        });
        detailModal.present();
    };
    ArticleComponent.prototype.choisirFavori = function () {
        var _this = this;
        this.artUser.obtenirDonnees().then(function (data) {
            // fouille pour recupérer l'id de l'article savoir si l'article est favori; le cas echeant, k>0
            _this.lambda = data;
            for (var i in _this.lambda) {
                if (_this.lambda[i]._id == _this.article._id) {
                    _this.articleSelectionne = _this.lambda[i];
                }
            }
            // si l'article est favori, on change son statut de favori puis on met à jour le statut
            if (_this.articleSelectionne.estFavori) {
                _this.articleSelectionne.estFavori = false;
                _this.couleurFavori = "";
            }
            else {
                _this.articleSelectionne.estFavori = true;
                _this.couleurFavori = "primary";
            }
            ;
            // Mise à jour du statut de favori
            _this.artUser.maj({
                _id: _this.article._id,
                _rev: _this.articleSelectionne._rev,
                estFavori: _this.articleSelectionne.estFavori
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('mySlider'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], ArticleComponent.prototype, "slider", void 0);
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'article',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\components\article\article.html"*/'\n<ion-content>\n  <ion-slides #mySlider [options]="sliderOptions">\n\n    <ion-slide padding class="article-background" [style.background-image]="\'url(\'+article.imageUrl+\')\'">\n      <section class="article-title">\n        <h1>{{article.datePost | moment:["LL"]}}</h1>\n        <h4>{{article.titre}}</h4>\n        <div class="tags">\n          <span *ngFor="let tag of article.tags"><ion-badge>{{tag}}</ion-badge> </span>\n        </div>\n      </section>\n    </ion-slide>\n\n    <ion-slide class="has-content">\n      <section padding>\n        <h1> {{article.tags[0]}} </h1>\n        <ion-badge>Reférence</ion-badge>\n        <ion-label class="petit"> N° {{article.reference}} </ion-label>\n        <h4>{{article.titre}}</h4>\n        <button ion-button small> Afficher la source </button>\n        <div [innerHTML]= "article.contenu" ></div>\n        <ion-list>\n          <button ion-item *ngFor="let cible of article.cible" (click)="afficherDetails(cible)" >\n            <h4><strong>{{cible.noms}}</strong></h4>\n            <p> <i>{{cible.matricule}}</i> </p>\n          </button>\n        </ion-list>\n      </section>\n    </ion-slide>\n\n    <ion-slide>\n      <h3>Add to Fav</h3>\n      <p>Detail</p>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar color="dark">\n    <ion-buttons start>\n      <button ion-button (click)="fermer()">\n        <ion-icon name="close"></ion-icon>\n         &nbsp; Fermer\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button color={{couleurFavori}} (click)="choisirFavori()" >\n        <ion-icon name="thumbs-up"></ion-icon>\n       &nbsp; favori\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\components\article\article.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_articles__["a" /* Articles */], __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], ArticleComponent);
    return ArticleComponent;
}());
//# sourceMappingURL=article.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InscriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_articles_utilisateur__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InscriptionPage = (function () {
    function InscriptionPage(nav, http, artUsers) {
        this.nav = nav;
        this.http = http;
        this.artUsers = artUsers;
    }
    InscriptionPage.prototype.enregistrer = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        this.http.post('http://localhost:3000/auth/register', JSON.stringify(user), { headers: headers })
            .subscribe(function (res) {
            _this.artUsers.init(res.json());
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    InscriptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-inscription',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\inscription\inscription.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Creer un compte</ion-title>\n  </ion-navbar>\n</ion-header>\n \n \n<ion-content padding>\n \n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n \n        <ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="name" placeholder="Nom" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="username" placeholder="matricule" type="text"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="email" placeholder="Email" type="email"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="Mot de passe" type="password"></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="confirmPassword" placeholder="Confirmer le mot de passe" type="password"></ion-input>\n        </ion-item>\n \n      </ion-list>\n \n      <button ion-button (click)="enregistrer()" class="continue-button">Enregistrer</button>\n \n    </ion-col>\n  </ion-row>\n \n</ion-content>'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\inscription\inscription.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], InscriptionPage);
    return InscriptionPage;
}());
//# sourceMappingURL=inscription.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnexionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actualites_offline_actualites_offline__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inscription_inscription__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_articles_utilisateur__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConnexionPage = (function () {
    function ConnexionPage(nav, http, artUsers) {
        this.nav = nav;
        this.http = http;
        this.artUsers = artUsers;
        this.username = '537639-L';
        this.password = '123456';
    }
    ConnexionPage.prototype.connexion = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var credentials = {
            username: this.username.toLowerCase(),
            password: this.password
        };
        this.http.post('http://localhost:3000/auth/login', JSON.stringify(credentials), { headers: headers })
            .subscribe(function (res) {
            //console.log(res.json());
            _this.artUsers.init(res.json());
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    ConnexionPage.prototype.inscription = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__inscription_inscription__["a" /* InscriptionPage */]);
    };
    ConnexionPage.prototype.skip = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__actualites_offline_actualites_offline__["a" /* ActualitesOfflinePage */], { authentifie: false });
    };
    ConnexionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* Component */])({
            selector: 'page-connexion',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\connexion\connexion.html"*/'\n<ion-header>\n  <ion-navbar>\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>-->\n    <ion-title>Connexion</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n  <ion-row>\n    <ion-col>\n      <ion-list inset>\n \n        <ion-item>\n          <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="username" placeholder="matricule" type="text" ></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="mot de passe" type="password" ></ion-input>\n        </ion-item>\n \n      </ion-list>\n \n      <button ion-button (click)="connexion()" primary full>connexion</button>\n \n    </ion-col>\n  </ion-row>\n \n  <button ion-button (click)="inscription()" small full clear  >Créer un compte</button>\n\n  <button ion-button (click)="skip()" small full clear color=\'danger\' >non, merci</button>\n  \n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\connexion\connexion.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], ConnexionPage);
    return ConnexionPage;
}());
//# sourceMappingURL=connexion.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 242;

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesUtilisateur; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pouchdb__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesUtilisateur = (function () {
    function ArticlesUtilisateur(http) {
        this.http = http;
        console.log('Hello ArticlesUtilisateur Provider');
    }
    ArticlesUtilisateur.prototype.init = function (details) {
        this.utilisateur = details;
        this.bdUtilisateur = new __WEBPACK_IMPORTED_MODULE_3_pouchdb___default.a('utilisateur');
        this.remoteUtilisateur = details.userDBs.supertest;
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.bdUtilisateur.sync(this.remoteUtilisateur, options);
    };
    ArticlesUtilisateur.prototype.deconnexion = function () {
        this.donneesUtilisateur = null;
        this.bdUtilisateur.destroy().then(function () {
            console.log("database removed");
        });
    };
    ArticlesUtilisateur.prototype.obtenirDonnees = function () {
        var _this = this;
        if (this.donneesUtilisateur) {
            return Promise.resolve(this.donneesUtilisateur);
        }
        return new Promise(function (resolve) {
            console.log(_this.bdUtilisateur);
            if (_this.bdUtilisateur) {
                _this.bdUtilisateur.allDocs({
                    include_docs: true
                }).then(function (result) {
                    _this.donneesUtilisateur = [];
                    var docs = result.rows.map(function (row) {
                        _this.donneesUtilisateur.push(row.doc);
                    });
                    resolve(_this.donneesUtilisateur);
                    _this.bdUtilisateur.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                        _this.handleChange(change);
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }
        });
    };
    ArticlesUtilisateur.prototype.maj = function (article) {
        console.log(this.bdUtilisateur);
        if (typeof (this.bdUtilisateur) != 'undefined') {
            this.bdUtilisateur.put(article).catch(function (err) {
                console.log(err);
            });
        }
    };
    ArticlesUtilisateur.prototype.supprimerArticleUtilisateur = function (todo) {
        this.bdUtilisateur.remove(todo).catch(function (err) {
            console.log(err);
        });
    };
    ArticlesUtilisateur.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.donneesUtilisateur.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.donneesUtilisateur.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.donneesUtilisateur[changedIndex] = change.doc;
            }
            else {
                this.donneesUtilisateur.push(change.doc);
            }
        }
    };
    ArticlesUtilisateur = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ArticlesUtilisateur);
    return ArticlesUtilisateur;
}());
//# sourceMappingURL=articles-utilisateur.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualitesOfflinePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_article_article__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActualitesOfflinePage = (function () {
    function ActualitesOfflinePage(toastCtrl, navCtrl, navParams, modalCtrl, article, artUser) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.article = article;
        this.artUser = artUser;
        this.actualite = "recent";
        this.recherche = "";
    }
    ActualitesOfflinePage.prototype.ionViewDidLoad = function () {
        this.rangerArticles();
        console.log('ionViewDidLoad ActualitesPage');
    };
    ActualitesOfflinePage.prototype.presentToast = function () {
        if (this.longueur > 1) {
            if (this.recherche) {
                this.messageNombreRecherche = this.longueur + ' articles correspondent à votre recherche.';
            }
            else
                this.messageNombreRecherche = "il y'a " + this.longueur + ' articles.';
        }
        else {
            if (this.recherche) {
                this.messageNombreRecherche = this.longueur + ' article correspond à votre recherche.';
            }
            else
                this.messageNombreRecherche = "il y'a " + this.longueur + ' article.';
        }
        var toast = this.toastCtrl.create({
            message: this.messageNombreRecherche,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ActualitesOfflinePage.prototype.afficheBarreRecherche = function () {
        if (this.affiche) {
            this.affiche = false;
        }
        else
            this.affiche = true;
    };
    ActualitesOfflinePage.prototype.ouvrirArticle = function (article) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_article_article__["a" /* ArticleComponent */], {
            article: article
        });
        modal.present();
    };
    ActualitesOfflinePage.prototype.filterArticles = function (data, searchTerm) {
        return data.filter(function (item) {
            return item.auteur.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    ActualitesOfflinePage.prototype.rangerArticles = function () {
        var _this = this;
        this.article.obtenirArticle().then(function (data) {
            _this.articles = data;
            _this.articlesRecents = _this.articles.sort(function (a, b) {
                a = new Date(a.datePost);
                b = new Date(b.datePost);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            _this.articlesFiltres = _this.articlesRecents.filter(function (item) {
                var j = 0;
                for (var i = 0; i < item.tags.length; i++) {
                    if (item.tags[i].indexOf(_this.recherche.toLowerCase()) > -1) {
                        j = j + 1;
                    }
                }
                return (item.auteur.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    item.titre.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    j > 0);
            });
            _this.longueur = _this.articlesFiltres.length;
        });
    };
    ActualitesOfflinePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-actualites-offline',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\actualites-offline\actualites-offline.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Actualités</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="afficheBarreRecherche()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n  <ion-toolbar>\n    <ion-segment [(ngModel)]="actualite">\n      <ion-segment-button value="recent">\n        récents\n      </ion-segment-button>\n      <ion-segment-button value="favori">\n        favoris\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar *ngIf="actualite === \'recent\' " >\n    <ion-searchbar \n      [(ngModel)]="recherche" \n      (ionInput)="rangerArticles()"\n      animated = true\n      placeholder = "Recherche" >\n      \n    </ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div [ngSwitch]="actualite">\n    <!--<div>\n    <ion-select [(ngModel)]="categories">\n      <ion-option value="" >Toutes catégories</ion-option>\n      <ion-option value="Avancement" >Avancements</ion-option>\n      <ion-option value="Note de service" >Notes de service</ion-option>\n      <ion-option value="Mutation" >Mutations</ion-option>\n      <ion-option value="Autre" >Autres</ion-option>\n    </ion-select>\n  </div>-->\n    \n    <ion-list *ngSwitchCase ="\'recent\'">\n      <div text-center>\n        <span *ngIf="!(recherche)" >il y a</span> <strong color = \'primary\'>{{longueur}}</strong>   <span>article</span><span *ngIf="longueur > 1">s</span> <span *ngIf="recherche">correspond</span><span *ngIf="recherche && longueur > 1">ent</span> <span *ngIf="recherche" >à votre recherche</span>\n      </div>\n      <button ion-item *ngFor="let article of articlesFiltres" (click)="ouvrirArticle(article)">\n        <ion-grid>\n          <ion-row >\n            <ion-col><h2>{{article.auteur}} </h2></ion-col>\n            <ion-col text-right>\n              <h4><i> {{article.datePost | tempsrelatif}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-badge color= "light2">{{article.tags[[0]]}}</ion-badge>\n        <p>{{article.titre}}</p>\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase ="\'favori\'" text-wrap>\n      Vous ne pouvez pas acceder à vos articles favoris car vous n\'est pas encore authentifié.\n      <ion-row>\n    <ion-col>\n      <ion-list inset>\n \n        <ion-item>\n          <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="username" placeholder="matricule" type="text" ></ion-input>\n        </ion-item>\n \n        <ion-item>\n          <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n          <ion-input [(ngModel)]="password" placeholder="mot de passe" type="password" ></ion-input>\n        </ion-item>\n \n      </ion-list>\n \n      <button ion-button (click)="connexion()" primary full>Connexion</button>\n \n    </ion-col>\n  </ion-row>\n \n  <button ion-button (click)="inscription()" small full clear  >Créer un compte</button>\n    </ion-list>\n  </div>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\actualites-offline\actualites-offline.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_articles__["a" /* Articles */], __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], ActualitesOfflinePage);
    return ActualitesOfflinePage;
}());
//# sourceMappingURL=actualites-offline.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsCibleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsCibleComponent = (function () {
    function DetailsCibleComponent(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
        console.log('Hello DetailsCible Component');
        this.cible = params.get('cible');
        this.source = params.get('source');
    }
    DetailsCibleComponent.prototype.fermer = function () {
        this.viewCtrl.dismiss();
    };
    DetailsCibleComponent.prototype.seq = function (maximum) {
        var resultat = [];
        for (var i = 0; i < maximum; i++) {
            resultat.push(i);
        }
        return resultat;
    };
    DetailsCibleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'details-cible',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\components\details-cible\details-cible.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{cible.noms}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <p *ngIf="cible.matricule" ><strong>&nbsp; Matricule: </strong>{{cible.matricule}} </p>\n  <ion-card *ngFor="let detail of cible.details" >\n    <ion-list>\n      <ion-item *ngIf="detail.MontantPercu" >\n        <ion-label>Montant perçu</ion-label>\n        <ion-note item-right>{{ detail.MontantPercu | currency:\'XAF\':true:\'1.0-3\'}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.DateMandatement" >\n        <ion-label>Date du mandatement</ion-label>\n        <ion-note item-right>{{detail.DateMandatement | date: \'dd MMM yyyy\' | lowercase }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.universite" >\n        <ion-label>Université</ion-label>\n        <ion-note item-right>{{detail.universite}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.dateConcours" >\n        <ion-label>Date du Concours</ion-label>\n        <ion-note item-right>{{detail.dateConcours | date: \'fullDate\' | lowercase }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.etablissement" >\n        <ion-label>Etablissement</ion-label>\n        <ion-note item-right>{{detail.etablissement }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.grade" >\n        <ion-label>Grade</ion-label>\n        <ion-note item-right>{{detail.grade }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.fonction" >\n        <ion-label>Fonction</ion-label>\n        <ion-note item-right>{{detail.fonction}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.venantDe" >\n        <ion-label>Venant de</ion-label>\n        <ion-note item-right>{{detail.venantDe}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.allantA" >\n        <ion-label>Allant à</ion-label>\n        <ion-note item-right>{{detail.allantA}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.posteTravail" >\n        <ion-label>Poste de travail</ion-label>\n        <ion-note item-right>{{detail.posteTravail}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.dateAbandon" >\n        <ion-label>Date d\'abandon</ion-label>\n        <ion-note item-right>{{detail.dateAbandon | date: \'dd MMM yyyy\' | lowercase }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.ancSituation" >\n        <ion-label>Ancienne situation</ion-label>\n        <ion-note item-right>{{detail.ancSituation}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.nvlSituation" >\n        <ion-label>Nouvelle situation</ion-label>\n        <ion-note item-right>{{detail.nvlSituation}}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.dateAncPromotion" >\n        <ion-label>Date Ancienne Promotion</ion-label>\n        <ion-note item-right>{{detail.dateAncPromotion | date: \'dd MMM yyyy\' | lowercase }}</ion-note>\n      </ion-item>\n      <ion-item *ngIf="detail.dateNvlPromotion" >\n        <ion-label>Date Nouvelle Promotion</ion-label>\n        <ion-note item-right>{{detail.dateNvlPromotion | date: \'dd MMM yyyy\' | lowercase }}</ion-note>\n      </ion-item>\n    </ion-list>\n</ion-card>\n</ion-content>\n\n<ion-footer >\n  <ion-toolbar color="dark">\n    <ion-buttons start>\n      <button ion-button (click)="fermer()">\n        Fermer\n      </button>\n    </ion-buttons>\n\n    <ion-buttons start>\n      <button ion-button (click)="fermer()">\n        Source\n      </button>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-footer>\n\n\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\components\details-cible\details-cible.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DetailsCibleComponent);
    return DetailsCibleComponent;
}());
//# sourceMappingURL=details-cible.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualitesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_article_article__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActualitesPage = (function () {
    function ActualitesPage(navCtrl, navParams, modalCtrl, article, artUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.article = article;
        this.artUser = artUser;
        this.categories = '';
        this.actualite = "recent";
        this.recherche = "";
        this.categorie = "";
        this.authentifie = navParams.get('authentifie');
    }
    ActualitesPage.prototype.ionViewDidLoad = function () {
        if (this.authentifie === false) {
            this.rangerArticles();
        }
        else {
            this.chargerArticles();
        }
        console.log('ionViewDidLoad ActualitesPage');
    };
    ActualitesPage.prototype.ionViewDidEnter = function () {
    };
    ActualitesPage.prototype.afficheBarreRecherche = function () {
        if (this.affiche) {
            this.affiche = false;
        }
        else
            this.affiche = true;
    };
    ActualitesPage.prototype.ouvrirArticle = function (article) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__components_article_article__["a" /* ArticleComponent */], {
            article: article
        });
        modal.present();
    };
    ActualitesPage.prototype.chargerArticles = function () {
        var _this = this;
        this.article.obtenirArticle().then(function (data) {
            _this.articles = data;
            _this.articlesRecents = _this.articles.sort(function (a, b) {
                a = new Date(a.datePost);
                b = new Date(b.datePost);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            // Filtre d'articles
            _this.articlesUtilisateur = _this.articlesRecents.filter(function (item) {
                var j = 0;
                var t = 0;
                for (var i = 0; i < item.tags.length; i++) {
                    if (item.tags[i].indexOf(_this.recherche.toLowerCase()) > -1) {
                        j = j + 1;
                    }
                }
                for (var s = 0; s < item.tags.length; s++) {
                    if (item.tags[s].toLowerCase().indexOf(_this.categorie.toLowerCase()) > -1) {
                        t = t + 1;
                    }
                }
                return (t > 0 && (item.auteur.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    item.titre.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    j > 0));
            });
            // Articles lus et articles favoris
            _this.artUser.obtenirDonnees().then(function (data) {
                if (typeof (data) != 'undefined') {
                    _this.articlesLus = data;
                    // article lus
                    for (var i in _this.articlesLus) {
                        for (var j in _this.articlesUtilisateur) {
                            if (_this.articlesUtilisateur[j]._id == _this.articlesLus[i]._id) {
                                _this.articlesUtilisateur[j].estLu = true;
                            }
                        }
                    }
                    // article favori
                    _this.articlesFavoris = _this.articlesRecents;
                    for (var i in _this.articlesLus) {
                        for (var j in _this.articlesFavoris) {
                            if (_this.articlesFavoris[j]._id == _this.articlesLus[i]._id && _this.articlesLus[i].estFavori) {
                                _this.articlesFavoris[j].estFavori = true;
                            }
                        }
                    }
                    ;
                    _this.articlesFavoris = _this.articlesFavoris.filter(function (item) {
                        return item.estFavori == true;
                    });
                }
            });
            _this.longueur = _this.articlesUtilisateur.length;
        });
    };
    ActualitesPage.prototype.rangerArticles = function () {
        var _this = this;
        this.article.obtenirArticle().then(function (data) {
            _this.articles = data;
            _this.articlesRecents = _this.articles.sort(function (a, b) {
                a = new Date(a.datePost);
                b = new Date(b.datePost);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            _this.articlesFiltres = _this.articlesRecents.filter(function (item) {
                var j = 0;
                for (var i = 0; i < item.tags.length; i++) {
                    if (item.tags[i].indexOf(_this.recherche.toLowerCase()) > -1) {
                        j = j + 1;
                    }
                }
                return (item.auteur.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    item.titre.toLowerCase().indexOf(_this.recherche.toLowerCase()) > -1 ||
                    j > 0);
            });
            _this.longueur = _this.articlesFiltres.length;
        });
    };
    ActualitesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-actualites',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\actualites\actualites.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Actualités</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear (click)="afficheBarreRecherche()">\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n<!--  Segments\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="actualite" >\n      <ion-segment-button value="recent" >\n        récents\n      </ion-segment-button>\n      <ion-segment-button value="favori" >\n        favoris\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>-->\n\n  <ion-toolbar *ngIf="actualite === \'recent\' " >\n    <ion-searchbar \n      [(ngModel)]="recherche" \n      (ionInput)="chargerArticles()"\n      animated = true\n      placeholder = "Recherche" >\n      \n    </ion-searchbar>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-select \n      [(ngModel)]="categorie"\n      (ionChange)="chargerArticles()">\n      <ion-option value="" >Toutes catégories</ion-option>\n      <ion-option value="Avancement" >Avancements</ion-option>\n      <ion-option value="Note de service" >Notes de service</ion-option>\n      <ion-option value="Mutation" >Mutations</ion-option>\n    </ion-select>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div [ngSwitch]="actualite" *ngIf="!(authentifie === false)" >\n    \n\n    <ion-list *ngSwitchCase ="\'recent\'">\n      <div text-center>\n        <span *ngIf="!(recherche)" >il y a</span> <strong color = \'primary\'>{{longueur}}</strong>   <span>article</span><span *ngIf="longueur > 1">s</span> <span *ngIf="recherche">correspond</span><span *ngIf="recherche && longueur > 1">ent</span> <span *ngIf="recherche" >à votre recherche</span>\n      </div>\n      <button ion-item *ngFor="let article of articlesUtilisateur" (click)="ouvrirArticle(article)">\n        <ion-grid>\n          <ion-row >\n            <ion-col><h2> <ion-icon color="primary" name="square" *ngIf="!article.estLu" ></ion-icon> {{article.auteur}} </h2></ion-col>\n            <ion-col text-right>\n              <h4><i> {{article.datePost | tempsrelatif}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-badge color= "light2">{{article.tags[[0]]}}</ion-badge>\n        <p>{{article.titre}}</p>\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase ="\'favori\'" text-wrap>\n      <span>Fonctionnalité en cours de développement</span>\n      <!--<button ion-item *ngFor="let article of articlesFavoris" (click)="ouvrirArticle(article)">\n        <ion-avatar item-left *ngIf="article.imageUrl">\n          <img src= {{article.imageUrl}} alt="">\n        </ion-avatar>\n        <p>{{article.titre}}</p>\n        <ion-grid>\n          <ion-row >\n            <ion-col><h4><i> {{article.auteur}} </i></h4></ion-col>\n            <ion-col>\n              <h4><i> {{article.datePost | moment:[\'ll\']}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </button>-->\n    </ion-list>\n  </div>\n\n  <div [ngSwitch]="actualite" *ngIf="authentifie === false">\n    <!--<div>\n      <ion-select [(ngModel)]="categories">\n        <ion-option value="" >Toutes catégories</ion-option>\n        <ion-option value="Avancement" >Avancements</ion-option>\n        <ion-option value="Note de service" >Notes de service</ion-option>\n        <ion-option value="Mutation" >Mutations</ion-option>\n        <ion-option value="Autre" >Autres</ion-option>\n      </ion-select>\n    </div>-->\n    \n    <ion-list *ngSwitchCase ="\'recent\'">\n      <div text-center>\n        <span *ngIf="!(recherche)" >il y a</span> <strong color = \'primary\'>{{longueur}}</strong>   <span>article</span><span *ngIf="longueur > 1">s</span> <span *ngIf="recherche">correspond</span><span *ngIf="recherche && longueur > 1">ent</span> <span *ngIf="recherche" >à votre recherche</span>\n      </div>\n      <button ion-item *ngFor="let article of articlesFiltres" (click)="ouvrirArticle(article)">\n        <ion-grid>\n          <ion-row >\n            <ion-col><h2>{{article.auteur}} </h2></ion-col>\n            <ion-col text-right>\n              <h4><i> {{article.datePost | tempsrelatif}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-badge color= "light2">{{article.tags[[0]]}}</ion-badge>\n        <p>{{article.titre}}</p>\n      </button>\n    </ion-list>\n    <ion-list *ngSwitchCase ="\'favori\'" text-wrap>\n      Vous ne pouvez pas acceder à vos articles favoris car vous n\'est pas encore authentifié.\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n    \n            <ion-item>\n              <ion-label ><ion-icon name="person"></ion-icon></ion-label>\n              <ion-input [(ngModel)]="username" placeholder="matricule" type="text" ></ion-input>\n            </ion-item>\n    \n            <ion-item>\n              <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n              <ion-input [(ngModel)]="password" placeholder="mot de passe" type="password" ></ion-input>\n            </ion-item>\n    \n          </ion-list>\n    \n          <button ion-button (click)="connexion()" primary full>connexion</button>\n    \n        </ion-col>\n      </ion-row>\n \n      <button ion-button (click)="inscription()" small full clear  >Créer un compte</button>\n    </ion-list>\n  </div>\n   \n</ion-content>\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\actualites\actualites.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_articles__["a" /* Articles */], __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], ActualitesPage);
    return ActualitesPage;
}());
//# sourceMappingURL=actualites.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavorisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_articles__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavorisPage = (function () {
    function FavorisPage(navCtrl, navParams, modalCtrl, article, artUser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.article = article;
        this.artUser = artUser;
    }
    FavorisPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FavorisPage');
        this.article.obtenirArticle().then(function (data) {
            _this.articles = data;
            _this.articlesRecents = _this.articles.sort(function (a, b) {
                a = new Date(a.datePost);
                b = new Date(b.datePost);
                return a > b ? -1 : a < b ? 1 : 0;
            });
            /*// Filtre d'articles
      
            this.articlesUtilisateur = this.articlesRecents.filter((item) => {
              var j=0;
              var t=0;
              for(var i = 0; i < item.tags.length; i++) {
                  if(item.tags[i].indexOf(this.recherche.toLowerCase()) > -1) {
                      j= j+1
                  }
              }
              for(var s = 0; s < item.tags.length; s++) {
                  if(item.tags[s].toLowerCase().indexOf(this.categorie.toLowerCase()) > -1) {
                      t= t+1
                  }
              }
              
                  return (
                      t > 0 && (item.auteur.toLowerCase().indexOf(this.recherche.toLowerCase()) > -1 ||
                      item.titre.toLowerCase().indexOf(this.recherche.toLowerCase()) > -1 ||
                      j > 0 )
                    );
              }); */
            // Articles lus et articles favoris
            _this.artUser.obtenirDonnees().then(function (data) {
                if (typeof (data) != 'undefined') {
                    _this.articlesLus = data;
                    // article favori
                    _this.articlesFavoris = _this.articlesRecents;
                    for (var i in _this.articlesLus) {
                        for (var j in _this.articlesFavoris) {
                            if (_this.articlesFavoris[j]._id == _this.articlesLus[i]._id && _this.articlesLus[i].estFavori) {
                                _this.articlesFavoris[j].estFavori = true;
                            }
                        }
                    }
                    ;
                    _this.articlesFavoris = _this.articlesFavoris.filter(function (item) {
                        return item.estFavori == true;
                    });
                }
            });
            //this.longueur = this.articlesUtilisateur.length
        });
    };
    FavorisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({
            selector: 'page-favoris',template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\favoris\favoris.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Favoris</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only clear >\n        <ion-icon name="options"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <!--<div text-center>\n        <span *ngIf="!(recherche)" >il y a</span> <strong color = \'primary\'>{{longueur}}</strong>   <span>article</span><span *ngIf="longueur > 1">s</span> <span *ngIf="recherche">correspond</span><span *ngIf="recherche && longueur > 1">ent</span> <span *ngIf="recherche" >à votre recherche</span>\n      </div>-->\n      <button ion-item *ngFor="let article of articlesFavoris" (click)="ouvrirArticle(article)">\n        <ion-grid>\n          <ion-row >\n            <ion-col><h2> {{article.auteur}} </h2></ion-col>\n            <ion-col text-right>\n              <h4><i> {{article.datePost | tempsrelatif}} </i></h4>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-badge color= "light2">{{article.tags[[0]]}}</ion-badge>\n        <p>{{article.titre}}</p>\n      </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\pages\favoris\favoris.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_articles__["a" /* Articles */], __WEBPACK_IMPORTED_MODULE_3__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]])
    ], FavorisPage);
    return FavorisPage;
}());
//# sourceMappingURL=favoris.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(701);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Articles; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Articles = (function () {
    function Articles(http) {
        this.http = http;
        var PouchDB = __webpack_require__(596);
        PouchDB.plugin(__webpack_require__(756));
        this.db = new PouchDB('articlesminesec');
        this.remote = 'http://localhost:5984/articleminesec';
        var options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.db.sync(this.remote, options);
        console.log('Hello Articles Provider');
    }
    Articles.prototype.obtenirArticle = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.db.allDocs({
                include_docs: true
            }).then(function (result) {
                _this.data = [];
                var docs = result.rows.map(function (row) {
                    _this.data.push(row.doc);
                });
                resolve(_this.data);
                _this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', function (change) {
                    _this.handleChange(change);
                });
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    Articles.prototype.handleChange = function (change) {
        var changedDoc = null;
        var changedIndex = null;
        this.data.forEach(function (doc, index) {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            else {
                this.data.push(change.doc);
            }
        }
    };
    Articles = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], Articles);
    return Articles;
}());
//# sourceMappingURL=articles.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_moment__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(746);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inscription_inscription__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_actualites_actualites__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_actualites_offline_actualites_offline__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_favoris_favoris__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_article_article__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_details_cible_details_cible__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_articles_utilisateur__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_articles__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Q" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_actualites_actualites__["a" /* ActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_actualites_offline_actualites_offline__["a" /* ActualitesOfflinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_article_article__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_details_cible_details_cible__["a" /* DetailsCibleComponent */],
                __WEBPACK_IMPORTED_MODULE_0__pipes_moment__["a" /* Moment */], __WEBPACK_IMPORTED_MODULE_0__pipes_moment__["b" /* tempsRelatif */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_inscription_inscription__["a" /* InscriptionPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_actualites_actualites__["a" /* ActualitesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_actualites_offline_actualites_offline__["a" /* ActualitesOfflinePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_notifications_notifications__["a" /* NotificationsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_favoris_favoris__["a" /* FavorisPage */],
                __WEBPACK_IMPORTED_MODULE_10__components_article_article__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_details_cible_details_cible__["a" /* DetailsCibleComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* LOCALE_ID */], useValue: 'fr' },
                __WEBPACK_IMPORTED_MODULE_13__providers_articles__["a" /* Articles */],
                __WEBPACK_IMPORTED_MODULE_12__providers_articles_utilisateur__["a" /* ArticlesUtilisateur */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tempsRelatif; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_fr__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_locale_fr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_locale_fr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Moment = (function () {
    function Moment() {
    }
    /*
      
     */
    Moment.prototype.transform = function (value, args) {
        var rv = __WEBPACK_IMPORTED_MODULE_1_moment__(value).format(args[0]);
        return rv;
    };
    Moment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'moment',
            pure: false,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], Moment);
    return Moment;
}());
var tempsRelatif = (function () {
    function tempsRelatif() {
    }
    /*
      
     */
    tempsRelatif.prototype.transform = function (value) {
        var rv = __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
        return rv;
    };
    tempsRelatif = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
            name: 'tempsrelatif',
            pure: false,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], tempsRelatif);
    return tempsRelatif;
}());
//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 298,
	"./af.js": 298,
	"./ar": 299,
	"./ar-dz": 300,
	"./ar-dz.js": 300,
	"./ar-ly": 301,
	"./ar-ly.js": 301,
	"./ar-ma": 302,
	"./ar-ma.js": 302,
	"./ar-sa": 303,
	"./ar-sa.js": 303,
	"./ar-tn": 304,
	"./ar-tn.js": 304,
	"./ar.js": 299,
	"./az": 305,
	"./az.js": 305,
	"./be": 306,
	"./be.js": 306,
	"./bg": 307,
	"./bg.js": 307,
	"./bn": 308,
	"./bn.js": 308,
	"./bo": 309,
	"./bo.js": 309,
	"./br": 310,
	"./br.js": 310,
	"./bs": 311,
	"./bs.js": 311,
	"./ca": 312,
	"./ca.js": 312,
	"./cs": 313,
	"./cs.js": 313,
	"./cv": 314,
	"./cv.js": 314,
	"./cy": 315,
	"./cy.js": 315,
	"./da": 316,
	"./da.js": 316,
	"./de": 317,
	"./de-at": 318,
	"./de-at.js": 318,
	"./de.js": 317,
	"./dv": 319,
	"./dv.js": 319,
	"./el": 320,
	"./el.js": 320,
	"./en-au": 321,
	"./en-au.js": 321,
	"./en-ca": 322,
	"./en-ca.js": 322,
	"./en-gb": 323,
	"./en-gb.js": 323,
	"./en-ie": 324,
	"./en-ie.js": 324,
	"./en-nz": 325,
	"./en-nz.js": 325,
	"./eo": 326,
	"./eo.js": 326,
	"./es": 327,
	"./es-do": 328,
	"./es-do.js": 328,
	"./es.js": 327,
	"./et": 329,
	"./et.js": 329,
	"./eu": 330,
	"./eu.js": 330,
	"./fa": 331,
	"./fa.js": 331,
	"./fi": 332,
	"./fi.js": 332,
	"./fo": 333,
	"./fo.js": 333,
	"./fr": 178,
	"./fr-ca": 334,
	"./fr-ca.js": 334,
	"./fr-ch": 335,
	"./fr-ch.js": 335,
	"./fr.js": 178,
	"./fy": 336,
	"./fy.js": 336,
	"./gd": 337,
	"./gd.js": 337,
	"./gl": 338,
	"./gl.js": 338,
	"./he": 339,
	"./he.js": 339,
	"./hi": 340,
	"./hi.js": 340,
	"./hr": 341,
	"./hr.js": 341,
	"./hu": 342,
	"./hu.js": 342,
	"./hy-am": 343,
	"./hy-am.js": 343,
	"./id": 344,
	"./id.js": 344,
	"./is": 345,
	"./is.js": 345,
	"./it": 346,
	"./it.js": 346,
	"./ja": 347,
	"./ja.js": 347,
	"./jv": 348,
	"./jv.js": 348,
	"./ka": 349,
	"./ka.js": 349,
	"./kk": 350,
	"./kk.js": 350,
	"./km": 351,
	"./km.js": 351,
	"./ko": 352,
	"./ko.js": 352,
	"./ky": 353,
	"./ky.js": 353,
	"./lb": 354,
	"./lb.js": 354,
	"./lo": 355,
	"./lo.js": 355,
	"./lt": 356,
	"./lt.js": 356,
	"./lv": 357,
	"./lv.js": 357,
	"./me": 358,
	"./me.js": 358,
	"./mi": 359,
	"./mi.js": 359,
	"./mk": 360,
	"./mk.js": 360,
	"./ml": 361,
	"./ml.js": 361,
	"./mr": 362,
	"./mr.js": 362,
	"./ms": 363,
	"./ms-my": 364,
	"./ms-my.js": 364,
	"./ms.js": 363,
	"./my": 365,
	"./my.js": 365,
	"./nb": 366,
	"./nb.js": 366,
	"./ne": 367,
	"./ne.js": 367,
	"./nl": 368,
	"./nl-be": 369,
	"./nl-be.js": 369,
	"./nl.js": 368,
	"./nn": 370,
	"./nn.js": 370,
	"./pa-in": 371,
	"./pa-in.js": 371,
	"./pl": 372,
	"./pl.js": 372,
	"./pt": 373,
	"./pt-br": 374,
	"./pt-br.js": 374,
	"./pt.js": 373,
	"./ro": 375,
	"./ro.js": 375,
	"./ru": 376,
	"./ru.js": 376,
	"./se": 377,
	"./se.js": 377,
	"./si": 378,
	"./si.js": 378,
	"./sk": 379,
	"./sk.js": 379,
	"./sl": 380,
	"./sl.js": 380,
	"./sq": 381,
	"./sq.js": 381,
	"./sr": 382,
	"./sr-cyrl": 383,
	"./sr-cyrl.js": 383,
	"./sr.js": 382,
	"./ss": 384,
	"./ss.js": 384,
	"./sv": 385,
	"./sv.js": 385,
	"./sw": 386,
	"./sw.js": 386,
	"./ta": 387,
	"./ta.js": 387,
	"./te": 388,
	"./te.js": 388,
	"./tet": 389,
	"./tet.js": 389,
	"./th": 390,
	"./th.js": 390,
	"./tl-ph": 391,
	"./tl-ph.js": 391,
	"./tlh": 392,
	"./tlh.js": 392,
	"./tr": 393,
	"./tr.js": 393,
	"./tzl": 394,
	"./tzl.js": 394,
	"./tzm": 395,
	"./tzm-latn": 396,
	"./tzm-latn.js": 396,
	"./tzm.js": 395,
	"./uk": 397,
	"./uk.js": 397,
	"./uz": 398,
	"./uz.js": 398,
	"./vi": 399,
	"./vi.js": 399,
	"./x-pseudo": 400,
	"./x-pseudo.js": 400,
	"./yo": 401,
	"./yo.js": 401,
	"./zh-cn": 402,
	"./zh-cn.js": 402,
	"./zh-hk": 403,
	"./zh-hk.js": 403,
	"./zh-tw": 404,
	"./zh-tw.js": 404
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 704;

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(747);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_inscription_inscription__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_actualites_actualites__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__ = __webpack_require__(601);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Connexion', component: __WEBPACK_IMPORTED_MODULE_4__pages_connexion_connexion__["a" /* ConnexionPage */] },
            { title: 'Inscription', component: __WEBPACK_IMPORTED_MODULE_3__pages_inscription_inscription__["a" /* InscriptionPage */] },
            { title: 'Actualités', component: __WEBPACK_IMPORTED_MODULE_5__pages_actualites_actualites__["a" /* ActualitesPage */] },
            { title: 'Favoris', component: __WEBPACK_IMPORTED_MODULE_7__pages_favoris_favoris__["a" /* FavorisPage */] },
            { title: 'Notifications', component: __WEBPACK_IMPORTED_MODULE_6__pages_notifications_notifications__["a" /* NotificationsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["b" /* StatusBar */].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* Splashscreen */].hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Component */])({template:/*ion-inline-start:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\NGANDI Michel\Documents\Projets\myMINESEC\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[602]);
//# sourceMappingURL=main.js.map