import "../css/Register.css";
import CardTitle from "../Components/Card-title";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const Regsiter = () => {
  const [friends, setFriends] = useState([
    { name: "هاشم", family: "تقی پور", idcard: "465328451" },
    { name: "اسکندر", family: "عامری", idcard: "3653545961" },
    { name: "وحید", family: "رضویی", idcard: "7845124578121" }
  ]);
  const [persons, setPersons] = useState([
    { name: "امیرمحمد", family: "درویشی", idcard: "4580897890005" },
    { name: "جواد", family: "عرب عامری", idcard: "3653545965" },
    { name: "احمدرضا", family: "میرموسوی", idcard: "7845124578125" }
  ]);
  function insertPerson() {
    const name = document.getElementById("name").value;
    const family = document.getElementById("family").value;
    const idcard = document.getElementById("idcard").value;
    setPersons((perv) => [
      ...perv,
      { name: name, family: family, idcard: idcard }
    ]);
    console.log(persons);
  }
  function addFriendToPersons(id) {
    const getInsertFriend = friends.filter((item) => item.idcard === id);
    setPersons((perv) => [...perv, getInsertFriend[0]]);
  }
  function removePerson(id) {
    const newObj = persons.filter((item) => item.idcard != id);
    setPersons(newObj);
  }

  return (
    <div>
      <CardTitle text="جواهر دره رامسر" />
      <div className="row mt-2">
        <div className="col-12 col-md-6">
          <div>
            <input
              id="name"
              name="name"
              class="mt-2 form-control"
              type="text"
              placeholder="نام"
            />
            <input
              name="family"
              id="family"
              class="mt-2 form-control"
              type="text"
              placeholder="نام خانوادگی"
            />
            <input
              name="idcard"
              id="idcard"
              class="mt-2 form-control"
              type="text"
              placeholder="کدملی"
            />
            <button
              onClick={() => insertPerson()}
              type="submit"
              class="mt-2 float-left btn btn-primary"
            >
              اضافه کردن فرد
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-2">
          <div class="card">
            <div class="card-header">
              <span>اضافه کردن از دوستان </span>
            </div>
            <ul class="list-group">
              {friends.map((item) => (
                <li class="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>
                      {item.name} {item.family}
                    </p>
                    <span>
                      <button
                        onClick={() => addFriendToPersons(item.idcard)}
                        className="badge  badge-success py-1 px-3 m-0"
                      >
                        <AddIcon></AddIcon>
                      </button>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div class="card mt-2">
            <div class="card-header">
              <span> افراد من </span>
              <span>{persons.length} نفر</span>
            </div>
            <ul class="list-group">
              {persons.map((item) => (
                <li class="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>
                      {item.name} {item.family}
                    </p>
                    <span>
                      <button
                        onClick={() => removePerson(item.idcard)}
                        className="badge  badge-danger py-1 px-3 m-0"
                      >
                        <RemoveIcon></RemoveIcon>
                      </button>
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;
