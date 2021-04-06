function Participant({ name, isPresent, onTogglePresence, onDelete }) {
  function handleToggleClick() {
    onTogglePresence(name);
  }

  function handleDeleteClick() {
    onDelete(name);
  }

  const classForPresence = isPresent
    ? "Participant--present"
    : "Participant--absent";

  return (
    <section className={`Participant ${classForPresence}`}>
      <button className="Participant__delete" onClick={handleDeleteClick}>
        x
      </button>
      <div> {name} </div>
      <button onClick={handleToggleClick}>
        {isPresent ? "Present" : "Absent"}
      </button>
    </section>
  );
}

export default Participant;