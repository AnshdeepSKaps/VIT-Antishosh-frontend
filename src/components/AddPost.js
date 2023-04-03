import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";


const AddPost = (props) => {

    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");
    const [type, setType] = useState("");

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();

    const submit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:8080/post/";
        let config = {
            headers: {
                Authorization: "Bearer " + cookies.token
            }
        }
        let formData = new FormData();
        let presentDate = new Date();
        let dateString = presentDate.getDate() + "/" + presentDate.getMonth() + "/" + presentDate.getFullYear();
        formData.append("author", cookies.username);
        formData.append("tags", tags);
        formData.append("timestamp", dateString);
        formData.append("content", content);
        formData.append("title", title);
        formData.append("type", type);

        let res = await axios.post(url, formData, config);
        console.log(res);
        navigate(props.link);
    };
    return (
        <>
            <h1 className="page-title">Add Post</h1>
            <form>
                <div className="row justify-content-center">
                    <div className="col-3 center-content">

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="source" placeholder="Source"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <label className="form-label">Title</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="destination" placeholder="Destination"
                                value={tags}
                                onChange={(e) => setTags(e.target.value)}
                            />
                            <label className="form-label">Tags</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="date" placeholder="Date of Departure"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                            <label className="form-label">Content</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="type" placeholder="Date of Departure"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            />
                            <label className="form-label">Type</label>
                        </div>
                        <Button name="Post" onClick={(e) => submit(e)} />

                    </div>
                </div>
            </form>
        </>
    );
};

export default AddPost;