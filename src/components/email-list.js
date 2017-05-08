import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './email-list.css';

export function EmailList(props) {
    const emails = props.emailList.map((email, index) =>
        <li key={index} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
              <Link to={`/${props.match.params.folderId}/${email.id}`}>
                {email.title}
              </Link>
            </div>
        </li>
    );

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>
            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const folder = state[props.match.params.folderId];
    return {
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
