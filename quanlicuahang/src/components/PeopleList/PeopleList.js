import React, { useState } from "react";
import "./PeopleList.css";
import { FaEye, FaRegTrashAlt, FaSearch, FaUser } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Navigate from "react-router-dom";
const PeopleList = (props) => {
  const { staffList, onDeletePeople, onChangePeople } = props;
  const [peopleList, setPeopleList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [sortOrderById, setSortOderById] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();
  const handleDelete = (index) => {
    const updatedList = [...peopleList];
    updatedList.splice(index, 1);
    setPeopleList(updatedList);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    setSearchKeyword(event.target.value);
  };

  const filteredStaffList = staffList.filter((staff) => {
    const { id, images, firstName, lastName, date, address, gender, job } =
      staff;
    const searchString =
      `${id} ${images} ${firstName} ${lastName} ${date} ${address} ${gender} ${job}`.toLowerCase();
    return searchString.includes(searchKeyword.toLowerCase());
  });
  const handleSortBy = (event) => {
    setSortOrder(event.target.value);
  };
  const handleSortById = (event) => {
    setSortOderById(event.target.value);
  };
  const sortedStaffListById = staffList.sort((a, b) => {
    if (sortOrderById === "asc") {
      return parseInt(a.id) - parseInt(b.id);
    } else if (sortOrderById === "desc") {
      return parseInt(b.id) - parseInt(a.id);
    }
    return 0;
  });

  const sortedStaffListByName = staffList.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortOrder === "desc") {
      return b.firstName.localeCompare(a.firstName);
    }
    return 0;
  });

  const handleViewDetails = (id) => {
    // Find the selected item from the staffList based on the id
    const selected = staffList.find((staff) => staff.id === id);
    setSelectedItem(selected);

    // Navigate to the details page with the selected item's id
    navigate(`/Details/${id}`);
  };
  console.log(handleViewDetails);
  return (
    <div className="PeopleList">
      <h4>People List</h4>
      <div className="table-search">
        <form className="form-search">
          <input
            type="text"
            placeholder="Search"
            value={searchKeyword}
            onChange={handleSearch}
          ></input>
          <button>
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="table-title">
        <h5
          className="table-id"
          style={{
            minWidth: "10px",
            maxWidth: "10px",
          }}
        >
          Id{" "}
          <select value={sortOrderById} onChange={handleSortById}>
            <option value="">Sort</option>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </h5>
        <h5
          className="table-images"
          style={{
            minWidth: "50px",
            maxWidth: "50px",
          }}
        >
          {" "}
          Images{" "}
        </h5>
        <h5
          className="table-name"
          style={{
            minWidth: "100px",
            maxWidth: "100px",
          }}
        >
          {" "}
          Name{" "}
          <select value={sortOrder} onChange={handleSortBy}>
            <option value="staffList">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </h5>
        <h5
          className="table-date"
          style={{
            minWidth: "50px",
            maxWidth: "50px",
          }}
        >
          {" "}
          Date{" "}
        </h5>
        <h5
          className="table-address"
          style={{
            minWidth: "50px",
            maxWidth: "50px",
          }}
        >
          {" "}
          Address{" "}
        </h5>
        <h5
          className="table-gender"
          style={{
            minWidth: "50px",
            maxWidth: "50px",
          }}
        >
          {" "}
          Gender{" "}
        </h5>
        <h5
          className="table-position"
          style={{
            minWidth: "50px",
            maxWidth: "50px",
          }}
        >
          {" "}
          Position{" "}
        </h5>
      </div>
      <div className="people-table">
        {filteredStaffList.map((staff) => {
          const {
            id,
            images,
            firstName,
            lastName,
            date,
            address,
            gender,
            job,
          } = staff;
          return (
            <div className="people-row" key={id}>
              <p
                className="table-id"
                style={{
                  minWidth: "5px",
                  maxWidth: "5px",
                }}
              >
                {staff.id}
              </p>
              <p
                className="table-images"
                style={{
                  minWidth: "50px",
                  maxWidth: "50px",
                  fontSize: "30px",
                }}
              >
                <FaUser />
              </p>
              <p
                className="table-name"
                style={{
                  minWidth: "100px",
                  maxWidth: "100px",
                }}
              >
                {staff.firstName} {staff.lastName}
              </p>
              <p
                className="table-date"
                style={{
                  minWidth: "50px",
                  maxWidth: "50px",
                }}
              >
                {staff.date}
              </p>
              <p
                className="table-address"
                style={{
                  minWidth: "50px",
                  maxWidth: "50px",
                }}
              >
                {staff.address}
              </p>
              <p
                className="table-gender"
                style={{
                  minWidth: "50px",
                  maxWidth: "50px",
                }}
              >
                {staff.gender}
              </p>
              <p
                className="table-job"
                style={{
                  minWidth: "50px",
                  maxWidth: "50px",
                }}
              >
                {staff.job}
              </p>
              <div class="table-button">
                <button
                  className="onCheckPeople"
                  onClick={() => handleViewDetails(staff.id)}
                >
                  <FaEye />
                </button>
                <button
                  className="onChangePeople"
                  onClick={() => onChangePeople(staff.id)}
                >
                  <RiEditLine />
                </button>
                <button
                  className="onDeletePeople"
                  onClick={() => onDeletePeople(staff.id)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PeopleList;
