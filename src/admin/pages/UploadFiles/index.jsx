import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import uploadIcon from '../../../assets/icons/imageIcon.svg';
import Footer from '../../../components/ui/Footer';
import AdminHeader from '../../components/Header';
import Heading from '../../components/Heading';
import Sidebar from '../../components/Sidebar';
import useStyles from './UploadFiles.styles';

const UploadFiles = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        vectorFileExtension: false,
        vectorColor: false,
        vectorPreviewSize: false,
        vectorFileTitle: false,
        psdFileExtension: false,
        psdColor: false,
        psdPreviewSize: false,
        psdFileTitle: false,
        pngFileExtension: false,
        pngColor: false,
        pngPreviewSize: false,
        pngFileTitle: false,
    });

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.checked});
    };

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
        const files = acceptedFiles.map(file => (
            <li key={file.path}>
                {file.path}
                {/* <img src={file.path} alt="Dropped file"/> */}
            </li>
        ));

        return files;
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
 
      return (
        <>
            <AdminHeader />
            
            <div className={classes.adminRoot}>
                <Sidebar />

                <main className={classes.content}>
                    <div className={classes.uploadContainer}>
                        <Heading className={classes.headingTop} tag="h2">Upload Your Content</Heading>

                        <div className={classes.fileUploadContainer} {...getRootProps()} style={isDragActive ? {borderColor: "#117A00"} : undefined}>
                            <div className={classes.uploadIconWrapper} style={isDragActive ? {backgroundColor: "#117A00"} : undefined}>
                                <input {...getInputProps()} />
                                <img src={uploadIcon} alt="Drag and drop" />
                            </div>

                            {isDragActive ? (
                                <Heading tag="h2">Drop the files here...</Heading>
                            ) : (
                                <Heading tag="h2">Drag and drop your files here</Heading>
                            )}
                            <Typography className={classes.subtitle} variant="body1">Images must be .eps or .jpg format. Videos must be .mov or .Mp4 format.</Typography>
                        </div>
                        {onDrop.map}

                        <Heading tag="h2">What type of content are you going to upload?</Heading>
                    </div>
                    
                    <Card className={classes.cardRoot}>
                        <CardContent className={classes.cardContent}>
                            <Grid container>
                                <Grid item xs={4}>
                                    <div className={classes.checkboxCol}>
                                        <Heading tag="h2">Vectors</Heading>
                                        
                                        <FormGroup>
                                            <FormControlLabel
                                                classes={{root: classes.root, label: classes.label}}
                                                control={
                                                <Checkbox
                                                    checked={state.vectorFileExtension}
                                                    onChange={handleChange}
                                                    name="vectorFileExtension"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="EPS and a JPG preview file (with the same name) up to 80MB"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.vectorColor}
                                                    onChange={handleChange}
                                                    name="vectorColor"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="RGB Color"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.vectorPreviewSize}
                                                    onChange={handleChange}
                                                    name="vectorPreviewSize"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Preview file must be between 2.000px and 8.000px on any of its sides"
                                                />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.vectorFileTitle}
                                                    onChange={handleChange}
                                                    name="vectorFileTitle"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Titles and tags can be included in preview file. How can I do this?"
                                                />
                                        </FormGroup>
                                    </div>
                                </Grid>

                                <Grid item xs={4}>
                                    <div className={classes.checkboxCol}>
                                        <Heading tag="h2">PSD</Heading>
                                        
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.psdFileExtension}
                                                    onChange={handleChange}
                                                    name="psdFileExtension"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="EPS and a JPG preview file (with the same name) up to 80MB"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.psdColor}
                                                    onChange={handleChange}
                                                    name="psdColor"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="RGB Color"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.psdPreviewSize}
                                                    onChange={handleChange}
                                                    name="psdPreviewSize"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Preview file must be between 2.000px and 8.000px on any of its sides"
                                                />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.psdFileTitle}
                                                    onChange={handleChange}
                                                    name="psdFileTitle"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Titles and tags can be included in preview file. How can I do this?"
                                                />
                                        </FormGroup>
                                    </div>
                                </Grid>

                                <Grid item xs={4}>
                                    <div>
                                        <Heading tag="h2">PNG</Heading>
                                        
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.pngFileExtension}
                                                    onChange={handleChange}
                                                    name="pngFileExtension"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="EPS and a JPG preview file (with the same name) up to 80MB"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={state.pngColor}
                                                    onChange={handleChange}
                                                    name="pngColor"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                />
                                                }
                                                label="RGB Color"
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.pngPreviewSize}
                                                    onChange={handleChange}
                                                    name="pngPreviewSize"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Preview file must be between 2.000px and 8.000px on any of its sides"
                                                />
                                        </FormGroup>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    checked={state.pngFileTitle}
                                                    onChange={handleChange}
                                                    name="pngFileTitle"
                                                    color="primary"
                                                    className={classes.checkBox}
                                                    />
                                                }
                                                label="Titles and tags can be included in preview file. How can I do this?"
                                                />
                                        </FormGroup>
                                    </div>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </main>
            </div>
            
            <Footer addminFooter />
        </>
    )
}

export default UploadFiles
