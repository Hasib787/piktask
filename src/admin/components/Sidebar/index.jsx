import { List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Sidebar.styles';


const Sidebar = () => {
    const classes = useStyles();
  const [selectedItem, setSelectedItem] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleListItemClick = (e, index) => {
    setSelectedItem(index);
  };

  const handleDropDownMenu = () => {
    setOpenDropdown(prevState => !prevState);
  };

    return (
      <aside className={classes.sidebarWrapper}>          
        <List className={classes.listNavs}>
          <ListItem 
              selected={selectedItem === 0} 
              onClick={e => handleListItemClick(e, 0)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/dashboard">Dashboard</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 1} 
              onClick={e => handleListItemClick(e, 1)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/upload">Upload Files</Link>
          </ListItem>

          <ListItem 
              selected={selectedItem === 2} 
              onClick={e => handleListItemClick(e, 2)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/pending">Pending File</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 3} 
              onClick={e => handleListItemClick(e, 3)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/revision">Under Revision</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 4} 
              onClick={e => handleListItemClick(e, 4)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/reject">Reject File</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 5} 
              onClick={e => handleListItemClick(e, 5)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/publish">Publish</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 6} 
              onClick={e => handleListItemClick(e, 6)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/earnings">Earning Management</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 7} 
              onClick={e => handleListItemClick(e, 7)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/plan">Contributor Price Plan</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 8} 
              onClick={e => handleListItemClick(e, 8)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/guidline">Guidline</Link>
          </ListItem>
          <ListItem 
              selected={selectedItem === 9} 
              onClick={e => handleListItemClick(e, 9)}
              classes={{selected: classes.selected}}
              >
              <Link to="/admin/stats">Stats</Link>
          </ListItem>

            {/* {menuItems.length && menuItems.map(menu => (
                <ListItem 
                    key={menu.id} 
                    selected={selectedItem === menu.id} 
                    onClick={e => handleListItemClick(e, menu.id)}
                    classes={{selected: classes.selected}}
                    >
                    <Link to={menu.link}>{menu.name}</Link>
                </ListItem>
            ))} */}
        </List>
    </aside>
    )
}

export default Sidebar
