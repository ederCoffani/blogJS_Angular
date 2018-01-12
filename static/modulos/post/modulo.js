angular.module('blogjs.post', []);

angular.module('blogjs.post').config(function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('');
  $routeProvider.when('/usuario/:id/posts',{
       controller:'PesquisaPostController',
       templateUrl:'modulos/post/pesquisa/view.html'
     })

     .when('/usuario/:id/posts/novo',{
          controller:'RegistroPostController',
          templateUrl:'modulos/post/cadastro/view.html'
        })
});
