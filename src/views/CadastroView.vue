<template>
  <div class="container">
    <div class="card">
      <h1>Criar conta</h1>
      <p class="subtitle">Preencha os dados para se cadastrar</p>

      <form @submit.prevent="cadastrar">
        <div class="form-group">
          <label>Nome completo</label>
          <input
            type="text"
            v-model="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div class="form-group">
          <label>E-mail</label>
          <input
            type="email"
            v-model="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div class="form-group">
          <label>Senha</label>
          <input
            type="password"
            v-model="senha"
            placeholder="Crie uma senha"
            minlength="6"
            required
          />
        </div>

        <div class="form-group">
          <label>Confirmar senha</label>
          <input
            type="password"
            v-model="confirmarSenha"
            placeholder="Confirme sua senha"
            required
          />
        </div>

        <p v-if="erro" class="error">{{ erro }}</p>

        <button type="submit" class="primary-button">
          Cadastrar
        </button>
      </form>

      <div class="footer">
        Já possui uma conta?
        <RouterLink to="/">Fazer login</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const confirmarSenha = ref('')
const erro = ref('')

function cadastrar() {
  erro.value = ''

  if (senha.value !== confirmarSenha.value) {
    erro.value = 'As senhas não são iguais.'
    return
  }

  console.log({
    nome: nome.value,
    email: email.value,
    senha: senha.value
  })

  alert('Cadastro enviado com sucesso!')

  // Aqui você poderá integrar sua API de cadastro.
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.card {
  background: white;
  width: 100%;
  max-width: 420px;
  padding: 35px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0,0,0,.08);
}

h1 {
  text-align: center;
  color: #1e293b;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 25px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
}

label {
  margin-bottom: 8px;
  color: #334155;
  font-size: 14px;
  font-weight: bold;
}

input {
  padding: 13px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
}

.primary-button {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.primary-button:hover {
  background: #1d4ed8;
}

.footer {
  text-align: center;
  margin-top: 25px;
  font-size: 14px;
  color: #64748b;
}

a {
  color: #2563eb;
  text-decoration: none;
}

.error {
  color: #dc2626;
  font-size: 13px;
  margin-bottom: 15px;
}
</style>
