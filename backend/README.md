# ```TinDev - Uma rede social para Developers ```

## Rotas da aplicação

### ```GET /devs```
- Lista todos os devs da aplicação com as seguintes regras:
  ```
    Não lista o usuário que esta logado

    Não lista os devs que o usuário já deu like

    Não lista os devs que o usuário já deu dislike
  ```
- Params: 
  ```
   Enviar o id do usuário logado no Header da aplicação

   Ex: { user: 5d4e38bfbfc7a15abc73edd1 }
  ```

### ```POST /devs```
- Cadastra um usuário na aplicação com o nome do seu usuário do github
- Params: 
  ```
   Enviar o nome do usuário do github no body da requisição

   Ex: { username: "alefechorna" }
  ```

### ```POST /devs/:devId/likes```
- O usuário logado da like em um dev
- Params: 
  ```
   Enviar o id do usuário logado no Header da aplicação

   Ex: { user: 5d4e38bfbfc7a15abc73edd1 }
  ```
  ```
   Na URL enviar o id do dev que receberá o like

   Ex: http://localhost:3333/devs/5d4e38a9bfc7a15abc73edcf/likes
  ```

### ```POST /devs/:devId/dislikes```
- O usuário logado da dislike em um dev
  ```
   Enviar o id do usuário logado no Header da aplicação

   Ex: { user: 5d4e38bfbfc7a15abc73edd1 }
  ```
  ```
   Na URL enviar o id do dev que receberá o dislike

   Ex: http://localhost:3333/devs/5d4e38a9bfc7a15abc73edcf/dislikes
  ```