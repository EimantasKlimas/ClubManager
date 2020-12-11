import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import {VALUES} from "../constants/values";
import "../styles/CreateClub.css"
import {MemberForm} from "../components/MemberForn";
import {MemberList} from "../components/MemberList";
import {ClubForm} from "../components/ClubForm";

const CreateClub = () => {
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
