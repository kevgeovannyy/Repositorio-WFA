<template>
  <div class="pagination">
    <button @click="loadPrevPage" :disabled="!prev" class="pagination-btn">Anterior</button>
    <button @click="loadNextPage" :disabled="!next" class="pagination-btn">Siguiente</button>
  </div>
</template>

<script>
export default {
  props: ['prev', 'next'],
  methods: {
    loadPrevPage() {
      this.$emit('load-prev');
    },
    loadNextPage() {
      this.$emit('load-next');
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.pagination-btn {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #42b983;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.pagination-btn:hover {
  background-color: #1d8f65;
}

.pagination-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
