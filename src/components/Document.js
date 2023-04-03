import React, {useLayoutEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from "axios";
import DocumentCard from "./DocumentCard";

const Document = () => {



    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();
    const [docs, setDocs] = useState([]);

    useLayoutEffect(() => {
        const fetch = async () => {
          let url = "http://localhost:8080/document/";
          let config = {
              headers: {
                  Authorization: "Bearer " + cookies.token
              }
          };
          let response = await axios.get(url, config);
          setDocs(response.data);
        };
        fetch();
    }, []);

    const addDocument = (e) => {
        navigate("/addDocument");
    };

    return (
        <>
            <h1 className="page-title-sub">Documents<br /><br /><a href=""><i className="bi-plus-circle" onClick={(e) => {addDocument(e)}} /></a></h1>
            <div className="row justify-content-center">
                {docs && docs.map((doc, index) => {
                    return (
                        <div key={doc.id} className="col-lg-3 col-md-6">
                            <DocumentCard doc={doc} />
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default Document;