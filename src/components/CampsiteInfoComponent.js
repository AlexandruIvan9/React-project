import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor (props) {
        super (props);
        this.props = props;
        this.state = {
            comments: [
                {
                    id: 0,
                    text: 'What a magnificent view!',
                    author: 'Tinus Lorvaldes',
                    date: 'Oct 25,2018'
                },
                {
                    id: 1,
                    text: 'The campground was beautiful, but the bugs could bite sometimes.',
                    author: 'Brennen Ech',
                    date: 'Jun 16,2017'
                },
                {
                    id: 2,
                    text: 'I caught a world-record-breaking trout here on my last visit.',
                    author: 'McKenzie Sebastian',
                    date: 'Feb 18,2019'
                },
                {
                    id: 3,
                    text: 'A wonderful place to reconnect with nature.',
                    author: 'Jordan Runn',
                    date: 'Aug 04,2019'
                },
                {
                    id: 4,
                    text: 'The stars at night were magnificent!',
                    author: 'Ann Dabramov',
                    date: 'Jul 23,2018'
                }

            ],
        };
    }

    renderCampsite (campsite) {
        return(
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments (comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id}>{comment.text}
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p></div> )}
                </div>
            );
        }
        return (
            <div/>
        );
    }

    render() {
        if (this.props.campsite) {
            return(
                <div className="container">
                <div className="row">
                   { this.renderCampsite(this.props.campsite) }
                   { this.renderComments(this.props.campsite.comments) }
                </div>
                </div>
            );
        }
            return <div/>
    }
}

export default CampsiteInfo;