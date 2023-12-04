import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import './Home.scss'




const Home = () => {
    // useStates:
    const [keywordInput, setKeywordInput] = useState('');
    const [language, setLanguage] = useState('');
    const [newsData, setNewsData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('you clicked submit');
    }

    // const fetchAndSearchNewsMatch = (e) => {
    //     setKeywordInput(keywordInput);
    //     setLanguage(language);
    // }


    // useEffect(() => {
    //     fetch(`https://newsapi.org/v2/everything?q=${keywordInput}&language=${language}&apiKey=${myApiKey}`)
    //         .then(response => {
    //             if (response.ok === false){
    //                 throw new Error('something went wrong');
    //             }
    //             return response.json()
    //         })
    //         .then(newsArr => setNewsData(newsArr))
    //         .catch(error => console.log(error))
    // }, [keywordInput, language])
            
    const fetchAndSearchNewsMatch = () => {
        fetch(`https://newsapi.org/v2/everything?q=${keywordInput}&language=${language}&apiKey=${import.meta.env.VITE_API_KEY}`)
            .then(response => {
                if (response.ok === false){
                    throw new Error('something went wrong');
                }
                return response.json()
            })
            .then(newsArr => setNewsData(newsArr))
            .catch(error => console.log(error))
    }
    console.log('fetch result: ', newsData);

    return (  
        <section className="home_wrap">
            <article className="upperHome_wrap">
                <h1>Breaking News</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder="keyword" onChange={(e) => setKeywordInput(e.target.value)} value={keywordInput}/>
                <select name="" id="" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    <option value='' disabled>select language</option>
                    <option value="ar">arabic</option>
                    <option value="de">german</option>
                    <option value="en">english</option>
                    <option value="es">spanish</option>
                    <option value="fr">french</option>
                    <option value="he">hebrew</option>
                    <option value="it">italian</option>
                    <option value="nl">dutch</option>
                    <option value="no">norwegian</option>
                    <option value="pt">portugese</option>
                    <option value="ru">russian</option>
                    <option value="sv">swedish</option>
                    <option value="zh">chinese</option>
                </select>
                    <input type="submit" value="Search" onClick={fetchAndSearchNewsMatch}/>
            </form>
            </article>
            {newsData ? ( 
                <article className="searchResults_wrap">
                    {newsData.articles.map((singleArticleObj) => {
                        return (
                            <div key={uuidv4()} className="singleSearchResult_wrap">
                                <h2>{singleArticleObj.title}</h2>
                                <img src={singleArticleObj.urlToImage} alt={singleArticleObj.author} />
                                <p>{singleArticleObj.description}</p>
                                <NavLink to={`/article/${singleArticleObj.publishedAt}`} state={{singleArticleObj}}>Read more</NavLink>
                            </div>
                        )
                    })}
                </article>
            ) : (
                <h3>... search for news...</h3>
            )}
            
        </section>
    );
}
 
export default Home;