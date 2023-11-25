import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login(){
  const [ismoveSliderRight, setismoveSliderRight] = useState(true);
  const moveSliderRight = () => {
    setismoveSliderRight(true); 
    };
  
  const moveSliderLeft = () => {
    setismoveSliderRight(false); 
    };

  return (
    <div class="gradient">
      <div class="container">
        <div id="signInSignUpBox">
          <div id="overlay" className={ismoveSliderRight ? 'overlay-moveHalfRight':'overlay-moveHalfLeft' }>
            <div id="overlayInner" className={ismoveSliderRight ? 'overlayInner-moveHalfLeft':'overlayInner-moveHalfRight'}>
              <div id="signUp">
                <h1>Olá!</h1>
                <p>Já possui cadastro? clique no botão abaixo para fazer login</p>
                <button onClick={moveSliderRight}>Login</button>
              </div>
              <div id="signIn">
                <h1>Olá!</h1>
                <p>Caso não tenha Cadastro clique no botão abaixo</p>
                <button onClick={moveSliderLeft}>Cadastra-se</button>
              </div>
            </div>
          </div>
          <div id="forms">
            <div id="signInForm" className={ismoveSliderRight ? 'shiftRight' : ''}>
              <div class="holder">
                <h1>Login</h1>
                <input type="email" placeholder="Email"/><br/>
                <input type="password" placeholder='Senha'/>
                <p>Esqueceu sua senha?</p>
                <button><Link to="/home" class="login">Login</Link></button>
              </div>
            </div>
            <div id="signUpForm" className={ismoveSliderRight ? 'shiftLeft' : ''}>
                <div class="holder">
                  <h1>Crie Sua Conta</h1>
                  <input type="text" placeholder="Nome"/><br/>
                  <input type="email" placeholder="Email"/><br/>
                  <input type="password" placeholder='Senha'/>
                  <button>Cadastrar-se</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
