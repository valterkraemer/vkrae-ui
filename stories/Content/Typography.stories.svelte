<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";

  import variables from "../utils/scss-variables";

  const fontSizes = Object.entries(variables["font-sizes"]);
</script>

<Meta title="Content/Typography" />

<Story name="Default">
  <table class="table">
    <thead>
      <tr>
        <th>Heading</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      {#each fontSizes as fontSize}
        <tr>
          <td><code>{`<h${fontSize[0]}></h${fontSize[0]}>`}</code></td>
          <td
            >{@html `<h${fontSize[0]}>h${fontSize[0]}. Heading</h${fontSize[0]}>`}</td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</Story>
