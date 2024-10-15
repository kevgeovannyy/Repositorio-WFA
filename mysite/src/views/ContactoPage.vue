<template>
  <div class="contact-page">
    <h2>Contáctanos</h2>
    <p>Envíanos tus recomendaciones o pregunta sobre la disponibilidad de un producto.</p>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required placeholder="Ingresa tu nombre" />
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="formData.email" required placeholder="Ingresa tu correo electrónico" />
      </div>

      <div class="form-group">
        <label for="product">Producto (Opcional):</label>
        <select id="product" v-model="formData.product">
          <option value="">Selecciona un producto</option>
          <option>iPhone 13 Pro</option>
          <option>Samsung Galaxy S21</option>
          <option>Google Pixel 6</option>
          <option>OnePlus 9</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="formData.message" rows="5" required placeholder="Escribe tu mensaje"></textarea>
      </div>

      <button type="submit" class="submit-btn">Enviar Mensaje</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        product: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Aquí puedes agregar la lógica para enviar los datos del formulario
      alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
      // Limpiar el formulario
      this.formData = {
        name: '',
        email: '',
        product: '',
        message: '',
      };
    },
  },
};
</script>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-page h2 {
  text-align: center;
  color: #7918e7;
  margin-bottom: 15px;
}

.contact-page p {
  text-align: center;
  margin-bottom: 20px;
  color: #555;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #3eaf7c;
  outline: none;
}

.submit-btn {
  padding: 10px;
  background-color: #7918e7;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #2a8855;
}
</style>
