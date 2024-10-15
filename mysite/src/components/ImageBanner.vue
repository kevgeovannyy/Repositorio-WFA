<template>
  <swiper v-if="isInitialized" :modules="[Navigation]" navigation>
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image" alt="Banner Image" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import { onMounted, onBeforeUnmount, ref } from "vue";
import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const images = [
      "https://via.placeholder.com/800x300?text=Banner+1",
      "https://via.placeholder.com/800x300?text=Banner+2",
      "https://via.placeholder.com/800x300?text=Banner+3",
    ];
    
    const isInitialized = ref(false);

    onMounted(() => {
      isInitialized.value = true; // Inicializa Swiper al montar el componente
    });

    onBeforeUnmount(() => {
      isInitialized.value = false; // Asegúrate de desmontar Swiper correctamente
    });

    return {
      images,
      isInitialized,
    };
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
