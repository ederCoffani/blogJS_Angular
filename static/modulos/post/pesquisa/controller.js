angular.module('blogjs.post').controller('PesquisaPostController', function($scope, posts, $routeParams){

  var carregarPosts = function(){
      $scope.posts = posts.listar();
  }

  var carregarUsuario = function(){
    $scope.usuario = {
      id: $routeParams.id
    };
  }

  carregarPosts();
  carregarUsuario();

});
