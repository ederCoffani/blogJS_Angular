angular.module('blogjs.post').controller('RegistroPostController', function($scope,$location, $routeParams, posts){

  $scope.post = {};

  $scope.registrar = function(post){
      posts.registrar(post);
      $location.path('usuario/'+$routeParams.id+'/posts');
  };
});
