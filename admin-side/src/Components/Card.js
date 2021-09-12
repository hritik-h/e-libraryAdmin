import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddModal from './Modals/AddModal';
import UpdateModal from './Modals/UpdateModal';
import DeleteModal from './Modals/DeleteModal';
import { Rowing } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexDirection: "row",
  },
  largeIcon: {
    width: 160,
    height: 160,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
});


export default function SimpleCard(props) {
  const classes = useStyles();
  const [openAdd,setOpenAdd] = useState(false);
  const [openDelete,setOpenDelete] = useState(false);
  const [openUpdate,setOpenUpdate] = useState(false);
  
  function click(){
    console.log(props.title);
    if(props.title === "Add Books") setOpenAdd(true);
    if(props.title === "Delete Books") setOpenDelete(true);
    if(props.title === "Update Database") setOpenUpdate(true);
  }
  return (
    <div style={{display: "inline-block"}}>
      <Box display="inline-block"  p={5}>
            <Card className={classes.root}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {props.title}
            </Typography>
            <Box pl={3}>
                <IconButton color="primary" aria-label="upload picture" component="span" onClick={click}>
                        <props.icon className={classes.largeIcon} p={4} />
                </IconButton>
            </Box>
        </CardContent>
        </Card>
      </Box>

      <AddModal
        open = {openAdd}
        setOpen = {setOpenAdd}
      >
      </AddModal>

      <DeleteModal
        open = {openDelete}
        setOpen = {setOpenDelete}
      >
      </DeleteModal>

      <UpdateModal
        open = {openUpdate}
        setOpen = {setOpenUpdate}
      >
      </UpdateModal>
      </div>
  );

}



