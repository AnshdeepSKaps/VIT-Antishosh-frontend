import React, {useEffect, useState} from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie";

const AddCarpool = () => {

    const [src, setSrc] = useState("");
    const [dest, setDest] = useState("");
    const [date, setDate] = useState("");

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();

    const submit = async (e) => {
        e.preventDefault();
        let url = "http://localhost:8080/carpool/";
        let config = {
            headers: {
                Authorization: "Bearer " + cookies.token
            }
        }
        let formData = new FormData();
        let presentDate = new Date();
        let dateString = presentDate.getDate() + "/" + presentDate.getMonth() + "/" + presentDate.getFullYear();
        formData.append("date", date);
        formData.append("source", src);
        formData.append("destination", dest);
        formData.append("timestamp", dateString);
        formData.append("host", cookies.username);
        let res = await axios.post(url, formData, config);
        console.log(res);
        navigate("/carpools");
    };
    return (
        <>
            <h1 className="page-title">Add Carpool</h1>
            <form>
                <div className="row justify-content-center">
                    <div className="col-3 center-content">

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="source" placeholder="Source"
                                   value={src}
                                   onChange={(e) => setSrc(e.target.value)}
                            />
                            <label className="form-label">Source</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" name="destination" placeholder="Destination"
                                   value={dest}
                                   onChange={(e) => setDest(e.target.value)}
                            />
                            <label className="form-label">Destination</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="datetime-local" className="form-control" name="date" placeholder="Date of Departure"
                                   value={date}
                                   onChange={(e) => setDate(e.target.value)}
                            />
                            <label className="form-label">Date of Departure</label>
                        </div>
                        <Button name="Host Pool" onClick={(e) => submit(e)} />

                    </div>
                </div>
            </form>
        </>
    );
};

export default AddCarpool;