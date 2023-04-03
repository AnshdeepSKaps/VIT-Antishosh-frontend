import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import BlogCard from "./BlogCard";

const Forum = () => {

    const [posts, setPosts] = useState(null);
    const [cookies, setCookies] = useCookies();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const fetch = async () => {
            let url = "http://localhost:8080/post/forum/";
            let config = {
                headers: {
                    Authorization: "Bearer " + cookies.token
                }
            };
            console.log("posts: " + config.headers.Authorization);
            let response = await axios.get(url, config);

            setPosts(response.data);
        };
        fetch();
    }, []);

    const addPost = (e) => {
        navigate("/forums/addPost");
    };

    return (
        <>
            <h1 className="page-title-sub">Forum <br /><br />
                <a href=""><i className="bi-plus-circle" onClick={(e) => { addPost(e) }} /></a></h1>

            <div className="px-5 w-100 d-flex flex-row align-items-between justify-content-between mx-auto flex-wrap" style={{ gap: "4rem" }}>
                {posts && posts.map((post, index) => {
                    console.log(posts)

                    return (
                        <div key={post.id} className="col-lg-3 col-md-6 col-sm-6">
                            <BlogCard post={post} />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Forum;