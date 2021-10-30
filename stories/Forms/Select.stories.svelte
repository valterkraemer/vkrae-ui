<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Forms/Select" />

<Story name="Default">
  <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</Story>

<Story name="Sizing">
  <select
    class="form-select form-select-lg mb-3"
    aria-label=".form-select-lg example"
  >
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <select
    class="form-select form-select-sm"
    aria-label=".form-select-sm example"
  >
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</Story>

<Story name="Disabled">
  <select class="form-select" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</Story>
