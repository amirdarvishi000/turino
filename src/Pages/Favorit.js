import CardImage from "../Components/Card-image";
const Favorit = () => {
  return (
    <div>
      <CardImage
        type="card-favorit"
        title="بیستون و طاق بستان"
        img={
          "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/1-11.jpg"
        }
      />
      <CardImage
        type="card-favorit"
        title="قلعه بابک"
        img={
          "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/15-4.jpg"
        }
      />
      <CardImage
        type="card-favorit"
        title="خانه‌های تاریخی کاشان"
        img={
          "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/14-4.jpg"
        }
      />
      <CardImage
        type="card-favorit"
        title="چغازنبیل"
        img={
          "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/12-4.jpg"
        }
      />
      <CardImage
        type="card-favorit"
        title="جزیره هرمز"
        img={
          "https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2019/12/17-2.jpg"
        }
      />
    </div>
  );
};
export default Favorit;
