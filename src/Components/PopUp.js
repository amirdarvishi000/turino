import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import Button from "../Components/Button";
const PopupExample = ({ children }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Button
        text="مشاهده جدول زمان بندی"
        onClickk={() => setOpen((o) => !o)}
      />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modall">
          <a className="close btn" onClick={closeModal}>
            &times;
          </a>
          <div>
            <div className="chart--of--program">
              <table
                className="table table-responsive p-0 m-0 w-100 text-center"
                style={{ border: "1px" }}
              >
                <tr>
                  <th className="text-black">*</th>
                  <th>روز اول</th>
                  <th>روز دوم</th>
                  <th>روز سوم</th>
                </tr>
                <tr>
                  <th className="hours">6-8</th>
                  <td>صبحانه</td>
                  <td>صبحانه</td>
                  <td>صبحانه</td>
                </tr>
                <tr>
                  <th className="hours">8-12</th>
                  <td>دیدن موزه</td>
                  <td>گردش در پارک</td>
                  <td>بازدید از پارک باستانی</td>
                </tr>
                <tr>
                  <th className="hours">12-14</th>
                  <td>نهار</td>
                  <td>نهار</td>
                  <td>نهار</td>
                </tr>
                <tr>
                  <th className="hours">14-17</th>
                  <td>دیدن باغ</td>
                  <td>دیدن دریاچه</td>
                  <td>کوه نوردی</td>
                </tr>
                <tr>
                  <th className="hours">17-20</th>
                  <td>استراحت</td>
                  <td>استراحت</td>
                  <td>استراحت</td>
                </tr>
                <tr>
                  <th className="hours">20-22</th>
                  <td>شام</td>
                  <td>شام</td>
                  <td>شام</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default PopupExample;
