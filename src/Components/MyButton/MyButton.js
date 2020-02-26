import React from 'react';
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
        variant="contained"
        size="small"
        href={props.link}
        style={{
            background : props.bak,
            color : props.color
        }}
        >
            <img 
            src={TicketIcon} 
            className="iconImage"
            alt="icon_btton"
            />
          {props.text}
        </Button>
    );
};

export default MyButton;