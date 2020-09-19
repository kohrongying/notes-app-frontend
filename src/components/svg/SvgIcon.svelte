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
{:else if iconType == 'close'}
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
{:else if iconType == 'delete'}
  <line x1="4" y1="7" x2="20" y2="7" />
  <line x1="10" y1="11" x2="10" y2="17" />
  <line x1="14" y1="11" x2="14" y2="17" />
  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
{:else if iconType == 'more'}
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="12" cy="5" r="1" />
{:else if iconType == 'document'}
  <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
  <line x1="9" y1="9" x2="10" y2="9" />
  <line x1="9" y1="13" x2="15" y2="13" />
  <line x1="9" y1="17" x2="15" y2="17" />
{/if}
</svg>