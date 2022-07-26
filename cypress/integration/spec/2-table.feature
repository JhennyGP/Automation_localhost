Feature: Table

    Scenario: Validar página Table
        Given que esteja logado
        And que esteja na pagina 1
        Then deverá apresentar o titulo Table
        And deverá estar visível as colunas 'Name', 'Borrow' e 'Repayment'

    Scenario: Validar paginação
        Given que existam mais de 10 registros por página
        When clicar nas páginas seguintes
        Then deverá visualizar mais registros.

    Scenario: Validar ordenação
        When clicar na coluna Name
        Then os registros deverão ser ordenados pela ordem escolhida.
