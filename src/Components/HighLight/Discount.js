import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '../MyButton/MyButton'

class Discount extends Component {

    state = {
        discountStart : 0,
        discountEnd : 30,
    }

    parcentage = () => {
        if(this.state.discountStart < this.state.discountEnd ){
            this.setState({
                discountStart : this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.parcentage()
        },30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    <Fade  
                    onReveal={() => this.parcentage() }
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}% </span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 16 March </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur in quidem et possimus voluptatem doloribus ipsum. Dolore ducimus incidunt iure.</p>
                        <Button 
                        text="Purchase tickets"
                        bak="#ffa880"
                        color="#fff"
                        link="http://google.com"
                        />

                    </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;