<template>
  <div id="app">
    <h1>Rick and Morty Characters</h1>
    <SearchFilter 
      v-model:searchQuery="searchQuery"
      v-model:statusFilter="statusFilter"
    />
    <CharacterList :characters="filteredCharacters" />
    <PaginationBottom
      :prev="prev"
      :next="next"
      @load-prev="loadPrevPage"
      @load-next="loadNextPage"
    />
  </div>
</template>

<script>
import axios from 'axios';
import SearchFilter from './components/SearchFilter.vue';
import CharacterList from './components/CharacterList.vue';
import PaginationBottom from './components/PaginationBottom.vue';

export default {
  components: {
    SearchFilter,
    CharacterList,
    PaginationBottom,
  },
  data() {
    return {
      characters: [],
      searchQuery: '',
      statusFilter: '',
      next: null,
      prev: null,
    };
  },
  computed: {
    filteredCharacters() {
      return this.characters.filter(character => {
        const matchesName = character.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus = this.statusFilter === '' || character.status.toLowerCase() === this.statusFilter.toLowerCase();
        return matchesName && matchesStatus;
      });
    },
  },
  mounted() {
    this.loadCharacters('https://rickandmortyapi.com/api/character');
  },
  methods: {
    loadCharacters(url) {
      axios.get(url)
        .then(response => {
          this.characters = response.data.results;
          this.next = response.data.info.next;
          this.prev = response.data.info.prev;
        });
    },
    loadNextPage() {
      if (this.next) {
        this.loadCharacters(this.next);
      }
    },
    loadPrevPage() {
      if (this.prev) {
        this.loadCharacters(this.prev);
      }
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}

h1 {
  margin: 20px;
  font-size: 2.5rem;
  color: #42b983;
}
</style>
