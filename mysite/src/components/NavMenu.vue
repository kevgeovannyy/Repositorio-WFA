<template>
  <nav class="nav-menu">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/productos">Productos</router-link></li>
      <li><router-link to="/servicios">Servicios</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-menu li {
  display: inline;
}

.nav-menu a {
  text-decoration: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-menu a:hover {
  background-color: #ab56db;
}
</style>
