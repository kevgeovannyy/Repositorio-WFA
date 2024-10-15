<template>
  <div class="product-list">
    <h2>Listado de Productos</h2>

    <!-- Filtro por categoría/marca -->
    <div class="filters">
      <label for="brand-select">Filtrar por Marca:</label>
      <select id="brand-select" v-model="selectedBrand" @change="filterProducts">
        <option value="">Todas</option>
        <option v-for="brand in uniqueBrands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
     
    </div>

    <!-- Mostrar productos filtrados con grid -->
    <div class="products-grid">
      <div class="product-card" v-for="product in filteredProducts" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <span class="price">{{ product.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "iPhone 13 Pro",
          description: "Pantalla de 6.1 pulgadas, Chip A15 Bionic, 5G.",
          price: "$999",
          image: "https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-13-Pro-128GB-Gold-Prepaid-Smartphone-Locked-to-Straight-Talk_38276f17-7d6c-46dd-baa2-09aa8a5bd12d.94b4bfdbd75aa8f2478a6e531349cac8.jpeg",
          brand: "Apple",
        },
        {
          id: 2,
          name: "Samsung Galaxy S21",
          description: "Pantalla de 6.2 pulgadas, Exynos 2100, 5G.",
          price: "$799",
          image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/132797693_01/w=800,h=800,fit=pad",
          brand: "Samsung",
        },
        {
          id: 3,
          name: "Google Pixel 6",
          description: "Pantalla de 6.4 pulgadas, Google Tensor, 5G.",
          price: "$599",
          image: "https://www.radioshackla.com/media/catalog/product/4/6/464273400019_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
          brand: "Google",
        },
        {
          id: 4,
          name: "OnePlus 9",
          description: "Pantalla de 6.55 pulgadas, Snapdragon 888, 5G.",
          price: "$729",
          image: "https://oasis.opstatics.com/content/dam/oasis/page/2021/9-series/spec-image/9/Astralblack_9-min.png",
          brand: "OnePlus",
        },
        {
          id: 5,
          name: "Sony Xperia 1 III",
          description: "Pantalla OLED de 6.5 pulgadas, Snapdragon 888, 5G.",
          price: "$999",
          image: "https://images-na.ssl-images-amazon.com/images/I/61G9Nz-DbuL._AC_UL600_SR600,600_.jpg",
          brand: "Sony",
        },
        {
          id: 6,
          name: "Xiaomi Mi 11",
          description: "Pantalla AMOLED de 6.81 pulgadas, Snapdragon 888, 5G.",
          price: "$699",
          image: "https://http2.mlstatic.com/D_NQ_NP_741810-MSV51586785093_092022-O.webp",
          brand: "Xiaomi",
        },
      ],
      selectedBrand: "",
      filteredProducts: [],
    };
  },
  computed: {
    uniqueBrands() {
      return [...new Set(this.products.map((product) => product.brand))];
    },
  },
  methods: {
    filterProducts() {
      if (this.selectedBrand) {
        this.filteredProducts = this.products.filter(
          (product) => product.brand === this.selectedBrand
        );
      } else {
        this.filteredProducts = this.products;
      }
    },
  },
  mounted() {
    this.filteredProducts = this.products;
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.filters {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}

.product-card img {
  width: 100%;
  height: 350px;
  border-radius: 5px;
}

.product-card h3 {
  font-size: 1.2em;
  color: #333;
  margin: 10px 0;
}

.product-card p {
  font-size: 0.9em;
  color: #777;
}

.product-card .price {
  display: block;
  margin-top: 10px;
  font-size: 1.1em;
  color: #7918e7;
  font-weight: bold;
}
</style>
