Feature: Form

    Scenario: Validar página Form
        When acessar a página Form
        Then deverá apresentar o titulo Form Itens
        And deverá possuir os elementos: Radio Button: Horizontal, Vertical e In Line e campos: Input, Select, TreeSelect, Cascader, Date Picker.
        And deverá possuir a opção Slider with InputNumber para arrastar ou inserir um numeral no campo abaixo dele.
        And deverá possuir um Switch para habilitar ou desabilitar
        And deverá possuir um TextArea editável.
        And deverá possuir o botão Register.

    Scenario: Form - Registro válido
        When selecionar a opção Horizontal do Radio Button
        And preencher o campo Input com "Registro na Horizontal"
        And selecionar a opção "Brazil" do Select
        And selecionar uma opção do TreeSelect
        And selecionar uma opção do Cascader
        And selecionar uma data válida
        And deslizar a opção Slider with InputNumber
        And clicar na opção Switch
        And preencher com um "Me contrata Venturus" o TextArea
    #     And clicar no botão Register
    #     Then o registro deve ser efetuado com sucesso.

    Scenario: Form - Registro válido - 2
        Given que esteja na página Form
        When selecionar a opção Vertical do Radio Button
        And preencher o campo Input com "Registro na vertical"
        And digitar o número 5 no campo Slider with InputNumber
        And selecionar uma data válida
        And preencher com um "comentário" o TextArea
        And selecionar uma opção do TreeSelect
        And selecionar uma opção do Cascader
        And selecionar a opção "Brazil" do Select
        # And clicar no botão Register
        # Then o registro deve ser efetuado com sucesso.

    Scenario: Form - Registro válido - 3
        Given que esteja na página Form
        When selecionar a opção In Line do Radio Button
        And preencher o campo Input com "Registro In Line"
        And selecionar a opção "Brazil" do Select
        And selecionar uma opção do TreeSelect
        And selecionar uma opção do Cascader
        And selecionar uma data válida
        And preencher com um "Bug" o TextArea
        And clicar no botão Register
        Then o registro deve ser efetuado com sucesso.

    # Scenario: Form - Registro inválido
    #     Given que esteja na página Form
    #     When não preencher o form
    #     And clicar no botão Register
    #     Then o usuário deve ser alertado dos campos obrigatórios e que o registro não foi efetuado.
