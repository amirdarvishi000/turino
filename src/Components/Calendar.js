import "../css/Calender.css";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const Calendar = () => {
  return (
    <div>
      <table class="calendar w-100 text-center table-condensed table-bordered table-striped">
        <thead>
          <tr>
            <th className="calendar--title" colspan="7">
              <a class="btn">
                <ChevronRightRoundedIcon />
              </a>
              <a class="btn date--title">بهمن</a>
              <a class="btn ">
                <ChevronLeftRoundedIcon />
              </a>
            </th>
          </tr>
          <tr>
            <th>
              <span>ش</span>
            </th>
            <th>
              <span>ی</span>
            </th>
            <th>
              <span>د</span>
            </th>
            <th>
              <span>س</span>
            </th>
            <th>
              <span>چ</span>
            </th>
            <th>
              <span>پ</span>
            </th>
            <th>
              <span>ج</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>3</span>
            </td>
            <td>
              <span className="active">4</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>5</span>
            </td>
            <td>
              <span>6</span>
            </td>
            <td>
              <span>7</span>
            </td>
            <td>
              <span>8</span>
            </td>
            <td>
              <span>9</span>
            </td>
            <td>
              <span>10</span>
            </td>
            <td>
              <span className="active">11</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>12</span>
            </td>
            <td>
              <span>13</span>
            </td>
            <td>
              <span>14</span>
            </td>
            <td>
              <span className="active">15</span>
            </td>
            <td>
              <span>16</span>
            </td>
            <td>
              <span>17</span>
            </td>
            <td>
              <span className="active active--end">18</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>19</span>
            </td>
            <td>
              <span>20</span>
            </td>
            <td>
              <span>21</span>
            </td>
            <td>
              <span>22</span>
            </td>
            <td>
              <span>23</span>
            </td>
            <td>
              <span>24</span>
            </td>
            <td>
              <span className="active">25</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>26</span>
            </td>
            <td>
              <span>27</span>
            </td>
            <td>
              <span>28</span>
            </td>
            <td>
              <span>29</span>
            </td>
            <td>
              <span>30</span>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="program--count">
        <span> در بهمن ماه 5 برنامه </span>
      </div>
    </div>
  );
};
export default Calendar;
