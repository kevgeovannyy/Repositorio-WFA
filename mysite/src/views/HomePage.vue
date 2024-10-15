<template>
  <div class="home-page">
    <!-- Texto de bienvenida -->
    <section class="welcome-section">
      <h1>Bienvenido a Mi Tienda de Celulares</h1>
      <p>Encuentra los mejores modelos y las últimas tendencias en tecnología móvil.</p>
      <p class="shop-phrase">"La tecnología que necesitas, a un clic de distancia."</p>
      
      <!-- Espacio para la imagen principal de la tienda -->
      <div class="store-image-container">
        <img src="https://img.freepik.com/vector-gratis/plantilla-logotipo-tienda-movil-degradado_23-2149732040.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid" alt="Imagen de la tienda" />
      </div>
    </section>

    <!-- Mostrar el contenido principal de la página -->
    <main-content></main-content>
  </div>
</template>



<style scoped>
.home-page {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img {
  height: 100px;
}

.welcome-section {
  text-align: center;
  margin-bottom: 30px;
}

.welcome-section h1 {
  font-size: 2.5em;
  color: #7918e7;
  margin-bottom: 10px;
}


.welcome-section p {
  font-size: 1.2em;
  color: #333;
  margin: 5px 0;
}

.shop-phrase {
  font-style: italic;
  color: #555;
}

.store-image-container {
  margin-top: 20px;
}

.store-image-container img {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
