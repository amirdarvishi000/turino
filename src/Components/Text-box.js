import "../css/Text-box.css";
import "../css/Range-money.css";
import UploadFile from "../Components/Files-Upload";
const Textbox = ({
  type = "textbox",
  placeholder,
  text,
  children,
  label = true
}) => {
  if (type === "textbox") {
    return (
      <div>
        <div class="input-group-prepend ">
          {label && (
            <span
              class="title--input bg-secondary-theme px-2 d-flex algin-items-center  input-group-text"
              id="basic-addon1"
            >
              <span className="padding--span--icon">{children}</span>
              <p>{text}</p>
            </span>
          )}
        </div>
        <div class="input-group">
          <input type="text" class="form-control" placeholder={placeholder} />
        </div>
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div>
        <div class="input-group-prepend ">
          {label && (
            <span
              class="title--input bg-secondary-theme px-2 d-flex algin-items-center  input-group-text"
              id="basic-addon1"
            >
              <span className="padding--span--icon">{children}</span>
              <p>{text}</p>
            </span>
          )}
        </div>
        <div class="input-group">
          <textarea
            row="5"
            type="text"
            class="form-control"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  } else if (type === "upload-file") {
    return (
      <div>
        <div class="input-group-prepend">
          {label && (
            <span
              class="title--input bg-secondary-theme px-2 d-flex algin-items-center  input-group-text"
              id="basic-addon1"
            >
              <span className="padding--span--icon">{children}</span>
              <p>{text}</p>
            </span>
          )}
        </div>
        <div class="input-group">
          <UploadFile />
        </div>
      </div>
    );
  }
};
export default Textbox;
