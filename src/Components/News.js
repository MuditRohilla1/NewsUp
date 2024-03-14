import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {    
    
    static defaultProps ={
        country: 'in',
        pageSize : 8,
        category: 'Sports',
        mode: 'light' // Added default mode prop
    }

    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string,
        mode: PropTypes.oneOf(['light', 'dark']) // Added mode prop type
    }

    constructor(props)
    {
        super(props);
        this.state ={
            articles : null, // Initialize articles as null
            loading : true,
            page: 1,
            totalResults: 0,
            mode: this.props.mode // Initialize mode based on props
        };
    }

    async updateNews()
    {
        this.props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1a82108ba5644a1bed5fa4e1c790371&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true}); 
        let  data = await fetch(url);
        let parsedata = await data.json();
        this.setState({
            articles: parsedata.articles, 
            totalResults: parsedata.totalResults,
            loading : false
        })
        this.props.setProgress(100);
    }

    async componentDidMount()
    {
        this.updateNews();
    }

    handleprev = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();
    };

    handlenext = async () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    };

    fetchMoreData = async () => {
        const nextPage = this.state.page + 1;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b1a82108ba5644a1bed5fa4e1c790371&page=${nextPage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState(prevState => ({
            articles: [...(prevState.articles || []), ...parsedData.articles], // Ensure prevState.articles is an array
            totalResults: parsedData.totalResults,
            page: nextPage
        }));
    };
    

    render() {
        const { articles, loading } = this.state;

        // Check if articles is undefined
        if (!articles) {
            return null; // or return loading indicator or any other placeholder
        }

        return (
            <>
                <h2 className={`text-center my-3 text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>!! Top News Headlines !!</h2>
                <h3 className={`text-center my-4 fst-italic text-${this.props.mode === 'dark' ? 'light' : 'dark'}`}>Regarding {this.props.category}</h3>

                {loading && <Spinner/>}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={this.fetchMoreData}
                    hasMore={articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className='container'>                
                        <div className="row d-flex justify-content-start flex-wrap">
                            {!loading && articles.map((Element) => {
                                return (
                                    <div className="col-md-3" key={Element.url}>
                                        <Newsitem
                                            title={Element.title ? Element.title.slice(0, 40) : ""}
                                            description={Element.description ? Element.description.slice(0, 80) : ""}
                                            imageUrl={Element.urlToImage}
                                            newsUrl={Element.url}
                                            Author={Element.author}
                                            date={Element.publishedAt}
                                            Source={Element.source.name}
                                            mode={this.props.mode} // Pass mode prop to Newsitem
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;
