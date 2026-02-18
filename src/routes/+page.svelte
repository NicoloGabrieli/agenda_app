<script>
  let agendas = [];
  let newAgenda = '';

  function addAgenda() {
    const v = newAgenda.trim();
    if (!v) return;

    agendas = [...agendas, v];
    newAgenda = '';
  }

  function removeAgenda(index) {
    agendas = agendas.filter((_, i) => i !== index);
  }
</script>

<main>
  <h1>SvelteKit Agendas App</h1>

  <div class="add-agenda">
    <input
      class="agenda-input"
      bind:value={newAgenda}
      placeholder="Add a new agenda"
      on:keydown={(e) => e.key === 'Enter' && addAgenda()}
    />
<button
  class="add-button"
  type="button"
  on:click={addAgenda}
  disabled={!newAgenda.trim()}
>
  Add
</button>
  </div>

  <ul class="agenda-list">
    {#each agendas as item, index (item)}
      <li class="agenda-item">
        <span>{item}</span>
        <button class="remove-button" type="button" on:click={() => removeAgenda(index)}>
          Remove
        </button>
      </li>
    {/each}
  </ul>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
  }
  h1 {
    color: #333;
  }
  .add-agenda {
    margin-bottom: 20px;
  }
  .agenda-input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .add-button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
  }
  .add-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
  .agenda-list {
    list-style-type: none;
    padding: 0;
    max-width: 520px;
    margin: 0 auto;
  }
  .agenda-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  .remove-button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
  }
</style>
