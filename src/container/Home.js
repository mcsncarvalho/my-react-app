import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
export default class Home extends Component {

    Cards = {
        "Releases": {
            title: 'Releases',
            text: 'Manage Releases',
            action: () => alert('Releases Clicked')
        }
    }

    render() {
        return(
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.Cards.Releases}/>
                </div>
            </div>
        );
    }
}