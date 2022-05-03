import React, {useState, useEffect} from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    //console.log('I RUN WITH EVERY RENDER');

    useEffect(() => {

        //Postoje tri nacina da se napravi async funkcija od useEffect dole je prvi nacin
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                },
            });

            setResults(data.query.search);
        };

        if (term && !results.length) {
            search();
        } else {
             //Salje requestova posle svake sekunde pauze u kucanju
            const timeoutId = setTimeout(() => {
                if(term){
                    search();
                }
            }, 1000);

              // ovo se poziva svaki put kad se rerenderuje funkcija osim prvi put
            return () => {
                clearTimeout(timeoutId);
            };
        }

     


      

        //console.log('I Only Run Once'); []
        //console.log('I run after render and at initial Render'); //ako ne stavimo nista posle }
        
        //uz useEffect ide nesto od ovog dole
    }, [term] /*nista, prazan niz ili niz sa argumentima*/);

    const renderedResults = results.map ((result) => {
        return (
            <div key={result.pageid} className="item">
              <div className="right floated content">
                <a 
                    className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                >
                    Go
                </a>
              </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}>
                    </span>
                </div>
            </div>
        );
    });

    //dangerouslySetInnerHTML ucitavamo html iz teksta rezultata opasno zbog moguceg napada hackera XSS Attack

    return( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Serach Term</label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="input" 
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;