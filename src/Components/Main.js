import Calender from "./Calendar";
import CardImage from "./Card-image";
const Main = () => {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <Calender />
      </div>
      <div className="col-sm-12 col-md-7 mt-3 mt-lg-0">
        <CardImage
          type="home"
          title="بیستون و طاق بستان"
          img={
            "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/1-11.jpg"
          }
        />
        <CardImage
          type="home"
          title="قلعه بابک"
          img={
            "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/15-4.jpg"
          }
        />
        <CardImage
          type="home"
          title="خانه‌های تاریخی کاشان"
          img={
            "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/14-4.jpg"
          }
        />
        <CardImage
          type="home"
          title="چغازنبیل"
          img={
            "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/12-4.jpg"
          }
        />
        <CardImage
          type="home"
          title="جزیره هرمز"
          img={
            "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/17-2.jpg"
          }
        />
      </div>
    </div>
  );
};
export default Main;
