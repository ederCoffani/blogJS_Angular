angular.module('blogjs.usuario').controller('LoginController',function($scope, $location, usuarios){

  $scope.usuario = {};

    $scope.entrar = function(usuario){

        var usuarioAutenticado = usuarios.autenticar(usuario);
        if (usuarioAutenticado) {
          $location.path('usuario/'+usuarioAutenticado.id+'/posts');
        }else {
          $scope.usuario = {};
          alert('Dados incorretos');
        }

    }

});
