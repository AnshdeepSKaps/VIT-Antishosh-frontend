import React, {useState, useEffect, useLayoutEffect} from "react";
import axios from 'axios';
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";
import CarpoolCard from "./CarpoolCard";


const Carpool = () => {

    const [pools, setPools] = useState([]);
    const [cookies, setCookies] = useCookies();
    const navigate = useNavigate();

    useLayoutEffect(() => {
        const fetch = async () => {
            let url = "http://localhost:8080/carpool/";
            let config = {
                headers: {
                    Authorization: "Bearer " + cookies.token
                }
            };
            console.log("carpools: " + config.headers.Authorization);
            let response = await axios.get(url, config);
            setPools(response.data);
        };
        fetch();
        console.log(pools)
    }, []);

    const addPool = (e) => {
        navigate("/addCarpool");
    };

    return (
        <>
            <h1 className="page-title-sub">Carpools <br /><br /><a href=""><i className="bi-plus-circle" onClick={(e) => {addPool(e)}} /></a></h1>

            <div className="row justify-content-center">
                {pools && pools.map((pool, index) => {
                    return (
                        <div key={pool.id} className="col-lg-3 col-md-6 col-sm-6">
                            <CarpoolCard pool={pool} />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Carpool;