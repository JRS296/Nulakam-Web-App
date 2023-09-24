import '../components/Categories/CSS/categories.css';
import React, { useEffect, useState, useRef } from 'react'
import Book from './Book';
import { getPosts, getPost, getPostsWithTags, searchPosts, getCart } from '../api/post';
import NotAvailable from '../screens/NotFound';

let pageNo = 0;
const POST_LIMIT = 20;

const getPaginationCount = (length) => {
    const divVal = length / POST_LIMIT;
    if (divVal % 1 !== 0) {
        return Math.floor(divVal) + 1;
    }
    return divVal;
};

export default function ProductsPage({ title, tagdata, querydata }) {
    const [posts, setPosts] = useState([])
    const [totalPostCount, setTotalPostCount] = useState([])

    const paginationCount = getPaginationCount(totalPostCount);
    const paginationArray = new Array(paginationCount).fill(' ');


    const fetchPosts = async () => {
        if (tagdata === 'all') {
            const { error, posts, postCount } = await getPosts(pageNo, POST_LIMIT);
            setPosts(posts);
            setTotalPostCount(postCount);
        } else if (tagdata === 'cart') {
            const test = await getCart();
            console.log(test.cart[0]);
            setPosts([]);
            // setTotalPostCount(postCount);
        } else if (querydata) {
            const { error, posts, postCount } = await searchPosts(querydata, pageNo, POST_LIMIT);
            setPosts(posts);
            setTotalPostCount(postCount);
        } else {
            const { error, posts, postCount } = await getPostsWithTags(pageNo, POST_LIMIT, tagdata);
            setPosts(posts);
            setTotalPostCount(postCount);
        }
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line
    }, []);

    const fetchMorePosts = (index) => {
        pageNo = index;
        fetchPosts()
    };
    return (
        <section className="main-container">
            <div className="lower-box">
                <div className="Header">
                    <div className="sticky">
                        <h4>{title}</h4>
                    </div>
                    {paginationArray.map((_, index) => {
                        return <button
                            key={index}
                            onClick={() => fetchMorePosts(index)}
                            className={
                                index === pageNo
                                    ? 'btn btn4 currentBtn'
                                    : 'btn btn4'
                            }
                        >{index + 1}</button>
                    })}
                </div>
                <div className="sub-container" id="container">
                    <div className="bottom-box">
                        {posts.length ? posts.map(post => {
                            return (<Book key={post.id} post={post} />);
                        })
                            : <h1 style={{color: "227, 85, 8", textAlign: 'center', marginTop: 150 }} > Unavailable </h1>
                        }
                    </div>
                </div>
            </div>

            {/* <div className="end-line"><a onClick={autoScroll}>Top</a></div> */}

        </section>
    );
}