<template>
  <div class="search-filter">
    <input 
      :value="searchQuery" 
      @input="$emit('update:searchQuery', $event.target.value)" 
      placeholder="Buscar por nombre" 
      class="search-input" 
    />
    
    <select 
      :value="statusFilter" 
      @change="$emit('update:statusFilter', $event.target.value)" 
      class="filter-select"
    >
      <option value="">Todos</option>
      <option value="alive">Vivo</option>
      <option value="dead">Muerto</option>
      <option value="unknown">Desconocido</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['searchQuery', 'statusFilter'],
};
</script>

<style scoped>
.search-filter {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  padding: 8px;
  width: 300px;
  font-size: 1rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  outline: none;
  border-color: #1d8f65;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.filter-select {
  padding: 8px;
  font-size: 1rem;
  border: 2px solid #42b983;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.filter-select:hover {
  border-color: #1d8f65;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}
</style>
