<script lang="ts">
  import "$lib/css/tailwind.css";
  import { playSound } from "$lib/utils/playsound";
  import { expoInOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  let favicon = "/favicon.png";
  let visible = true;

  const handleClick = () => {
    visible = !visible;
    playSound();
  };
</script>

<svelte:head>
  <link rel="icon" type="image/svg" href={favicon} />
</svelte:head>

<main class="font-ubuntu">
  {#if visible}
    <div
      class="fixed bg-zinc-950 h-screen w-full z-50 flex flex-col items-center justify-center"
      on:click={() => handleClick()}
      on:keydown={() => handleClick()}
      role="button"
      tabindex="0"
      transition:slide={{ duration: 1500, easing: expoInOut }}
    >
      <img src={favicon} alt="cat" class="w-52" />
      <p>"Wherever you click, magic happens. Try it!"</p>
    </div>
  {/if}
  <slot />
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.zinc.950);
  }
</style>
