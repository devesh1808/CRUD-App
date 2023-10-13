import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {
  const allusers = useSelector((state) => state.app.users);
  const dispatch = useDispatch();

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchData));
  }, [searchData]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <h4 className="navbar-brand"><Link to="/">My App</Link></h4> */}
          <Link to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7SYkObOQbNei9g3G5AnM1oLKwsFVQBpLrQ&usqp=CAU"
              alt="logo"
              width={40}
              className="navbar-brand"
            />
          </Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/create" className="nav-link">
                  Create a User
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  All Users ({allusers.length})
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search User(s)"
              aria-label="Search"
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
