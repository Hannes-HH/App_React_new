import "./App.css";
import Header from "./components/Header";
import "./index.css"; 
import { useState } from "react";
import ParticipantList from "./components/ParticipantList";


export default function App() {
  
  const [participants, setParticipants] = useState([]);

  function handleAddParticipant(participantName) {
  
    const newParticipants = [
      ...participants,
      {
        name: participantName,
        isPresent: true
      }
    ];
    setParticipants(newParticipants);
  }

  function handleTogglePresence(name) {
    
    const newParticipants = participants.map((participant) => {
      if (participant.name === name) {
        return {
          
          ...participant,
          isPresent: !participant.isPresent
        };
      } else {
        return participant;
      }
    });

    setParticipants(newParticipants);
  }

  function handleDeleteParticipant(name) {
   
    const newParticipants = participants.filter(
      (participant) => participant.name !== name
    );

    setParticipants(newParticipants);
  }

  return (
    <div className="App">
      <Header onAddParticipant={handleAddParticipant} />
      <ParticipantList
        participants={participants}
        onTogglePresence={handleTogglePresence}
        onDeleteParticipant={handleDeleteParticipant}
      />
    </div>
  );
}
