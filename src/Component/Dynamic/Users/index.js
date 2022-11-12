import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Link } from "react-router-dom";
import axios from "axios";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, []);

  let loadData = async () => {
    let user = await axios.get(
      "https://631d700ecc652771a4859a9c.mockapi.io/Student"
    );
    setUsers(user.data);
  };

  let userDelete = async (id) => {
    try {
      await axios.delete(
        `https://631d700ecc652771a4859a9c.mockapi.io/Student/${id}`
      );
      loadData();
    } catch (error) {
      console.log("Somthing Wend Worring");
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-2 text-gray-800">
            <SensorOccupiedIcon />
            Users
          </h1>
          <Link
            to="/UserForm"
            className=" d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <AddCircleIcon />
            Create User
          </Link>
        </div>

        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users_Datas</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>English</th>
                    <th>Tamil</th>
                    <th>Maths</th>
                    <th>Science</th>
                    <th>Social-Science</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Sno</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>English</th>
                    <th>Tamil</th>
                    <th>Maths</th>
                    <th>Science</th>
                    <th>Social-Science</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.Name}</td>
                        <td>{user.Email}</td>
                        <td>{user.English}</td>
                        <td>{user.Tamil}</td>
                        <td>{user.Maths}</td>
                        <td>{user.Science}</td>
                        <td>{user.SocialScience}</td>
                        <td>
                          <Link
                            to={`/Users/View/${user.id}`}
                            className="btn btn-sm btn-warning mb-2"
                            style={{ width: "70px" }}
                          >
                            View
                          </Link>
                          <br />
                          <Link
                            to={`/User/Edit/${user.id}`}
                            className="btn btn-sm btn-primary mb-2"
                            style={{ width: "70px" }}
                          >
                            Edits
                          </Link>
                          <br />
                          <button
                            onClick={() => userDelete(user.id)}
                            className="btn btn-sm btn-danger"
                            style={{ width: "70px" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
