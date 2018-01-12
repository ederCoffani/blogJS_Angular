angular.module('blogjs.usuario').controller('CadastroUsuarioController', function($scope, $location, usuarios){
    $scope.usuario = {};

    $scope.cadastrar = function(usuario){
      if (!valido(usuario)) {
        usuarios.cadastrar(usuario);
        $location.path('login');
      }
      !alert('Digite invalidos!');
    };

    var valido = function(usuario){
      return usuario.name && usuario.login && usuario.senha;
    };

});
