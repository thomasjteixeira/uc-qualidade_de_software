# Lista de Exerícios JavaScript com Jest

## Iniciando um novo projeto Node.js e instalando o Jest

### Passo 0: Instale o Nodejs no seu pc

### Passo 1: Crie uma nova pasta para o seu projeto

Abra o terminal e execute os seguintes comandos para criar uma nova pasta e navegar para ela:

```bash
mkdir meu-projeto
cd meu-projeto
```

### Passo 2: Inicialize um novo projeto Node.js
Execute o seguinte comando para inicializar um novo projeto Node.js. Isso criará um novo arquivo package.json em seu projeto, que é usado para gerenciar as dependências do projeto.

```bash
npm init -y
```

### Passo 3: Instale o Jest no seu projeto
**Seguir a documentação oficial para a instalação:** 
https://jestjs.io/pt-BR/docs/getting-started

----
----
## Exercício 1: Soma Simples

Objetivo: Implementar a função soma(a, b) que retorna a soma de a e b.

### Testes

- Caso Positivo: Verifique se a função retorna o resultado correto para pares de números positivos, negativos e zero.
- Caso Negativo: Verifique o comportamento da função com entradas não numéricas para garantir que a função lide corretamente com esses casos (pode lançar um erro ou retornar null, conforme a implementação desejada).

## Exercício 2: Igualdade Estrita de Números

Objetivo: Desenvolver comparaNumeros(a, b) que verifica se a e b são estritamente iguais.

### Testes

- Caso Positivo: Confirme que a função retorna verdadeiro para números estritamente iguais.
- Caso Negativo: Verifique que a função retorna falso para números diferentes, incluindo comparações de tipos diferentes (ex: 1 e '1').

## Exercício 3: Verificar Paridade

Objetivo: Criar ePar(n) que retorna verdadeiro se n for par.

### Testes

- Caso Positivo: Teste com números pares.
- Caso Negativo: Teste com números ímpares e não numéricos.

## Exercício 4: Contar Elementos em um Array

Objetivo: Implementar contaElementos(array, elemento) que conta ocorrências de elemento em array.

### Testes

- Caso Positivo: Arrays com múltiplas ocorrências do elemento.
- Caso Negativo: Arrays vazios e arrays sem o elemento.

## Exercício 5: Reverter String

Objetivo: Desenvolver reverteString(s) que inverte a string s.

### Testes

- Caso Positivo: Strings de diferentes comprimentos.
- Caso Negativo: Strings vazias (deveria retornar vazia).

## Exercício 6: Calculadora de Impostos

Objetivo: Criar calculaImposto(renda) que calcula impostos baseado na renda.

### Testes

- Caso Positivo: Teste para várias faixas de rendimento.
- Caso Negativo: Rendas negativas ou não numéricas.

## Exercício 7: Verificação de Email

Objetivo: Implementar validaEmail(email) que valida o formato de email.

### Testes

- Caso Positivo: Emails válidos.
- Caso Negativo: Emails inválidos.

## Exercício 8: Encontrar Item em Array

Objetivo: Desenvolver contemElemento(array, elemento) que verifica se elemento está em array.

### Testes

- Caso Positivo: Arrays contendo o elemento.
- Caso Negativo: Arrays sem o elemento.

## Exercício 9 (Array): Verificar Elementos em um Array

Objetivo: Criar verificaElementos(array, elementos) que verifica se todos os elementos estão contidos em array.

### Testes

- Caso Positivo: Arrays que contêm todos os elementos.
- Caso Negativo: Arrays faltando algum dos elementos.

## Exercício 10 (Objeto): Verificar Elementos em um Objeto

Objetivo: Implementar contemPropriedades(objeto, propriedades) que verifica se objeto contém as propriedades.

### Testes

- Caso Positivo: Objetos que contêm as propriedades.
- Caso Negativo: Objetos que faltam propriedades ou têm valores diferentes.

## Exercício 11: Expectativa de Erros

Objetivo: Desenvolver verificaErro(entrada) que lança um erro para entradas inválidas.

### Testes

- Caso Positivo: Entradas que deveriam lançar erro.
- Caso Negativo: Entradas válidas para garantir que não lançam erro indevidamente.

Para cada exercício, lembre os alunos da importância de nomear claramente seus testes para refletir o que está sendo testado e do motivo pelo teste passar ou falhar. Isso não só ajuda durante a fase de desenvolvimento, mas também facilita a manutenção do código a longo prazo.