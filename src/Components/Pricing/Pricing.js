import React, { Component } from 'react';
import MyBtton from '../MyButton/MyButton'
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        prices : [100,150,250],
        position : ['Balcony','Medium','Start'],
        desc : [
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis facilis illo ea nesciunt, sint labore quod veritatis quaerat fuga quam officia aliquid eum possimus doloremque quo natus a non laudantium?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam labore rerum ea quibusdam unde fuga similique. Impedit voluptatem molestias ex a perspiciatis, culpa obcaecati aspernatur accusamus maiores expedita corrupti consectetur?',
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, aperiam maxime! Vitae cum deserunt ipsum! Iste laboriosam, quas totam ratione voluptatum ex optio quos libero impedit quia vero praesentium saepe.'
        ],
        linkto : ['http://google.com','http://facebook.com','http://trickbd.com'],
        delay : [500,0,500]
    }
    showBoxes = () => (
        this.state.prices.map((box,i) => (
            <Zoom delay={this.state.delay[i]} key={i} >
                <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]} </span>
                        <span>${this.state.position[i]} </span>
                    </div>
                    <div className="pricing_description">
                        {this.state.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                         <MyBtton 
                         text="Purchase"
                         bak="#ffa800"
                         color="#fff"
                         link={this.state.linkto[i]}
                         />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing;

