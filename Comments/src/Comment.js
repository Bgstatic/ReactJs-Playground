import React from 'react'
import faker from 'faker';

 const Comment = (props) => {

    const name = props.name;
    const day = props.day;
    const star = props.stars;
    return (
        <div className="comment">
    <a className="avatar" href = "/">
      <img alt = "" src={faker.image.avatar()}/>
    </a>
    <div className="content">
      <a className="author" href= "/">{name}</a>
      <div className="metadata">
        <div className="date">{day} days ago</div>
        <div className="rating">
          <i className="star icon"></i>
          {star} Faves
        </div>
      </div>
      <div className="text">
        Hey guys, I hope this example comment is helping you read this documentation.
      </div>
    </div>
  </div>
    )
}

export default Comment;