<script>
  import { Canvas } from "@threlte/core";
  import Profile from "$lib/images/profile.jpg";
  import App from "./App.svelte";
</script>

<div class="relative">
  <div
    class="h-screen flex flex-col md:justify-center justify-end items-center w-full px-4"
  >
    <div
      class="w-full flex justify-center items-center md:mb-0 mb-32 md:space-x-0 space-x-10"
    >
      <div>
        <img
          class="w-32 h-32 object-cover rounded-full border-2 border-amber-500 shadow-2xl shadow-amber-500/20"
          src={Profile}
          alt="profile"
        />
      </div>
      <div class="w-56 md:block hidden" />
      <div class="text-center">
        <h2>whocare i'm</h2>
        <h1>BossNz</h1>
        <h2>skibidi</h2>
      </div>
    </div>
  </div>
  <section>
    <Canvas>
      <App />
    </Canvas>
  </section>
</div>

<style type="postcss" scoped>
  section {
    @apply h-screen w-full absolute top-0;
  }
  h2{
    @apply opacity-50
  }
</style>
