<script lang="ts">
  import { T } from "@threlte/core";
  import { Float, OrbitControls, Stars } from "@threlte/extras";
  import Scene from "./models/scene.svelte";

</script>

<Stars depth={-100} saturation={100} factor={0.5} />
<T.PerspectiveCamera makeDefault position={[0, 0, 10]} fov={15}>
  <OrbitControls
    autoRotate
    enableZoom={false}
    autoRotateSpeed={0.1}
  />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={0.8} position.x={5} position.y={10} />
<T.AmbientLight intensity={0.7} />

<Float floatIntensity={1} floatingRange={[0, 0.1]}>
  <Scene />
</Float>
