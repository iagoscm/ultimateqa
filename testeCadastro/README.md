# Formulário de Cadastro

### A intenção com esta partição é testar um formulário de cadastro em seus testes UI e de API, e também fazer a testagem performática. Para isso, estarei usando a página do ultimateqa voltada para teste de signin, mas usando a função de cadastro.

---

**Para os testes UI, serão respeitados os seguintes requisitos:**

✅ Campos obrigatórios → O formulário não deve permitir envio sem preencher todos os campos.
✅ Senha forte → A senha deve ter mínimo 8 caracteres, 1 letra maiúscula e 1 número.
✅ Confirmação de e-mail → O e-mail digitado no campo "Confirmação de E-mail" deve ser igual ao e-mail principal.

- Aqui, estarei usando Cypress como ferramenta de testes UI, e estarei usando técnicas de triangularização e parametrização de testes para melhor alcançar os resultados. Os seguintes comandos são utilizados:

`npm install cypress --save-dev`
`npx cypress open` -> para criar o projeto cypress

Após isso, o cypress.json é configurado com a baseURL da aplicação.

**Atualmente, estão sendo feitos sem Page Object Models, mas a intenção é também implementá-los**

**Exemplos de cenários de teste:**

1. Preencher o formulário corretamente e enviar → Deve exibir mensagem de sucesso.
2. Deixar campos obrigatórios vazios → Deve exibir mensagens de erro.
3. Digitar uma senha fraca (exemplo: "12345") → Deve exibir erro de validação.
4. Digitar e-mails inválidos (como emails sem domínio) → Deve exibir erro de preenchimento

Os testes serão feitos nesse site: https://demo.automationtesting.in/Register.html

O site não possui tantas amarras/restrições para fazer bons testes de cadastro.

---

**Para testes de API, serão respeitados os seguintes requisitos:**

✅ A API responde corretamente → Testar requisições GET e POST.
✅ Respostas HTTP corretas → Testar status 200, 400 e 500.
✅ Validação da estrutura do JSON → O retorno da API deve conter os campos esperados.

Nisso, foi criada uma coleção no postman, com a variável global baseURL apontando para `{{baseUrl}} = https://jsonplaceholder.typicode.com `, e depois executados os testes via CLI com `newman run minha_colecao.json -r cli,json --reporter-json-export reports/api_test_results.json`

---

**Para testes de performance, queremos:**

1. Fazer teste de carga para 100 usuários simultâneos acessando a API mock.
2. Medir o tempo médio de resposta e documentar os resultados.
3. Observar se há erros 500 ou falhas de requisição sob carga.

Nesse caso, será utilizado o JMeter.

---

**Para produção de relatórios especificos, serão utilizados os seguintes comandos para:**

1. **Gerar relatório de UI**
   ```sh
   npx cypress run --reporter mochawesome
   ```

2. **Exportar resultados da API**
   ```sh
   newman run minha_colecao.json -r html --reporter-html-export reports/api_report.html
   ```

3. **Exportar relatório do JMeter**
   ```sh
   jmeter -g reports/performance_results.jtl -o reports/jmeter_report
   ```