import React from "react";
import ProfileBox from "./ProfileBox";

const CarpoolCard = (props) => {

    const formatDate = (date) => {
        let d = new Date(date);
        console.log(d);
        return "\t" + d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear() + "\t" + d.getHours() + ":" + d.getMinutes();
    };

    return (
        <>
            <div className="cp-card">
                <div className="cp-card-info">
                    <p>{props.pool.source}</p>
                    <i className="bi-arrow-down" />
                    <p>{props.pool.destination}</p>
                    <div className="cp-card-time">
                        <i className="bi-calendar3" />
                        {formatDate(props.pool.date)}
                    </div>
                </div>
                <div className="cp-card-host">
                    <ProfileBox host={props.pool.host} timestamp={props.pool.timestamp} />
                </div>
            </div>
        </>
    );
};

export default CarpoolCard;