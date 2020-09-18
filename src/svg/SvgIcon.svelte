<script>
  export let strokeColor = "#607D8B";
  export let iconType = 'link';

  const doNothing = () => {};
  export let onClick = doNothing;
</script>

<svg on:click={onClick} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke={strokeColor} fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z"/>
{#if iconType == 'check'}
  <path d="M5 12l5 5l10 -10" />
{:else if iconType == 'link'}
  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
{:else if iconType == 'folder'}
  <path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
{/if}
</svg>