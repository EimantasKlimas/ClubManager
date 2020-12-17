import React, {useEffect} from 'react';
import {PROTOCOL} from "../constants/protocol";
import List from '@material-ui/core/List';
import Container from "@material-ui/core/Container";
import {ClubListItem} from "../components/ClubListItem";
import {Paper} from "@material-ui/core";

const ListClubs = () => {
  const webSocketUri = "ws://" +
    PROTOCOL.SERVER_URI +
    PROTOCOL.REQUEST_PREFIX +
    PROTOCOL.CLUB_WS_PREFIX

  const [clubsDetails, setClubsDetails] = React.useState([]);
  const [clubs, setClubs] = React.useState([]);
  const [members, setMembers] = React.useState([])
  const webSocket = React.useRef(null);

  const establishWebsocket = () => {
    webSocket.current = new WebSocket(webSocketUri);
    webSocket.current.onmessage = (message) => processMessage(message)
    webSocket.current.onopen = () => getClubData()
    webSocket.current.onclose = () => console.log("ws closed");

    return () => webSocket.current.close();
  }

  const getClubData = () => {
    webSocket.current.send("GETDATA");
  }

  const processMessage = (message) => {
    setClubsDetails(prev => [...prev, JSON.parse(message.data)])
  }

  const clubProcessing = () => {
    clubsDetails.forEach((clubDetails) => {
      let club = {
        id: clubDetails.id,
        name: clubDetails.name
      }
      if(!checkForClubPresence(club.id)) {
        setClubs(prev => [...prev, club])
      }
    });
  }

  const memberProcessing = () => {
    clubsDetails.forEach((clubsDetails) => {
      if(clubsDetails.member) {
        let member = {
          id: clubsDetails.member.id,
          name: clubsDetails.member.name,
          surname: clubsDetails.member.surname,
          clubId: clubsDetails.id
        }
        if (!checkForMemberPresence(member.id)) {
          setMembers(prev => [...prev, member])
        }
      }
    })
  }

  const checkForClubPresence = (clubId) => {
    return clubs.map((club) => club.id).includes(clubId);
  }

  const checkForMemberPresence = (memberId) => {
    return members.map((member) => member.id).includes(memberId);
  }

  const getClubMembers = (clubId)  => {
    return members.filter((member) => member.clubId === clubId);
  }

  useEffect(establishWebsocket,[]);
  useEffect(clubProcessing, [clubsDetails]);
  useEffect(memberProcessing, [clubs]);
  setInterval(() => getClubData(), 45000)

  return(
    <Container>
      <List>
      {clubs.map((club) =>
        <Paper key={club.id}>
        <ClubListItem  club={club} members={getClubMembers(club.id)}/>
        </Paper>
        )
      }
      </List>
    </Container>
  );
}

export {ListClubs};
