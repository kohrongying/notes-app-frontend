<script lang="ts">
  import { onMount } from 'svelte';
  import CollectionApi from "../api/collection";
  import Modal from '../components/modal/Modal.svelte'

  let userId: string = 'sprNjQEcRv';
  let collections: Array<{ objectId: string, name: string, user: { __type: string, className: string, objectId: string }}> = [];
  let openModal = false;
  let collectionName = '';

	onMount(async () => {
    collections = await CollectionApi.getCollections(userId);
  });

  const handleCreate = async () => {
    await CollectionApi.createCollection(collectionName, userId)
    openModal = false
    collections = await CollectionApi.getCollections(userId);
  }
  
  const modalSetVisible = (visible) => () => openModal = visible; 


</script>

<h1>notes-app</h1>
<p>user id is {userId}</p>

<button on:click={modalSetVisible(true)}>Add Collection</button>
{#if collections}
  {#each collections as collection}
    <p>{collection.name}</p>
  {/each}
{/if}

<Modal open={openModal} onClose={modalSetVisible(false)} title="Add Collection">
  <input name="name" bind:value={collectionName} />
  <button on:click={handleCreate}>Submit</button>
</Modal>
