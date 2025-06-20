import { Box, Grid, InputLabel, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import Home from './Home';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Field, Form, Formik } from 'formik';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const AddStudent = () => {


    const studentList = [];

    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleCardClickOpen = () => {
        setOpen1(true);
    };
    const handleCardClose = () => {
        setOpen1(false);
    };


    const label = { inputProps: { 'aria-label': 'Size switch demo' } };



    return (
        <>

            <Home>

                <Paper elevation={4} sx={{ padding: 2, borderRadius: 2, backgroundColor: "#b4ff0014" }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid size={{ lg: 10, md: 10, sm: 12, xs: 12 }}>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth sx={{ backgroundColor: "#00b8ff29", fontFamily: "cursive" }}>
                                    <Autocomplete
                                        disablePortal
                                        fullWidth
                                        options={studentList}
                                        sx={{ width: "100%" }}
                                        renderInput={(params) => <TextField {...params} label="Search" />}
                                    />
                                </FormControl>
                            </Box>
                        </Grid>

                        <Grid size={{ lg: 2, md: 2, sm: 12, xs: 12 }} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>


                            <Button variant="contained" onClick={handleClickOpen}
                                sx={{
                                    width: "100%",
                                    textTransform: 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#1565c0',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            >
                                Add Student
                            </Button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                            >
                                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                    Add Student
                                </DialogTitle>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={(theme) => ({
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: theme.palette.grey[500],
                                    })}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <DialogContent dividers>

                                    <Formik>
                                        <Form>

                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Full Name</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    sx={{ width: "100%", mb: 2 }}
                                                    label="Full Name"

                                                >

                                                </Select>

                                            </FormControl>

                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Select Stream</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    sx={{ width: "100%", mb: 2 }}
                                                    label="Stream/Class"

                                                >

                                                </Select>
                                            </FormControl>



                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    sx={{ width: "100%", mb: 2 }}
                                                    label="Age"

                                                >

                                                </Select>
                                            </FormControl>

                                            <Field name="contact"

                                                as={TextField}
                                                label="Contact"
                                                sx={{ width: "100%", mb: 2 }}></Field>



                                        </Form>
                                    </Formik>

                                </DialogContent>
                                <DialogActions>
                                    <Button variant='contained' autoFocus onClick={handleClose}>
                                        Submit
                                    </Button>
                                </DialogActions>
                            </BootstrapDialog>
                        </Grid>
                    </Grid>
                </Paper>

                <br /><br />
                <Grid container spacing={0} sx={{ alignItems: "center" }}>

                    <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>

                        <table style={{ borderSpacing: "0px", width: "100%", textAlign: "center" }}>
                            <thead style={{ backgroundColor: "rgb(25, 118, 210)" }}>

                                <tr>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>No</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Name</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Stream</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Details</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Contact</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Active Status</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }} >Delete</th>
                                    <th style={{ padding: "20px 3px", color: "white", fontFamily: "math", fontSize: "14px" }}>Update</th>
                                </tr>


                            </thead>
                            <tbody>
                                <tr style={{ textAlign: "center" }}>
                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math", fontSize: "14px" }}>No</td>
                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math", fontSize: "14px" }}>Maulik khambhdiya</td>
                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math", fontSize: "14px" }}>Stream</td>

                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math" }}>


                                        <Button sx={{
                                            borderRadius: "30px",
                                            color: "blue",
                                            backgroundColor: "yellow",
                                            padding: "3px 10px"

                                        }}

                                            variant="outlined" onClick={handleCardClickOpen}>
                                            Student Card
                                        </Button>
                                        <BootstrapDialog
                                            onClose={handleCardClose}
                                            aria-labelledby="customized-dialog-title"
                                            open={open1}
                                        >
                                            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                                Student Card
                                            </DialogTitle>
                                            <IconButton
                                                aria-label="close"
                                                onClick={handleCardClose}
                                                sx={(theme) => ({
                                                    position: 'absolute',
                                                    right: 8,
                                                    top: 8,
                                                    color: theme.palette.grey[500],
                                                })}
                                            >
                                                <CloseIcon />
                                            </IconButton>
                                            <DialogContent dividers>

                                                <Typography gutterBottom>
                                                    <table border="1">
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Name</th>
                                                            <th>Age</th>
                                                            <th>Date of Birth</th>
                                                            <th>Blood Group</th>
                                                            <th>Address</th>
                                                        </tr>

                                                        {/* {
                                                        student.map((student, index) =>(
                                                            <tr>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                                <td></td>
                                                            </tr>
                                                        ))
                                                    } */}

                                                    </table>
                                                </Typography>

                                            </DialogContent>

                                        </BootstrapDialog>
                                    </td>

                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math", fontSize: "14px" }}>7879898787</td>
                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math" }}>
                                        <Switch {...label} defaultChecked size="small" />
                                    </td>

                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math" }}>
                                        <button style={{ border: "none", background: "none" }}><DeleteIcon sx={{ ":hover": { color: "rgb(255, 3, 3)" }, fontSize: "25px" }} /></button>
                                    </td>

                                    <td style={{ padding: "20px 3px", color: "black", fontFamily: "math" }}>
                                        <button style={{ border: "none", background: "none" }}><EditDocumentIcon sx={{ ":hover": { color: "rgb(140, 7, 158)" }, fontSize: "25px" }} /></button>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </Grid>


                </Grid>



            </Home>
        </>
    )
}

export default AddStudent