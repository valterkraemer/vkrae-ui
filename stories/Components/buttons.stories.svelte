<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import variables from "../utils/scss-variables";

  const themeColors = Object.entries(variables["theme-colors"] || {});
</script>

<Meta title="Components/Buttons" />

<Story name="Examples">
  {#each themeColors as color}
    <button class="btn btn-{color[0]}">{color[0]}</button>
  {/each}
</Story>

<Story name="Outline buttons">
  {#each themeColors as color}
    <button class="btn btn-outline-{color[0]}">{color[0]}</button>
  {/each}
</Story>

<Story name="Sizes">
  <div>
    {#each themeColors as color}
      <button class="btn btn-lg btn-outline-{color[0]}">{color[0]}</button>
    {/each}
  </div>
  <div>
    {#each themeColors as color}
      <button class="btn btn-sm btn-outline-{color[0]}">{color[0]}</button>
    {/each}
  </div>
</Story>

<Story name="Disabled state">
  {#each themeColors as color}
    <button class="btn btn-lg btn-{color[0]}" disabled
      >{color[0]}</button
    >
  {/each}
</Story>
