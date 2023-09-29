import '../components/Categories/CSS/categories.css';
import React, { useEffect, useState } from 'react'
import Book from './Book';
import { getPosts, getPostsWithTags, searchPosts, getCart } from '../api/post';
import CircleLoader from "react-spinners/CircleLoader";

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
    const [loading, setLoading] = useState(true);

    const paginationCount = getPaginationCount(totalPostCount);
    const paginationArray = new Array(paginationCount).fill(' ');


    const fetchPosts = async () => {
        if (tagdata === 'all') {
            const { error, posts, postCount } = await getPosts(pageNo, POST_LIMIT);
            setPosts(posts);
            setTotalPostCount(postCount);
        } else if (tagdata === 'cart') {
            const { id, cart } = await getCart();
            setPosts(cart?cart:[]);
            setTotalPostCount(cart?cart.length:0);
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
        async function fetchPostsTemp() {
            setLoading(true);
            await fetchPosts();
            setLoading(false);
        }

        fetchPostsTemp();
    }, []);

    const fetchMorePosts = async (index) => {
        pageNo = index;
        setLoading(true);
        await fetchPosts();
        setLoading(false);
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
                        {loading ?
                            <CircleLoader
                                color="rgb(227, 85, 8)"
                                loading={loading}
                                cssOverride={{ margin: 300, padding: 50 }}
                                size={45}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            /> :
                            posts.length ? posts.map(post => {
                                return (<Book key={post.id} post={post} />);
                            })
                                :
                                loading ?
                                    <CircleLoader
                                        color="rgb(227, 85, 8)"
                                        loading={loading}
                                        cssOverride={{ margin: 300, padding: 50 }}
                                        size={15}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                    :
                                    <h1 style={{ color: "227, 85, 8", textAlign: 'center', margin: 300, padding: 50 }} > Books Unavailable </h1>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}