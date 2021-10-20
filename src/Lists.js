import React from 'react'
import { ListItem, ListItemText, List, Avatar, ListItemAvatar } from "@mui/material";
import './Todo.css';


function Lists(props) {
    return (
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                    
                    </Avatar>
                </ListItemAvatar>
            <ListItemText primary={props.text} secondary="Type Here..." /> 
            </ListItem> 
        </List>
    )
}

export default Lists;
