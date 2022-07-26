Feature: Login

  Background: Login
    Given que esteja na página de Login

  Scenario: Validar tela de Login
    Then deverá apresentar o texto “Login with your Account”
    And deverá estar visível os campos Username e Password
    And deverá estar visível o botão Log In

  Scenario Outline: Tentativas de login invalidos
    When Inserir dados do tipo "<type>"
    And clicar em Log In
    Then o usuário deve receber uma mensagem "<msg>"
    Examples:
      | type             | msg                                                         |
      | password invalid | There was a problem logging in: Login/Password is incorrect |
      | username invalid | There was a problem logging in: Login/Password is incorrect |
  Scenario: Tentativa de login vazio
    And clicar em Log In
    Then deve ser mostrado a mensagem "Please input your username."
    And deve ser mostrado a mensagem "Please input your Password."

  @login
  Scenario: Efetuar login válido
    When inserir username e password do tipo "valid"
    And clicar em Log In
    Then o usuário deve ser conectado com sucesso

  Scenario: Fazer logout
    Given esteja na página principal conectado
    When Clicar no botão Logout
    Then o usuário deve voltar para a página de login.