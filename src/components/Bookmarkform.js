import React from 'react';
import {
    Button, Form
} from "react-bootstrap";

const Bookmarkform = ({ handleSubmit, userInputs, setCategoryExist, setUserInputs, newCategory, categories, setNewCategory, isCategoryExist }) => {
    const handleChange = (e) => {
        setCategoryExist(false);
        setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    required
                    name="title"
                    id="title"
                    maxLength={30}
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
                <div className="d-flex mb-1">
                    <Form.Select
                        // aria-label="Default select example"
                        name="category"
                        onChange={handleChange}
                        disabled={newCategory}
                    >
                        {categories.map((catgry) => (
                            <option
                                key={catgry.name}
                                value={catgry.name}
                                selected={catgry.name === userInputs.category}
                            >
                                {catgry.name}
                            </option>
                        ))}
                        {/* <option value={null}>Select...</option> */}
                    </Form.Select>
                    &nbsp;&nbsp;
                    <Button
                        variant="info"
                        size="sm"
                        onClick={() => setNewCategory(!newCategory)}
                    >
                        +
                    </Button>
                </div>
                {newCategory && (
                    <Form.Control
                        required
                        type="text"
                        name="category"
                        id="category"
                        value={userInputs.category}
                        onChange={handleChange}
                        placeholder="category name"
                    />
                )}
                {isCategoryExist && (
                    <small className="text-danger">
                        Category name already exist!
                    </small>
                )}
            </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit" size="sm">
                    Save
                </Button>
            </div>
        </Form>
    );
};

export default Bookmarkform;