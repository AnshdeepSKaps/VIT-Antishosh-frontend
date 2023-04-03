import React, {useState} from 'react';
import ProfileBox from "./ProfileBox";
import Button from "./Button";
import {useCookies} from "react-cookie";
import axios from "axios";

const DocumentCard = (props) => {

    const[link, setLink] = useState("");
    const[cookies, setCookies] = useCookies();

    const downloadFile = async (e) => {
        let url = "http://localhost:8080/document/" + props.doc.id + "/storage";
        let config = {
            headers: {
                Authorization: "Bearer " + cookies.token
            },
            responseType: 'arraybuffer'
        };
        let res = await axios.get(url, config).then((res) => {
            let blob = new Blob([res.data], {type: "application/pdf"});
            let event = document.createEvent('MouseEvents');
            let a = document.createElement('a');
            a.download = props.doc.documentName;
            a.href = window.URL.createObjectURL(blob);
            // window.open(a.href);
            a.dataset.downloadurl = ["application/pdf", a.download, a.href].join(":");
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false,
                false, 0, null);
            a.dispatchEvent(event);

        });
    }

    const viewFile = async (e) => {
        let url = "http://localhost:8080/document/" + props.doc.id + "/storage";
        let config = {
            headers: {
                Authorization: "Bearer " + cookies.token
            },
            responseType: 'arraybuffer'
        };
        let res = await axios.get(url, config).then((res) => {
            let blob = new Blob([res.data], {type: "application/pdf"});
            // let event = document.createEvent('MouseEvents');
            let a = document.createElement('a');
            // a.download = props.doc.documentName;
            a.href = window.URL.createObjectURL(blob);
            window.open(a.href);
        });
    };

    const getType = (val) => {
        switch (val) {
            case "QP": return "Question Paper";
            case "RES": return "Resource";
            case "DA": return "Digital Assignment";
        }
    };

    return (
        <>
            <div className="doc-card">
                <div className="doc-card-info">
                    <p className="doc-card-name">{props.doc.documentName}</p>
                    <p className="doc-card-type">{getType(props.doc.documentType)}</p>
                    <a href="#" download={props.doc.documentName} target="_blank" onClick={(e) => downloadFile(e)} >
                        <i title="download" className="bi-download download-icon" />
                    </a>
                    <a href="#" onClick={(e) => viewFile(e)} >
                        <i title="view" className="bi-eye view-icon" />
                    </a>

                </div>
                <div className="doc-card-author">
                    <ProfileBox host={props.doc.author} timestamp={props.doc.timestamp} />
                </div>
            </div>
        </>
    );
};

export default DocumentCard;