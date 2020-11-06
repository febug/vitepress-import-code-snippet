<template>
  <div>
      <p>name: <input type="text" v-model="name" /></p>
      <p></p>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useLocalStorage } from "vueposu";

export default {
  setup() {
      const name = useLocalStorage('name', 'Tom');

      return { 
          name
      }
  },
};
</script>