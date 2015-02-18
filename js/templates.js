angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/home.html","<!-- Main view--><div ui-view style=\"margin-top: 90px\" class=\"row\"></div>");
$templateCache.put("components/about/about.html","<div class=\"col-md-12\"><div class=\"list-group about\"><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Cos\'è Blogzinga</h4><p class=\"list-group-item-text\">Blogzinga è una raccolta di blog sulla programmazione scritti da sviluppatori italiani.</p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Cosa trovo su Blogzinga</h4><p class=\"list-group-item-text\">Su Blogzinga trovi per ogni blog una sua breve descrizione e un link ai principali social</p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Quali blog sono compresi?</h4><p class=\"list-group-item-text\">Tutti quelli che troviamo! :) L\'importante è che siano scritti da sviluppatori italiani in lingua italiana o in inglese.</p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Chi compila la lista?</h4><p class=\"list-group-item-text\">Blogzinga nasce come progetto collaborativo, chiunque può contribuire facendo un <strong>pull request</strong> del progetto<a href=\"https://github.com/cosenonjaviste/blogzinga\">https://github.com/cosenonjaviste/blogzinga</a></p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Come vi è venuta in mente questa idea?</h4><p class=\"list-group-item-text\">Molto spesso ci è capitato di scoprire dei blog interessanti di sviluppatori italiani per caso e abbiamo pensato: non sarebbe bello poter vedere in un attimo chi ha la nostra stessa passione e scrive qualcosa di interessante a riguardo?</p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Ma perché solo sviluppatori italiani, non posso mettere un link ad un blog di un autore straniero?</h4><p class=\"list-group-item-text\">Tenere un blog è un\'attività impegnativa e molto spesso i blog italiani sulla programmazione finiscono a pagina due di Google (quando va bene), Blogzinga è il nostro riconoscimento per il lavoro di tutti quegli sviluppatori italiani che dedicano il loro tempo per condividere conoscenze.</p></div><div class=\"list-group-item\"><h4 class=\"list-group-item-heading\">Posso clonare Blogzilla e fare l\'elenco dei blog che mi piace di più?</h4><p class=\"list-group-item-text\">Assolutamente! Ovviamente ci fa piacere se poi citi il progetto originale</p></div></div></div>");
$templateCache.put("components/bloglist/list.html","<div class=\"row\"><div class=\"col-md-12\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"collapse navbar-collapse\"><form class=\"navbar-form navbar-left width100\"><div class=\"form-group width100\"><input type=\"text\" placeholder=\"Search\" ng-model=\"filterBlog\" class=\"form-control width100\"></div></form></div></div></nav></div><div ng-show=\"!blogs\" style=\"margin: 4em; text-align: center; font-size: 1.5em;\" class=\"col-md-12\"><i class=\"fa fa-cog fa-spin fa-3x fa-fw margin-bottom\"></i></div><div ng-show=\"blogs\" class=\"col-md-12\"><div ng-repeat=\"blog in blogs | filter: filterBlog\" class=\"panel\"><div random-header ng-click=\"openUrl(blog.url)\" class=\"panel-heading\"><h3 class=\"panel-title\">{{blog.title}}</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-md-8\"><div>{{blog.topic}}</div><div>By: <em>{{blog.authors | join}}</em></div><div style=\"margin-top: 1em\"><span ng-repeat=\"tag in blog.tags\"><a style=\"margin-right: 1em; padding: 5px; font-size: .9em\" random-label href=\"\" ng-click=\"filterByTag(tag)\" class=\"label\">{{tag}}</a></span></div></div><div class=\"col-md-3\"><img ng-src=\"{{blog.preview}}\" ng-click=\"openUrl(blog.url)\" style=\"width: 200px\" class=\"hand pull-right\"></div><div class=\"col-md-1\"><a ng-href=\"{{blog.twitter}}\" target=\"_blank\" ng-if=\"blog.twitter\" class=\"social fa fa-twitter\"></a><a ng-href=\"{{blog.facebook}}\" target=\"_blank\" ng-if=\"blog.facebook\" class=\"social fa fa-facebook-official\"></a><a ng-href=\"{{blog.github}}\" target=\"_blank\" ng-if=\"blog.github\" class=\"social fa fa-github\"></a></div></div></div></div></div></div>");}]);