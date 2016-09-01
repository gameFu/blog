import React, { Component } from 'react'
import classes from "./article_buttom.scss"
import buttomImg from "./assets/article-buttom.jpg"


class ArticleButtomComponent extends Component {
  render(){
    let buttomeImage = {
        backgroundImage: `url(${buttomImg})`
    }

    return(
      <div className={classes['buttom-closer']}>
        <div className={classes['buttom-closer-image']} style={buttomeImage}>Image</div>
        <div className={classes['inner']}>
          <h1 className={classes['blog-title']}>gameFu</h1>
          <h2 className={classes['blog-description']}>Implement your dreams, only after you know you're their designer</h2>
          <a href="/" className="btn">Back to Overview</a>
        </div>
      </div>
    )
  }
}

export default ArticleButtomComponent
