
<template>
  <div class="container">
    <div class="card">
      <div class="icon">🔐</div>

      <h1>Recuperar senha</h1>

      <p class="subtitle">
        Informe seu e-mail para receber as instruções
        de recuperação de senha.
      </p>

      <form @submit.prevent="recuperarSenha">
        <div class="form-group">
          <label>E-mail</label>

          <input
            type="email"
            v-model="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <p v-if="mensagem" class="success">
          {{ mensagem }}
        </p>

        <p v-if="erro" class="error">
          {{ erro }}
        </p>

        <button type="submit" class="primary-button">
          Enviar instruções
        </button>
      </form>

      <div class="footer">
        <RouterLink to="/">
          ← Voltar para o login
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const mensagem = ref('')
const erro = ref('')

function recuperarSenha() {
  mensagem.value = ''
  erro.value = ''

  if (!email.value) {
    erro.value = 'Informe seu e-mail.'
    return
  }

  console.log('Solicitação de recuperação:', email.value)

  mensagem.value =
    'Solicitação recebida! Se o e-mail estiver cadastrado, você receberá as instruções.'

  // Aqui você poderá integrar sua API de recuperação de senha.
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
  padding: 40px 35px;
  border-radius: 14px;
  box-shadow: 0 8px 30px rgba(0,0,0,.08);
}

.icon {
  text-align: center;
  font-size: 40px;
  margin-bottom: 15px;
}

h1 {
  text-align: center;
  color: #1e293b;
}

.subtitle {
  text-align: center;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
  margin: 15px 0 30px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  font-size: 15px;
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
}

a {
  color: #2563eb;
  text-decoration: none;
}

.success {
  color: #15803d;
  font-size: 13px;
  margin-bottom: 15px;
}

.error {
  color: #dc2626;
  font-size: 13px;
  margin-bottom: 15px;
}
</style>
