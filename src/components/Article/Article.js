import React, { Component, PropTypes } from 'react'
import ArticleBgImg from './assets/article_bg.jpg'
// import UserAvatarImg from './assets/user_avatar.jpeg'
import ArticleButtomImg from './assets/article-buttom.jpg'
import LogoReadiumComponent from '../LogoReadium'
import ArticleButtomComponent from './articleButtomComponent'
import classes from './article.scss'
import fontClasses from 'font-awesome/scss/font-awesome.scss'


class ArticleComponent extends Component{
  render(){
    let articleStyle = {
      transform: "translate3d(0px, 0px, 0px); opacity: 1",
      backgroundImage: `url(${ArticleBgImg})`
    };
    let author_image = {
      // backgroundImage: `url(${UserAvatarImg})`
    }
    let buttomeImage = {
        backgroundImage: `url(${ArticleButtomImg})`
    }
    return (
      <div>
        <main className={classes['content']} role="main">
        <LogoReadiumComponent/>
          <article className={classes['post']}>
           <div className={classes['article-image']} style= {articleStyle}>
           </div>
           <div className={classes['post-meta']}>
            <h1 className={classes['post-title']}>高并发订单池</h1>
            <div className={classes['post-text-meta']}>
              <div className={classes['author-image']} style={author_image}></div>
              <h4 className={classes['author-name']} itemProp="author" itemScope itemType="http://schema.org/Person">gameFu</h4>
               on
               <time dateTime="2016-03-15 20:47">15 Mar 2016</time>
            </div>
            <div className={classes['down']}>
              <a href="#article-center" className={classes['topofpage']}>
              <i className="fa fa-angle-down">
              </i>
              </a>
            </div>
           </div>
           <section className={classes['post-center']} dangerouslySetInnerHTML={parseCenter(this.props.articleCenter)}>
           </section>
          </article>
        </main>
        <ArticleButtomComponent/>
      </div>
    );
  }
}

function parseCenter(articleCenter){
  return { __html: articleCenter }
}

ArticleComponent.PropTypes = {
  articleCenter: PropTypes.string.isRequired
}
ArticleComponent.defaultProps = {
  articleCenter: "<a name='article-center'></a><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p><p></p><p>也许你经常听说singleton class，但是并没有搞清楚它到底是什么，我希望能用尽量简单的语言说明白</p><p>首先我们必须认识到两件事：</p><p>...</p>"
}

export default ArticleComponent;
