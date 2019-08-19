import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  renderDish() {
    const dish = this.props.dish;

    if (dish != null)
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return(
        <div></div>
      );
  }

  renderComments() {
    if (this.props.dish != null) {
      const comments = this.props.dish.comments.map(c => {
        return (
          <React.Fragment>
            <p>{c.comment}</p>
            <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
          </React.Fragment>
        )
      });
  
      return (
        <div>
          <h4>Comments</h4>
          {comments}
        </div>  
      );
    } else {
      return (
        <div></div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish()}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments()}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;