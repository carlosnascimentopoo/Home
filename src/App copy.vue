
<template>
  <div class="login-container">
    <div class="login-card">
      <h1>Bem-vindo!</h1>
      <p class="subtitle">Faça login para continuar</p>

      <form @submit.prevent="fazerLogin">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div class="form-group">
          <label for="senha">Senha</label>
          <input
            id="senha"
            :type="mostrarSenha ? 'text' : 'password'"
            v-model="senha"
            placeholder="Digite sua senha"
            required
          />
          <button
            type="button"
            class="show-password"
            @click="mostrarSenha = !mostrarSenha"
          >
            {{ mostrarSenha ? 'Ocultar' : 'Mostrar' }}
          </button>
        </div>

        <div class="forgot-password">
          <a href="/recuperar-senha">
            Esqueceu sua senha?
          </a>
        </div>

        <button type="submit" class="login-button">
          Entrar
        </button>
      </form>

      <div class="register-link">
        Não tem uma conta?
        <a href="/cadastro">Criar conta</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')
const mostrarSenha = ref(false)

function fazerLogin() {
  console.log('E-mail:', email.value)
  console.log('Senha:', senha.value)

  // Aqui você pode chamar sua API de autenticação.
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.login-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f5f9;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.login-card {
  background: #fff;
  width: 100%;
  max-width: 400px;
  padding: 40px 32px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

h1 {
  text-align: center;
  color: #1e293b;
  margin-bottom: 10px;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
}

label {
  margin-bottom: 8px;
  color: #334155;
  font-size: 14px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.show-password {
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
  font-size: 12px;
}

.forgot-password {
  text-align: right;
  margin-bottom: 22px;
}

a {
  color: #2563eb;
  text-decoration: none;
  font-size: 13px;
}

a:hover {
  text-decoration: underline;
}

.login-button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.login-button:hover {
  background: #1d4ed8;
}

.register-link {
  text-align: center;
  margin-top: 25px;
  color: #64748b;
  font-size: 14px;
}
</style>
