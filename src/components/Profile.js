import React, { useState, useEffect, useLayoutEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {

    const [cookies, setCookies] = useCookies();
    const [userData, setUserData] = useState({});

    useLayoutEffect(() => {
        const fetchData = async () => {
            let url = "http://localhost:8080/student/user/" + cookies.username;
            let config = {
                "headers" : {
                    "Authorization": "Bearer " + cookies.token
                }
            }
            console.log("checkpoint 2");
            console.log(cookies.username);
            let res = await axios.get(url, config).then(res => {
                console.log(res);
                setUserData(res.data);
            }).catch(err => console.log(err));
        };
        fetchData();
        console.log("checkpoint 3");
    }, []);
    return (
        <>

            <h1 className="page-title-sub" id="profile-title">Profile</h1>
            <div className="profile-page">
                <img src={"data:image/png;base64," + userData.pfp} alt="profile picture" className="pfp-profile-page" />
                <p id="profile-name">{userData.username}</p>
                <a id="profile-mail" href={"mailto:" + (userData) ? userData.email : ""} target="_blank">{userData.email}</a>
                <div className="tag-box">
                    <ul>
                        {userData && userData.tags && userData.tags.map((tag, index) => {
                            return (
                                <li key={index} className="tags-list"><p className="tags-text">{tag.tagName}</p></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;
