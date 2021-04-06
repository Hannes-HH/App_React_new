import Participant from "./Participant";

function ParticipantList({
  participants,
  onTogglePresence,
  onDeleteParticipant
}) {
  function renderParticipants() {
    return participants.map((participant, index) => {
      return (
        <Participant
          key={participant.name}
          name={participant.name}
          isPresent={participant.isPresent}
          onTogglePresence={onTogglePresence}
          onDelete={onDeleteParticipant}
        />
      );
    });
  }
  return <main className="ParticipantList">{renderParticipants()}</main>;
}

export default ParticipantList;