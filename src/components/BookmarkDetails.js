import React from 'react';
import { Card } from 'react-bootstrap';

const BookmarkDetails = ({ bookmarkDetails }) => <>
    <p>Bookmark Details</p>
    <Card className="p-2">
        <p>
            <b>Title:</b> {bookmarkDetails?.title}
        </p>
        <p>
            <b>Url:</b>{" "}
            <a
                href={bookmarkDetails.url}
                target="_blank"
                rel="noreferrer"
                className="text-truncate"
                style={{ maxWidth: "50%" }}
            >
                {bookmarkDetails.url}
            </a>
        </p>
        <p>
            <b>Category:</b> {bookmarkDetails?.category}
        </p>
    </Card>
</>

export default BookmarkDetails;