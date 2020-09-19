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

  const handleDelete = (collectionId) => async () => {
    await CollectionApi.deleteCollection(collectionId)
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
  justify-content: space-between;
}
.card .container {
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  grid-column-gap: 10px;
}
.cancel-text {
  font-size: 14px;
  margin-left: 10px;
}
.place-center {
  display: flex;
  align-items: center;
}
</style>

<h1>notes-app</h1>
<p>user id is {userId}</p>

<button on:click={modalSetVisible(true)}>Add Collection</button>
{#if collections}
  {#each collections as collection}
  <div class="card">
    <div class="container">
      {#if collection.isUpdating}
        <SvgIcon iconType='check' strokeColor='#4CAF50' onClick={handleUpdate(collection.objectId, collection.name)} />
        <input bind:value={collection.name} />
        <span class='cancel-text' on:click={() => collection.isUpdating=false}>Cancel</span>
      {:else}
        <SvgIcon iconType='folder' />
        <span on:click={() => collection.isUpdating=true}>{collection.name}</span>
      {/if}
    </div>
    
    <div class="place-center">
      {#if collection.showMore}
        <SvgIcon strokeColor='red' iconType='delete' onClick={handleDelete(collection.objectId)} />
        <span class='cancel-text' on:click={() => collection.showMore=false}>Cancel</span>
      {:else}
        <SvgIcon iconType='more' onClick={() => collection.showMore=true} />
      {/if}
    </div>
  </div>
  {/each}
{/if}

<Modal open={openModal} onClose={modalSetVisible(false)} title="Add Collection">
  <input name="name" bind:value={collectionName} />
  <button on:click={handleCreate}>Submit</button>
</Modal>
