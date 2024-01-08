### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Api de Cadastro e Login
Api criada em springBoot para cadastro de usuários e login. API conecta ao front com o framework react js e através da página principal o usuário consegue criar sua conta para fazer acesso a página principal da aplicação que consome uma API externa de filmes.
## Ferramentas
<p>
  <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"/>
  <img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white"/>
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>


  
</p>


### Funcionalidades 
- Criar Usuário
- Autenticar Usuário
- Deletar usuário
- Atualizar Usuário

### Tela de Cadastro do usuário 
Os dados inseridos vão para o banco de dados e usuário é cadastrado ao banco de dados sua senha é criptografada para segurança.Caso o email seja inválido o usuário não será cadastrado e a mensagem "Email inválido" será mostrada na tela.

![TelaCadastro](https://github.com/luisaxsz/Site-React/assets/101007311/cba547f2-9081-4d7c-b3d8-4e65892ead89)

#### Dados do Usuário
```json
  {
  "id":1,
  "username":"luisaxsz",
  "email":"teste@gmail.com",
  "senha":"$2a$10$/zS3xkZ2P929HHgQnQ/ceu.gKx4t8h6Aymrl.QXo6OmA/QtMYSdBq"
  }
```
### Tela de Login
A tela de login envia os dados do usuário ao banco para conferir se o email existe e se a senha é válida para que o usuário possa ter acesso ou não a tela principal da aplicação. Caso seu email não seja válido não é permitida a entrada do usuário e mensagem de erro é mostrada ao usuário.

![image](https://github.com/luisaxsz/Site-React/assets/101007311/f38e3ca7-6f6f-4bb1-b2b4-94e150daff2d)

Caso esteja tudo ok o usuário pode acessar a tela principal da aplicação

![image](https://github.com/luisaxsz/Site-React/assets/101007311/078848c5-2f02-474c-94d6-642b2449352d)


