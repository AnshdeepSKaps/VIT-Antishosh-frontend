import React from "react";
import ProfileBox from "./ProfileBox";

const BlogCard = (props) => {

    const formatDate = (date) => {
        let d = new Date(date);
        console.log(d);
        return "\t" + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    };

    return (
        <>
            <div className="cp-card" style={{width:"350px"}}>
                <div className="cp-card-info">
                    <p>{props.post.title}</p>
                    
                    <p>{props.post.content}</p>
                    <div className="cp-card-time">
                        <i className="bi-calendar3" />
                        {formatDate(props.post.timestamp)}
                    </div>
                </div>
                <div className="cp-card-host">
                    <ProfileBox host={props.post.author} timestamp={props.post.timestamp} />
                </div>
            </div>
        </>
    );
};

export default BlogCard;