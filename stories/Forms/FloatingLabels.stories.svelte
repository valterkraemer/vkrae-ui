<script>
  import { Meta, Story } from "@storybook/addon-svelte-csf";
</script>

<Meta title="Forms/Floating labels" />

<Story name="Example">
  <div class="form-floating mb-3">
    <input
      type="email"
      class="form-control"
      id="floatingInput"
      placeholder="name@example.com"
    />
    <label for="floatingInput">Email address</label>
  </div>
  <div class="form-floating">
    <input
      type="password"
      class="form-control"
      id="floatingPassword"
      placeholder="Password"
    />
    <label for="floatingPassword">Password</label>
  </div>

  <form class="form-floating">
    <input
      type="email"
      class="form-control"
      id="floatingInputValue"
      placeholder="name@example.com"
      value="test@example.com"
    />
    <label for="floatingInputValue">Input with value</label>
  </form>

  <form class="form-floating">
    <input
      type="email"
      class="form-control is-invalid"
      id="floatingInputInvalid"
      placeholder="name@example.com"
      value="test@example.com"
    />
    <label for="floatingInputInvalid">Invalid input</label>
  </form>
</Story>

<Story name="Textareas">
  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea"
    />
    <label for="floatingTextarea">Comments</label>
  </div>

  <div class="form-floating">
    <textarea
      class="form-control"
      placeholder="Leave a comment here"
      id="floatingTextarea2"
      style="height: 100px"
    />
    <label for="floatingTextarea2">Comments</label>
  </div>
</Story>

<Story name="Selects">
  <div class="form-floating">
    <select
      class="form-select"
      id="floatingSelect"
      aria-label="Floating label select example"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <label for="floatingSelect">Works with selects</label>
  </div>
</Story>

<Story name="Layout">
  <div class="row g-2">
    <div class="col-md">
      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInputGrid"
          placeholder="name@example.com"
          value="mdo@example.com"
        />
        <label for="floatingInputGrid">Email address</label>
      </div>
    </div>
    <div class="col-md">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <label for="floatingSelectGrid">Works with selects</label>
      </div>
    </div>
  </div>
</Story>
