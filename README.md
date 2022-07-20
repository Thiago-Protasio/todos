
# To-do serverless

Essa é uma aplicação serverless que contém duas funções:  


- [Criar um to-do](#criar-um-to-do)
- [Listar to-dos de um usuário](#listar-to-dos)

### Criar um to-do

Para criar um *to-do*, a aplicação deve receber os seguintes valores:  
- O `id` do usuário que está criando o *to-do*  
- Um `title` ou título. 
- Um `deadline`, que é a data em que o *to-do* deve expirar

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `user_id` | `string` | `id` do usuário |
| `title` | `string` | Título do *to-do* |
| `deadline` | `string` | Data limite para o *to-do*

O `id` do usuário deve ser recebido na **rota** (path) da requisição.  


```
  POST /todos/{user_id}
```

Já o `title` e o `deadline` deverão ser recebidos no **corpo** da requisição. 

```json
  {
    "title": "Título da tarefa",
    "deadline": "2022-10-01T00:00:00.000Z"
  }
```

#### Retorno

Retorna um objeto com as informações:

```
  {
	  id: "uuid", // id gerado para garantir um único to-do com o mesmo id
	  user_id: "uuid", // id do usuário
	  title: "Título da tarefa",
	  done: false, // Sempre se inicia como 'false'
	  deadline: "2022-10-01T00:00:00.000Z"
  }
```

### Listar to-dos de um usuário

Para listar todos os to-dos de um usuário a aplicação deve receber o `id` do usuário na **rota** (path) da requisição.

```
  GET /todos/{user_id}
```

#### Retorno

Retorna um `Array` de objetos. Como o exemplo a seguir:

```
  [
    {
        id: "uuid",
	    title: "Título da tarefa 1",
	    deadline: "2022-10-01T00:00:00.000Z"
	    user_id: "uuid",
	    done: false,
    },
    {
        id: "uuid",
	    title: "Título da tarefa 2",
	    deadline: "2022-10-01T00:00:00.000Z"
	    user_id: "uuid",
	    done: false,
    }
  ]
```


### Stack utilizada
- Node, TypeScript, Serverless, aws-lambda, DynamoDB

