function Header({ onAddParticipant }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onAddParticipant(form.participant.value);
    form.reset();
  }

  return (
    <header className="Header">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="participant"
          name="participant"
          type="text"
          placeholder="Add to do..."
          required
        />
        <button type="submit"> Add </button>
      </form>
    </header>
  );
}

export default Header;