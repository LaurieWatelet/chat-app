<script setup>
import Nav from '../components/Nav.vue';
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="">
    <header>
      <Nav />
    </header>

    <main class="flex-shrink-0 pb-5">
      <div class="container">
        <slot />
      </div>
    </main>
  </div>
</template>
