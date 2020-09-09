<script lang="ts">
  import { onMount } from 'svelte';
  import CollectionApi from "../api/collection";

  let userId: string = 'J893XQ2lmy';
  let collections: Array<{ objectId: string, name: string, userId: string}> = [];

	onMount(async () => {
    collections = await CollectionApi.getCollections(userId);
	});
</script>

<h1>notes-app</h1>
<p>user id is {userId}</p>

{#if collections}
  {#each collections as collection}
    <p>{collection.name}</p>
  {/each}
{/if}
