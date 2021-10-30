<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Forms/Range" />

<Story name="Overview">
  <label for="customRange1" class="form-label">Example range</label>
  <input type="range" class="form-range" id="customRange1" />
</Story>

<Story name="Disabled">
  <label for="disabledRange" class="form-label">Disabled range</label>
  <input type="range" class="form-range" id="disabledRange" disabled />
</Story>

<Story name="Min and max">
  <label for="customRange2" class="form-label">Example range</label>
  <input type="range" class="form-range" min="0" max="5" id="customRange2" />
</Story>

<Story name="Steps">
  <label for="customRange3" class="form-label">Example range</label>
  <input
    type="range"
    class="form-range"
    min="0"
    max="5"
    step="0.5"
    id="customRange3"
  />
</Story>
