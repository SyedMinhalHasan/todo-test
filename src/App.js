import { Table, Badge, Button, Modal, Container, Form } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [newData, setNewData] = useState();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Task-1",
      status: "completed",
      details: "Details",
    },
    {
      id: 2,
      name: "Task-2",
      status: "in-complete",
      details: "Details",
    },
    {
      id: 3,
      name: "Task-3",
      status: "in-complete",
      details: "Details",
    },
    {
      id: 4,
      name: "Task-4",
      status: "in-complete",
      details: "Details",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState();

  const handleClick = (id) => {
    const updated = data.map((item) => {
      if (item.id === id) {
        item.status = "completed";
        return item;
      } else return item;
    });
    setData([...updated]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    const updated = data.filter((item) => {
      return item.id !== id;
    });
    setData([...updated]);
    setShowModal(false);
  };

  const handleSubmit = () => {
    if(newData?.hasOwnProperty('id') && newData?.hasOwnProperty('name') && newData?.hasOwnProperty('status') && newData?.hasOwnProperty('details')) {
      setData([ ...data, newData ]);
      setAddModal(false);
    }
  }

  useEffect(() => {
    console.log("newData", newData)
  }, [newData])
  return (
    <div>
      <h1 className="text-center">Todo List Basic Test with Redux</h1>
      <Container>
        <Button onClick={() => setAddModal(true)}>Add New Todo Item</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr
                key={key}
                onClick={() => {
                  setSelectedItem({ ...item });
                  setShowModal(true);
                }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <Badge bg={item.status === "completed" ? "success" : "danger"}>
                  {item.status}
                </Badge>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              {selectedItem?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedItem?.details}</p>
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => handleClick(selectedItem.id)}
                class="btn btn-success mr-3"
              >
                Mark as complete
              </Button>
              <Button
                onClick={() => handleDelete(selectedItem.id)}
                class="btn btn-danger m-l-2"
              >
                Delete task
              </Button>
            </div>
          </Modal.Body>
        </Modal>
        <Modal
          show={addModal}
          onHide={() => setAddModal(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Provide Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control onChange={(e) => setNewData({ ...newData, id: e.target.value })} type="number" placeholder="Enter id" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(e) => setNewData({ ...newData, name: e.target.value })} type="text" placeholder="Task Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Details</Form.Label>
                <Form.Control onChange={(e) => setNewData({ ...newData, details: e.target.value })} type="text" placeholder="Task Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select onChange={(e) => setNewData({ ...newData, status: e.target.value })}>
                  <option></option>
                  <option>in-complete</option>
                  <option>completed</option>
                </Form.Select>
              </Form.Group>
              <Button onClick={() => handleSubmit()} variant="primary" >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default App;
