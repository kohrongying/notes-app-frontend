<script lang="ts">
  import { onMount } from 'svelte';
  import CollectionApi from "../api/collection";
  import Modal from '../components/modal/Modal.svelte'
  import SvgIcon from '../svg/SvgIcon.svelte'

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

  const handleUpdate = (collectionId, updatedName) => async () => {
    const body = {
      name: updatedName
    }
    await CollectionApi.updateCollection(collectionId, body)
    collections = await CollectionApi.getCollections(userId);
  }
  
  const modalSetVisible = (visible) => () => openModal = visible; 
</script>

<style>
.card {
  background: rgb(232, 231, 231);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
</style>

<h1>notes-app</h1>
<p>user id is {userId}</p>

<button on:click={modalSetVisible(true)}>Add Collection</button>
{#if collections}
  {#each collections as collection, index}
  <div class="card">
    {#if collection.isUpdating}
      <SvgIcon iconType='check' strokeColor='#4CAF50' onClick={handleUpdate(collection.objectId, collection.name)} />
      <input bind:value={collection.name} />
      <span on:click={() => collections[index].isUpdating=false}>Cancel</span>
    {:else}
      <SvgIcon iconType='folder' />
      <span on:click={() => collections[index].isUpdating=true}>{collection.name}</span>
    {/if}
  </div>
  {/each}
{/if}

<Modal open={openModal} onClose={modalSetVisible(false)} title="Add Collection">
  <input name="name" bind:value={collectionName} />
  <button on:click={handleCreate}>Submit</button>
</Modal>
