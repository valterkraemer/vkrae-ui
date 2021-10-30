<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import variables from "../utils/scss-variables";

  const gridBreakpoints = Object.entries(variables["grid-breakpoints"] || {});
</script>

<Meta title="Layout/Breakpoints" />

<Story name="Default">
  <table class="table">
    <thead>
      <tr>
        <th>Class infix</th>
        <th>Dimensions</th>
      </tr>
    </thead>
    <tbody>
      {#each gridBreakpoints as gridBreakpoint}
        <tr>
          <td><em>{gridBreakpoint[0]}</em></td>
          <td>≥{gridBreakpoint[1]}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</Story>
