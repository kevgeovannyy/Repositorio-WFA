<template>
  <div class="services-page">
    <h2>Nuestros Servicios</h2>
    <p>Ofrecemos una variedad de servicios para satisfacer todas tus necesidades relacionadas con celulares.</p>

    <div class="services-list">
      <div class="service-card" v-for="service in services" :key="service.id">
        <img :src="service.image" :alt="service.name" />
        <h3>{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          name: "Venta y Compra de Teléfonos",
          description: "Te ofrecemos los mejores modelos de celulares nuevos y usados a precios competitivos.",
          image: "https://img.freepik.com/vector-premium/hombre-comprando-nuevo-vendedor-telefono-celular-mostrando-telefono-inteligente-al-cliente-ilustracion-vectorial-telefono-tienda-inte_103044-1212.jpg",
        },
        {
          id: 2,
          name: "Reparación de Celulares",
          description: "Nuestro equipo de expertos reparará tu celular de manera rápida y efectiva.",
          image: "https://img.freepik.com/vector-gratis/ilustracion-concepto-desmontaje-producto_114360-1240.jpg",
        },
        {
          id: 3,
          name: "Instalación de Widgets",
          description: "Instalamos widgets útiles y personalizados en tu dispositivo para mejorar su funcionalidad.",
          image: "https://static.vecteezy.com/system/resources/previews/008/089/421/original/mobile-repair-of-a-telephone-or-smartphone-electronics-service-with-broken-screen-and-machine-breakdown-in-flat-cartoon-illustration-vector.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.services-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.services-page h2 {
  text-align: center;
  color: #7918e7;
  margin-bottom: 20px;
}

.services-page p {
  text-align: center;
  margin-bottom: 30px;
  color: #555;
}

.services-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}.service-card img {
  width: 100%;
  height: 350px;
  border-radius: 5px;
}

.service-card h3 {
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
}

.service-card p {
  font-size: 0.9em;
  color: #777;
}
</style>
