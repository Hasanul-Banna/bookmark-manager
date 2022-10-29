import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BookmarkDetails from "../components/BookmarkDetails";
import Bookmarkform from "../components/Bookmarkform";
import CategoriesCard from "../components/CategoriesCard";
import { addBookmark, addCategories } from "../store/slices/bookmarkSlice";

const Home = () => {
  const { bookmarks, categories, bookmarkDetails } = useSelector(
    (state) => state.bookmark
  );
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [newCategory, setNewCategory] = useState(false);
  const [isCategoryExist, setCategoryExist] = useState(false);

  const toggleModal = () => {
    setNewCategory(false);
    setShow(!show);
  };
  const [userInputs, setUserInputs] = useState({
    title: "",
    url: "",
    category: "Category A",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCategory) {
      const names = categories.map((category) =>
        String(category.name).toLowerCase()
      );
      const isExist = names.includes(userInputs.category.toLowerCase());
      if (isExist) {
        setCategoryExist(true);
        return 0;
      }
      dispatch(addCategories({ name: userInputs.category }));
      setNewCategory(false);
    }

    dispatch(addBookmark(userInputs));
    setUserInputs({
      title: "",
      url: "",
      category: "Category A",
    });
    toggleModal();
  };
  return (
    <div>
      <div className="text-center">
        <h1>Bookmark Manager</h1>
        <Button variant="primary" size="sm" onClick={toggleModal}>
          Add Bookmark
        </Button>
      </div>
      <Container className="py-4">
        <Row>
          <Col md="6">
            <p>Bookmark Categories</p>
            <CategoriesCard categories={categories} bookmarks={bookmarks} />
          </Col>
          <Col md="6">
            {bookmarkDetails?.title && (
              <BookmarkDetails bookmarkDetails={bookmarkDetails} />
            )}
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Bookmarkform
            handleSubmit={handleSubmit}
            userInputs={userInputs}
            setCategoryExist={setCategoryExist}
            setUserInputs={setUserInputs}
            newCategory={newCategory}
            categories={categories}
            setNewCategory={setNewCategory}
            isCategoryExist={isCategoryExist}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
