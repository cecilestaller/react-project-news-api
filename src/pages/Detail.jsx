import { NavLink, Link, useLocation } from "react-router-dom";
import './Detail.scss'

const Detail = () => {

    const article = useLocation().state.singleArticleObj;
    // console.log(useLocation());
    // console.log(article);
    return (  
        <article className="detailArticle_wrap">
            <Link to='/'>go back</Link>
            
            <img src={article.urlToImage} alt={article.author} />
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <h4>author: {article.author}</h4>
            <p>published at: {article.publishedAt}</p>
            <h5>source: {article.source.name}</h5>
        </article>
    );
}

export default Detail;