import React, { useState } from "react";
import "./AddPeopleForm.css";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const AddPeopleForm = (props) => {
  // State for add staff
  const [addPeople, setAddPeople] = useState({
    id: "",
    images: "",
    firstName: "",
    lastName: "",
    date: "",
    address: "",
    gender: "",
    job: "",
  });

  const addPeopleForm = (event) => {
    const { value, name } = event.target;
    // Use dynamic key
    setAddPeople({
      ...addPeople,
      [name]: value,
    });
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();

    props.addNewPeople(addPeople);
    // clear form
    setAddPeople({
      id: "",
      images: "",
      firstName: "",
      lastName: "",
      date: "",
      address: "",
      gender: "",
      job: "",
    });
  };

  return (
    <div className="AddPeopleForm">
      <div className="Add-people-title"> </div>

      <form
        className="row g-3 needs-validation add-people-form"
        onSubmit={onHandleSubmit}
      >
        <div className="col-md-4 add-id">
          <input
            type="number"
            className="form-control"
            id="validationCustom01"
            placeholder="Id"
            value={addPeople.id}
            onChange={addPeopleForm}
            name="id"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 add-picture">
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            placeholder="Images"
            value={addPeople.images}
            onChange={addPeopleForm}
            name="images"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 add-name">
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="First Name"
            onChange={addPeopleForm}
            value={addPeople.firstName}
            name="firstName"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 add-last-name">
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            placeholder="Last Name"
            onChange={addPeopleForm}
            value={addPeople.lastName}
            name="lastName"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4 add-date">
          <input
            type="date"
            className="form-control"
            id="validationCustom02"
            placeholder="Date of birth"
            value={addPeople.date}
            onChange={addPeopleForm}
            name="date"
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="col-md-6 add-address">
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Address"
            value={addPeople.address}
            onChange={addPeopleForm}
            name="address"
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>

        <div className="col-md-6 add-gender">
          <input
            type="text"
            className="form-control"
            id="validationCustom03"
            placeholder="Gender"
            value={addPeople.gender}
            onChange={addPeopleForm}
            name="gender"
          />
          <div className="invalid-feedback">Please provide a valid city.</div>
        </div>
        <div className="col-md-3 add-job">
          <input
            type="text"
            className="form-control"
            id="validationCustom05"
            placeholder="Position"
            onChange={addPeopleForm}
            value={addPeople.job}
            name="job"
          />
          <div className="invalid-feedback">Please provide a valid zip.</div>
        </div>
        <div className=" add-to-list">
          <button className="btn btn-primary" type="submit">
            Add new people
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPeopleForm;
