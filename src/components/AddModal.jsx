import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeAddModal, createArticle } from '../redux/articlesSlice';


export const AddModal = ({showAddModal, idNewArticle}) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    dispatch(createArticle({
      id: String(idNewArticle),
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      expertComment: data.expertComment
    }));
  }

  return (
    <Modal show={showAddModal} onHide={() => dispatch(closeAddModal())}>
      <Modal.Header closeButton>
        <Modal.Title>Create new article</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control {...register("title", { required: "This is required!", 
                                                  validate: (value) => typeof value === "string" 
                                                })} type="text" placeholder="Enter article title" />
            {errors.title && 
            <Form.Text className="text-danger">
              {errors.title.message}
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control {...register("description", { required: "This is required!", 
                                                        validate: (value) => typeof value === "string" 
                                                      })} as="textarea" rows={3} placeholder="Enter article description" />
            {errors.description && 
            <Form.Text className="text-danger">
              {errors.description.message}
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image url</Form.Label>
            <Form.Control {...register("imageUrl", { required: "This is required!", 
                                                      validate: (value) => typeof value === "string" 
                                                    })} type="text" placeholder="Enter image url" />
            {errors.imageUrl && 
            <Form.Text className="text-danger">
              {errors.imageUrl.message}
            </Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Experts comment</Form.Label>
            <Form.Control {...register("expertComment", { required: "This is required!", 
                                                          validate: (value) => typeof value === "string" 
                                                        })} as="textarea" rows={3} placeholder="Enter experts comment" />
            {errors.expertComment && 
            <Form.Text className="text-danger">
              {errors.expertComment.message}
            </Form.Text>}
          </Form.Group>
          <Button variant="primary" type="submit">Create</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => dispatch(closeAddModal())}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default AddModal;