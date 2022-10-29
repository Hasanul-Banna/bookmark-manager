import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, setBookmarkDetails } from "../store/slices/counterSlice";

const Home = () => {
  const { bookmarks, categories, bookmarkDetails } = useSelector(
    (state) => state.counter
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleModal = () => setShow(!show);
  const [userInputs, setUserInputs] = useState({
    title: "",
    url: "",
    category: "B",
  });
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInputs);
    dispatch(addBookmark(userInputs));
  };
  return (
    <div>
      <div className="text-center">
        <h1>Bookmark Manager</h1>
        <Button variant="primary" size="sm" onClick={toggleModal}>
          Add Bookmark
        </Button>
      </div>
      <Container>
        <Row>
          <Col md="6">
            <p>Bookmark Categories</p>
            {categories.map((catgry, index) => (
              <Card key={index + 1} className="my-2 p-2">
                <p>{catgry.name}</p>
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
                          onClick={() => dispatch(setBookmarkDetails(bookmark))}
                        >
                          Details
                        </Button>
                      </div>
                    ))}
                </div>
              </Card>
            ))}
          </Col>
          <Col md="6">
            <p>Bookmark Details</p>
            <Card className="p-2">
              <p>
                <b>Title:</b> {bookmarkDetails?.title}
              </p>
              <p>
                <b>Url:</b> {bookmarkDetails?.url}
              </p>
              <p>
                <b>Category:</b> {bookmarkDetails?.category}
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                name="title"
                id="title"
                maxLength={3}
                value={userInputs.title}
                onChange={handleChange}
                type="text"
                placeholder="bookmark title..."
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Url</Form.Label>
              <Form.Control
                required
                pattern="https?://.+"
                name="url"
                id="url"
                value={userInputs.url}
                onChange={handleChange}
                type="text"
                placeholder="https://example.com"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Categories</Form.Label>
              <Form.Select
                // aria-label="Default select example"
                name="category"
                onChange={handleChange}
                // disabled
              >
                {categories.map((catgry) => (
                  <option key={catgry.name} value={catgry.name}>
                    {catgry.name}
                  </option>
                ))}
                {/* <option value={null}>Select...</option> */}
              </Form.Select>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit" size="sm">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
