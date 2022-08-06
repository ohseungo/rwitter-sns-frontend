import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

import { UserListProps } from "utils/types";

const UserList = ({ userList }: UserListProps) => {
  return (
    <List>
      {userList.map((name: string) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
