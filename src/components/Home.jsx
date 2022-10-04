import React, {useState, useEffect} from "react";
import axios from "axios";
import {PlayerCardExpanded} from "./PlayerCardExpanded.jsx";
import {PlayerCard} from "./PlayerCard.jsx";
import SearchInput from "./SearchInput.jsx";

import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CloseIcon from '@material-ui/icons/Close';

import '../styles/Reset.scss';
import '../styles/Input.scss';
import "../styles/Home.scss";
import "../styles/Modal.scss";
import {DialogContent} from "@material-ui/core";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const bottom = 50 + rand();
    const left = 50 + rand();
    const right = 50 + rand();

    return {
        bottom: `${bottom}%`,
        left: `${left}%`,
        right: `${right}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    }
}));

export const Home = () => {
    const ref = React.createRef();
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [players, setPlayers] = useState([]);
    const [open, setOpen] = useState(false);
    const [isClicked, setIsClicked] = useState([]);
    const [inputText, setInputText] = useState("");

    const changeState = (e) => {
        const value = e.target.value;
        setInputText(value);
    }

    useEffect(() => {
        const fetchPlayersData = async () => {
            try {
                const {data} = await axios.get(
                    "https://data.latelier.co/training/tennis_stats/headtohead.json"
                );
                setPlayers(data.players);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPlayersData();
    }, []);

    const handleOpen = (id) => {
        setIsClicked(players.find(x => x.id === id));
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setIsClicked([]);
    };

    const filteredData = players.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        } else {
            console.log('false')
            return el.firstname.toLowerCase().includes(inputText) || el.lastname.toLowerCase().includes(inputText);
        }
    })

    return (
        <div className='app-container'>
            <SearchInput changeState={changeState} placeholder='Rechercher un joueur'/>
            <div className="players-container">
                {filteredData.map((player) => (
                    <PlayerCard
                        key={player.id}
                        player={player}
                        id={player.id}
                        handleOpen={handleOpen}
                        inputText={setInputText}
                    />
                ))}

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    className='modal-container'
                >

                    {isClicked && (
                        <DialogContent className='modal-body'>
                            <CloseIcon onClick={handleClose} className='modal-close-icon'/>
                            <PlayerCardExpanded
                                id={`${isClicked.id}-${isClicked.name}`}
                                className={classes.paper}
                                style={modalStyle}
                                player={isClicked}
                                ref={ref}
                            />
                        </DialogContent>
                    )}
                </Modal>
            </div>
        </div>
    );
};
