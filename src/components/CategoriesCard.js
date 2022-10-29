import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setBookmarkDetails } from '../store/slices/bookmarkSlice';

const CategoriesCard = ({ categories, bookmarks }) => {
    const dispatch = useDispatch();
    return (
        <>
            {categories.map((catgry, index) => (
                <Card key={index + 1} className="my-2 p-2">
                    <p>
                        {" "}
                        <span className="border-bottom pb-1">{catgry.name}</span>
                    </p>
                    {bookmarks.filter(
                        (bookmark) => bookmark.category === catgry.name
                    ).length ? (
                        <div
                            className="overflow-auto border"
                            style={{ maxHeight: "100px" }}
                        >
                            {bookmarks
                                .filter((bookmark) => bookmark.category === catgry.name)
                                .map((bookmark, index) => (
                                    <div
                                        className="d-flex justify-content-between p-2"
                                        key={index + 1000}
                                    >
                                        <a
                                            href={bookmark.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-truncate"
                                            style={{ maxWidth: "50%" }}
                                        >
                                            {bookmark.title}
                                        </a>
                                        <Button
                                            variant="info"
                                            size="sm"
                                            onClick={() =>
                                                dispatch(setBookmarkDetails(bookmark))
                                            }
                                        >
                                            Details
                                        </Button>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <small>No bookmarks added!</small>
                    )}
                </Card>
            ))}
        </>
    );
};

export default CategoriesCard;