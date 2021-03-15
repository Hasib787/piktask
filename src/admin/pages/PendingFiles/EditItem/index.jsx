import { Button, Chip, TextField } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import useStyles from './EditItem.styles';

const EditItem = ({item}) => {
    const classes = useStyles();
    const [category, setCategory] = useState("Category");
    const [title, setTitle] = useState(item.name);

    const handleChange = (e) => {
        const name = e.target.name;
        setCategory({
          ...category,
          [name]: e.target.value,
        });
      };

      const keyWords = [
        { title: 'Business Card' },
        { title: 'Card' },
        { title: 'Vector' },
        { title: 'Background' },
        { title: 'Banner' },
        { title: 'Abstract' },
        { title: 'Pattern' },
        { title: 'Logo' },
        { title: 'Frame' },
        { title: 'Photo Frame' },
        { title: 'Mockup' },
        { title: 'Icon' },
      ];
    
    return (
        <div className={classes.editItemWrapper}>
            <form className={classes.formRoot} noValidate autoComplete="off">
                <div className={classes.imgWrapper}>
                    <img className={classes.editItemImage} src={item.image} alt={item.name} />
                </div>

                <div className={classes.fieldGroup}>
                    <label htmlFor="category">Select Category</label>
                    <select id="category">
                        <option aria-label="None" value="" />
                        <option value={10}>Vector</option>
                        <option value={20}>PSD</option>
                        <option value={30}>PNG</option>
                        <option value={40}>Illustration</option>
                        <option value={50}>Card</option>
                        <option value={60}>Business Card</option>
                    </select>
                </div>
                <div className={classes.fieldGroup}>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className={`${classes.fieldGroup}`}>
                    <label htmlFor="keyword">Keyword</label>
                    <Autocomplete
                        multiple
                        id="keyword"
                        options={keyWords.map((option) => option.title)}
                        // defaultValue={[keyWords[13].title]}
                        fullWidth
                        freeSolo
                        renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                        }
                        renderInput={(params) => (
                        <TextField {...params} variant="filled" placeholder="Card Design" />
                        )}
                        closeIcon={<ClearIcon />}
                        classes={{
                            inputRoot: classes.inputRoot, 
                            inputFocused: classes.inputFocused,
                            tag: classes.tag,
                            clearIndicator: classes.clearIndicator,
                            input: classes.input,
                            focused: classes.focused,
                        }}
                    />
                </div>

                <hr className={classes.seperator} />

                <div className={classes.buttonsWrapper}>
                    <Button className={`${classes.actionBtn} ${classes.submitBtn}`}>Submit</Button>
                    <Button className={`${classes.actionBtn} ${classes.saveBtn}`}>Save</Button>
                    <Button className={`${classes.actionBtn} ${classes.cancelBtn}`}>Cancel</Button>
                </div>

            </form>
        </div>

    )
}

export default EditItem
