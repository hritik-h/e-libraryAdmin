import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid, Paper} from '@material-ui/core';
import {useForm,Form} from './useForm';
import Controls from '../controls/Controls';
import * as bookService from '../../Services/BookService';
import axios from 'axios';

const initialValues = {
  title: '',
  author: '',
  edition: '',
  type: '',
  price: 0,
  publishDate: new Date(),
  edition: '',
  totalNumber: "",
  description: "",
  coverpic: [],
  image1: [],
  image2: [],
  image3: [],
  image4: []
}

const typeItems = [
  {id: 'book', title: "Book"},
  {id: 'e-book', title: "eBook"},
]

const useStyles = makeStyles((theme) => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddModal(props) {
  const classes = useStyles();
  const {values,setValues,handleInputChange} = useForm(initialValues);
  const {open, setOpen} = props;
  const [pic,setPic] = useState(null);
  function handleClose(){
    setOpen(false);
  }

  const handlePicSelect = (e) =>{
    e => setPic(e.target.files[0])
    console.log(e.target.files[0])
  } 
  function handleUpload(){
    values.coverpic=pic;
    console.log(pic)
  }

  useEffect(() => {
    if(props.title === "update") {
      setValues(props.load);
    }
  });

  
  function handleSubmit(){
    console.log(values)
    if(props.title === "update"){
      axios.post(`http://localhost:8080/admin/update-book/${props.id}`,values)
      .then(responce =>{
        console.log(responce);
      })
      .catch(error =>{
        console.log(error);
      })
    }else{
      axios.post("http://localhost:8080/admin/add-books",values)
      .then(responce =>{
        console.log(responce);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    
  }

  
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Paper className={classes.pageContent}>
              <Form onSubmit={handleSubmit} >
                <Grid container >
                  <Grid item xs={6} >
                    <Controls.Input
                      name = "title"
                      label= "Title"
                      value= {values.title}
                      onChange={handleInputChange}
                    /> 
                    <Controls.Input
                      name = "author"
                      label= "Author"
                      value= {values.author}
                      onChange={handleInputChange}
                    /> 
                    <Controls.Input
                      name = "edition"
                      label= "Edition"
                      value= {values.edition}
                      onChange={handleInputChange}
                    />
                    <Grid container > 
                      <Grid item xs={3}>
                        <Controls.Input
                          name = "price"
                          label= "Price"
                          value= {values.price}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Controls.Input
                          name = "totalNumber"
                          label= "Total"
                          value= {values.totalNumber}
                          onChange={handleInputChange}
                        />
                      </Grid>
                      <Grid container>
                      <Grid container>
                      <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              onChange={handlePicSelect}
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              color="secondary"
                              text="Upload"
                              onClick={handleUpload}
                              />
                            </label>
                        </Grid>
                        <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                        </Grid>
                      </Grid>
                      <Grid container>
                      <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Controls.Button 
                              varient="contained"
                              component="span" 
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                        </Grid>
                        <Grid>
                          <input
                              accept="image/*"
                              className={classes.input}
                              style={{ display: 'none' }}
                              id="raised-button-file"
                              multiple
                              type="file"
                            />
                            <label htmlFor="raised-button-file">
                              <Controls.Button  
                              varient="contained"
                              component="span" 
                              text="Upload"
                              color="secondary"
                              />
                            </label>
                          </Grid>
                      </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} >
                    <Controls.RadioGroup
                      name = "type"
                      label= "Type"
                      value = {values.type}
                      onChange={handleInputChange}
                      items= {typeItems}
                    />
                    <Controls.Select
                      name="category"
                      label="Category"
                      value={values.category}
                      onChange={handleInputChange}
                      options={bookService.getCategoriesCollection()}
                    />
                    
                    <Controls.DatePicker
                      name="publishDate"
                      label="Publish Date"
                      value={values.publishDate}
                      onChange={handleInputChange}
                    />
                    <Controls.Input
                          name = "description"
                          label= "Description"
                          value= {values.description}
                          onChange={handleInputChange}
                      />
                    <div>
                      <Controls.Button
                        varient="contained"
                        type = "submit"
                        text="Submit"
                      />
                      <Controls.Button
                      varient="contained"
                        text="Reset"
                        color="default"
                      />
                    </div>
                  </Grid>
                </Grid>
              </Form>
          </Paper>
        </Fade>
      </Modal>
    </div>
  );
}
