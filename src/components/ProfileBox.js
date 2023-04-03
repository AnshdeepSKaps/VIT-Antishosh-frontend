import React from 'react';

const ProfileBox = (props) => {
    return (
        <>
            <div className="pb">
                <img className="pb-pfp-img" src={"data:image/png;base64," + props.host.pfp} />
                <div className="pb-username">
                    {props.host.username}
                </div>
                <div className="pb-timestamp">
                    {props.timestamp}
                </div>
                <br />
                <div className="pb-email">
                    <a href={"mailto:" + props.host.email} >{props.host.email}</a>
                </div>

            </div>
        </>
    );
};

export default ProfileBox;