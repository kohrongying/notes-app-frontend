<script lang="ts">
  export let open: boolean;
  export let title: string;
  export let onClose: func;

</script>

<style>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 1;
  visibility: visible;
  transform: scale(1.0);
  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
}

.modal--body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 24rem;
  border-radius: 10px;
}

.modal--header {
  padding: 15px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modal--header_title {
  text-transform: uppercase;
}

.modal--content {
  padding: 15px 24px;
}

hr {
  border: 0.1px solid #d2d2d2;
  margin-top: 0;
}

.close-button {
  float: right;
  width: 1.5rem;
  text-align: center;
  cursor: pointer;
  font-size: 30px;
  background: none;
  border: none;
}

.close-button:hover {
  color: #d2d2d2;
}
</style>


{#if open}
<div class="modal">
  <div class="modal--body">
    <div class="modal--header">
      <div class="text-bold modal--header_title">{title}</div>
      <button class="close-button" on:click={onClose}>
        &times;
      </button>
    </div>
    <hr />

    <div class="modal--content">
      <slot></slot>
    </div>
  </div>
</div>
{/if}