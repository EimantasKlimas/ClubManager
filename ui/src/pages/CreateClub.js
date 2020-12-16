import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import {VALUES} from "../constants/values";
import {PROTOCOL} from "../constants/protocol"
import "../styles/CreateClub.css"
import {MemberForm} from "../components/MemberForn";
import {MemberList} from "../components/MemberList";
import {ClubForm} from "../components/ClubForm";

const CreateClub = () => {
  const [clubName, setClubName] = React.useState("")
  const [memberName, setName] = React.useState("");
  const [memberSurname, setSurname] = React.useState("");
  const [memberList, setMemberList] = React.useState([]);

  const handleChange = (event) => {
    switch (event.target.name.toUpperCase()) {
      case VALUES.MEMBERNAME:
        setName(event.target.value);
        break;
      case VALUES.MEMBERSURNAME:
        setSurname(event.target.value);
        break;
      case VALUES.ADDMEMBER:
        handleAddMember()
        break;
      case VALUES.CLUBNAME:
        setClubName(event.target.value);
        break;
      case VALUES.ADDCLUB:
        handleAddClub()
        break;
      default:
        console.log("Unknown event")
    }
  };

  const handleAddMember = () => {
    let newMember = {
      "name": memberName,
      "surname": memberSurname
    };
    let newList = memberList.concat(newMember);

    setMemberList(newList);
    setName("");
    setSurname("");
  }

  const handleAddClub = () => {
    const url = "http://" +
      PROTOCOL.SERVER_URI +
      PROTOCOL.REQUEST_PREFIX +
      PROTOCOL.CREATE_CLUB_PREFIX

    var config = {
      headers: {'Access-Control-Allow-Origin': '*'}
    };

    let data = {
      name: clubName,
      members: memberList
    }

    axios
      .post(url, data, config)
      .then(res => console.log(res.status))
  }

  return(
    <Container className="form-container">
        <Paper className="form-item">
        <ClubForm onChange={handleChange}/>
        </Paper>
        <Paper className="form-item">
        <MemberForm
          onChange={handleChange}
          memberName={memberName}
          memberSurname={memberSurname}
        />
        </Paper>
        <Paper className="form-item">
        <MemberList
          memberList = {memberList}
        />
        </Paper>

    </Container>
  )
};

export {CreateClub};
