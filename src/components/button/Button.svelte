<script lang="ts">
  export let onClick: any;
  export let disabled = false;
</script>

<style>
  button {
    padding: 8px 15px;
    background: transparent;
    border: 2px solid slategray;
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  button:hover {
    background-color: rgb(206, 206, 206);
    cursor: pointer;
  }
  button:disabled {
    border: 2px solid lightgray;
    cursor: not-allowed;
  }
</style>

<button on:click={onClick} disabled={disabled}>
  <slot></slot>
</button>