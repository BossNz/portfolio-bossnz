<script>
  import { Canvas } from "@threlte/core";
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
          src="https://media.discordapp.net/attachments/1030836169870675999/1304251122310971473/525094A2-D82D-446E-807E-0DE80A51BCBE.jpg?ex=672eb603&is=672d6483&hm=8f39b2eb4a4e75f9dfd4383b3f04bbb1a28e79e1887bb4f9e47c331a8922aeca&=&format=webp&width=679&height=905"
          alt="profile"
        />
      </div>
      <div class="w-56 md:block hidden" />
      <div class="text-center">
        <h2 class="opacity-50">whocare i'm</h2>
        <h1>BossNz</h1>
        <h2 class="opacity-50">skibidi</h2>
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
</style>
