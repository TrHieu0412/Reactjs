import React from "react";
import Navigation from "../components/Navigation/Navigation";
import AddPeopleForm from "../components/AddPeopleForm/AddPeopleForm";
import PeopleList from "../components/PeopleList/PeopleList";
import { useState } from "react";
import Header from "../components/Header/Header";
const InformationPage = () => {
  const data = [
    {
      id: 1,
      images: "Hello",
      firstName: "Euell",
      lastName: "Nock",
      date: "4/16/2023",
      address: "America",
      gender: "Male",
      job: "Account Coordinator",
    },
    {
      id: 2,
      images: "Hello",
      firstName: "Arly",
      lastName: "Serjeant",
      date: "3/24/2023",
      address: "Brazil",
      gender: "Female",
      job: "Staff Scientist",
    },
    {
      id: 3,
      images: "Hello",
      firstName: "Saw",
      lastName: "Somner",
      date: "2/15/2023",
      address: "France",
      gender: "Male",
      job: "Tax Accountant",
    },
    {
      id: 4,
      images: "Hello",
      firstName: "Bili",
      lastName: "Bonifas",
      date: "5/24/2023",
      address: "Columbia",
      gender: "Female",
      job: "Social Worker",
    },
    {
      id: 5,
      images: "Hello",
      firstName: "Cindy",
      lastName: "Aherne",
      date: "5/4/2023",
      address: "Poland",
      gender: "Female",
      job: "Compensation Analyst",
    },
    {
      id: 6,
      images: "Hello",
      firstName: "Grantham",
      lastName: "Cockayme",
      date: "11/16/2022",
      address: "Ukraine",
      gender: "Male",
      job: "Internal Auditor",
    },
    {
      id: 7,
      images: "Hello",
      firstName: "Keelby",
      lastName: "Giovannacci",
      date: "9/23/2022",
      address: "Russian",
      gender: "Male",
      job: "Programmer Analyst I",
    },
    {
      id: 8,
      images: "Hello",
      firstName: "Butch",
      lastName: "Holley",
      date: "6/24/2022",
      address: "Ukraine",
      gender: "Male",
      job: "Software Test Engineer III",
    },
    {
      id: 9,
      images: "Hello",
      firstName: "Duncan",
      lastName: "MacQuaker",
      date: "7/29/2022",
      address: "Ukraine",
      gender: "Male",
      job: "Staff Scientist",
    },
    {
      id: 10,
      images: "Hello",
      firstName: "Leighton",
      lastName: "Huie",
      date: "10/29/2022",
      address: "Spain",
      gender: "Male",
      job: "Financial Analyst",
    },
    {
      id: 11,
      images: "Hello",
      firstName: "Judy",
      lastName: "Craske",
      date: "7/29/2022",
      address: "Portugal",
      gender: "Female",
      job: "Systems Administrator III",
    },
    {
      id: 12,
      images: "Hello",
      firstName: "Nil",
      lastName: "Reyes",
      date: "4/26/2023",
      address: "Germany",
      gender: "Male",
      job: "Marketing Manager",
    },
    {
      id: 13,
      images: "Hello",
      firstName: "Rudolf",
      lastName: "Coarser",
      date: "9/12/2022",
      address: "America",
      gender: "Male",
      job: "VP Sales",
    },
    {
      id: 14,
      images: "Hello",
      firstName: "Stanislaus",
      lastName: "Creese",
      date: "11/24/2022",
      address: "Thailand",
      gender: "Male",
      job: "Environmental Tech",
    },
    {
      id: 15,
      images: "Hello",
      firstName: "Zola",
      lastName: "Ganford",
      date: "8/8/2022",
      address: "Australia",
      gender: "Female",
      job: "Administrative Officer",
    },
    {
      id: 16,
      images: "Hello",
      firstName: "Timmy",
      lastName: "Artiss",
      date: "1/20/2023",
      address: "France",
      gender: "Male",
      job: "Accounting Assistant III",
    },
    {
      id: 17,
      images: "Hello",
      firstName: "Jessamyn",
      lastName: "Kalkofer",
      date: "6/23/2022",
      address: "France",
      gender: "Female",
      job: "Marketing Assistant",
    },
    {
      id: 18,
      images: "Hello",
      firstName: "Shaw",
      lastName: "Dehm",
      date: "6/18/2022",
      address: "America",
      gender: "Male",
      job: "Pharmacist",
    },
    {
      id: 19,
      images: "Hello",
      firstName: "Colan",
      lastName: "Itzkov",
      date: "12/29/2022",
      address: "America",
      gender: "Male",
      job: "Office Assistant IV",
    },
    {
      id: 20,
      images: "Hello",
      firstName: "Isidoro",
      lastName: "Miklem",
      date: "2/8/2023",
      address: "America",
      gender: "Male",
      job: "Web Developer IV",
    },
  ];

  const [staffList, setStaffList] = useState(data);
  const addNewPeople = (staff) => {
    const addToList = [...staffList, staff];
    setStaffList(addToList);
  };

  const onDeletePeople = (staffListId) => {
    const newPeople = staffList.filter(
      (staffList) => staffList.id !== staffListId
    );
    setStaffList(newPeople);
  };
  const onChangePeople = (newValue, staffListId) => {
    const updatedStaffList = staffList.map((staff) => {
      if (staff.id === staffListId) {
        return { ...staff, ...newValue };
      }
      return staff;
    });

    setStaffList(updatedStaffList);
  };

  return (
    <div>
      <Header />
      <div className="nav-add">
        <div className="nav">
          <Navigation />
        </div>
        <div className="add-list">
          {" "}
          <div className="people-add-form">
            <AddPeopleForm addNewPeople={addNewPeople} />
          </div>
          <div className="people-list">
            <PeopleList
              staffList={staffList}
              onDeletePeople={onDeletePeople}
              onChangePeople={onChangePeople}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
