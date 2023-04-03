import React, {useState, useEffect} from "react";
import auth from '../api/auth';
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const Signup = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [pfp, setPfp] = useState(null);
    const [tags, setTags] = useState("");

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        if (cookies.isLoggedIn)
        {
            navigate("/profile");
        }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("pfp \n" + pfp);

        const formData = new FormData();
        formData.append('pfp', pfp);
        formData.append('username', username);
        formData.append('role', "member");
        formData.append('password', password);
        formData.append('email', email);
        formData.append('tags', tags)
        const config = {
            "headers": {
                "content-type": "multipart/form-data"
            }
        }

        const res = await auth.post('/student/', formData, config);

        console.log(res);
        navigate("/login");
    };

    const login = (e) => {
        navigate("/login");
    };

    return (
        <>
            <h1 className="page-title">Signup</h1>
            <form>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="file" className="form-control" name="profilePicture"
                                   onChange={(e) => setPfp(e.target.files[0])}
                            />
                            <label className="form-label">Profile Picture</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="username" placeholder="Username"
                                   value={username}
                                   onChange={(e) => setUsername(e.target.value)}
                            />
                            <label className="form-label">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" name="password" placeholder="Password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label">Password</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" name="email" placeholder="Email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="tags" placeholder="Tags"
                                   value={tags} title="Enter tags separated by space"
                                   onChange={(e) => setTags(e.target.value)}
                            />
                            <label className="form-label">Tags</label>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Button name="Register" onClick={(e) => onSubmit(e)} />
                                <Button name="Already have an account? Login" onClick={(e) => login(e)} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>   
        </>
    );
}

export default Signup;