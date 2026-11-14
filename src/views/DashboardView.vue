
<template>
  <div class="dashboard">
    <header class="header">
      <h2>Meu Sistema</h2>

      <button @click="sair">
        Sair
      </button>
    </header>

    <main class="content">
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Você está autenticado no sistema.</p>

      <div class="cards">
        <div class="card">
          <h3>Usuários</h3>
          <p>120</p>
        </div>

        <div class="card">
          <h3>Relatórios</h3>
          <p>25</p>
        </div>

        <div class="card">
          <h3>Notificações</h3>
          <p>8</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function sair() {
  localStorage.removeItem('autenticado')
  router.push('/')
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: #f1f5f9;
  font-family: Arial, sans-serif;
}

.header {
  background: #1e293b;
  color: white;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header h2 {
  margin: 0;
}

.header button {
  background: #ef4444;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.content {
  padding: 35px;
}

.content h1 {
  color: #1e293b;
}

.content p {
  color: #64748b;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0,0,0,.05);
}

.card h3 {
  color: #64748b;
}

.card p {
  color: #2563eb;
  font-size: 28px;
  font-weight: bold;
}
</style>
