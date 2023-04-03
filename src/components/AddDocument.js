import React, {useState} from "react";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios from 'axios';

const AddDocument = () => {

    const[name, setName] = useState("");
    const[type, setType] = useState("QP");
    const[doc, setDoc] = useState(null);

    const navigate = useNavigate();
    const[cookies, setCookies] = useCookies();

    const upload = (e) => {
        e.preventDefault();
        //first upload doc and gets its id;
        const uploadDoc = (id) => {
            let presentDate = new Date();
            let dateString = presentDate.getDate() + "/" + presentDate.getMonth() + "/" + presentDate.getFullYear();
            let url = "http://localhost:8080/document/";
            let config = {
                headers: {
                    Authorization: "Bearer " + cookies.token
                }
            };
            let formData = new FormData();
            formData.append("author", cookies.username);
            formData.append("documentName", name);
            formData.append("documentType", type);
            formData.append("documentId", id);
            formData.append("timestamp", dateString);

            let res = axios.post(url, formData, config).then(res => console.log(res)).catch(err => console.log(err));
        }
        const getDocId = () => {
            let url = "http://localhost:8080/file/";
            let config = {
                headers: {
                    Authorization: "Bearer " + cookies.token
                }
            };
            let formData = new FormData();
            formData.append("file", doc, name);
            axios.post(url, formData, config).then(res => {
                console.log(res);
                uploadDoc(res.data);
            }).catch(err => console.log(err));
        }
        getDocId();
        navigate("/documents");

    };

    return (
        <>
            <h1 className="page-title">Add Document</h1>
            <form>
                <div className="row justify-content-center">
                    <div className="col-3 center-content">

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="Name"
                                   value={name}
                                   onChange={(e) => {setName(e.target.value)}}
                            />
                            <label className="form-label">Document name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-control" name="type" placeholder="Type of document" value={type}
                                    onChange={(e) => setType(e.target.value)}>
                                <option value="DA">Digital Assignment</option>
                                <option value="QP">Question Paper</option>
                                <option value="RES">Resource</option>
                            </select>
                            <label className="form-label">Type of Resource</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="file" className="form-control" name="document"
                                   onChange={(e) => setDoc(e.target.files[0])}
                            />
                            <label className="form-label">Document Upload</label>
                        </div>

                        <Button name="Add Document" onClick={(e) => upload(e)} />

                    </div>
                </div>
            </form>
        </>
    );
};

export default AddDocument;