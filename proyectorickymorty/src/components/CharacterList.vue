<template>
  <div class="character-list">
    <div v-for="character in characters" :key="character.id" class="card">
      <img :src="character.image" alt="Character Image" />
      <h3>{{ character.name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['characters'],
};
</script>

<style scoped>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  width: 200px;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.card:hover {
  transform: scale(1.05);
}
</style>
