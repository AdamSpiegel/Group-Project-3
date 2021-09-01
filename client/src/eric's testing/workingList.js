import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import IconButton from "@material-ui/core/IconButton";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";
// import CommentIcon from "@material-ui/icons/Comment";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
// import StarBorder from "@material-ui/icons/StarBorder";

import StarIcon from '@material-ui/icons/Star';
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import CakeIcon from "@material-ui/icons/Cake";
import RedeemIcon from "@material-ui/icons/Redeem";
import HomeWorkIcon from '@material-ui/icons/HomeWork';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper
    },
    nested: {
        paddingLeft: theme.spacing(4)
    }
}));

export default function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
            className={classes.root}
        >
            {/* ONE */}
            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" checked={checked !== -1} disableRipple />
                </ListItemIcon>
                <ListItemText primary="Click checkboxes" />
            </ListItem>
            {/* TWO */}
            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Balloons" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Streamers" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Confetti" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Signs" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Candles" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Plates" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Bowls" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Utensils" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Napkins" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Check availablity for people and places" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Check weather" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Invite people" />
            </ListItem>

            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Dress code" />
            </ListItem>



            <ListItem role={undefined} dense button onClick={handleToggle}>
                <ListItemIcon>
                    <Checkbox edge="start" disableRipple />
                </ListItemIcon>
                <ListItemText primary="Ice" />
            </ListItem>
            {/* THREE PARENT COLLAPSER*/}
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <LocalDrinkIcon />
                </ListItemIcon>
                <ListItemText primary="Drinks" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Beer" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Wine" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Liquor" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Water" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Soda" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Other" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <RedeemIcon />
                </ListItemIcon>
                <ListItemText primary="Gifts" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Wrapping paper" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Tape" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Card" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Bow and Ribbon" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Gift Bags and Tissue Paper" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Gift(s)" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <CakeIcon />
                </ListItemIcon>
                <ListItemText primary="Food" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Snacks" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Apps" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Entrees" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Desserts" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Find out about dietary restrictions" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Other" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <MusicNoteIcon />
                </ListItemIcon>
                <ListItemText primary="Entertainment" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Clowns" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Magicians" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Inflatables" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Characters" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Music/DJ" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText primary="Venue" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Park or Natural Setting" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Religious building" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Museum or Gallery " />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Group Lodge" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Hotel" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Eatery or Bar" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Make reservations to the above if necessary" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>


            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Post Event" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Clean with guests" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Cleaning professionals" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Venue staff clean" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Burial Plot" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Casket" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Urn or scattering of ashes" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        {/* child parts */}
                        <ListItem role={undefined} dense button onClick={handleToggle}>
                            <ListItemIcon>
                                <Checkbox edge="start" disableRipple />
                            </ListItemIcon>
                            <ListItemText primary="Green Burial if available" />
                        </ListItem>
                    </ListItem>
                </List>
            </Collapse>
        </List>


    );
}

// collapse type

// checkbox type
