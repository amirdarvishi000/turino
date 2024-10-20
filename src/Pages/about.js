import Logo from "../img/logo/turino.png";
const About = () => {
  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: "32rem" }}>
        <div className="p-4 d-flex justify-content-center">
          <img className="w-100" style={{ maxWidth: 300 }} src={Logo} />
        </div>

        <p className="p-3 text-justify" style={{ textAlign: "justify" }}>
          سامانه گردشگری تورینو امکاناتی را در بستر تکنولوژی راینش ابری در
          اختیار مدیران گردشگری قرار می دهد که آنها میتوانند به راحتی و با
          کمترین هزینه ,خدمات گردشگری آنلاین را بدون نگرانی از درگیری با روش های
          سنتی ,توسط نرم افزار های موبایل به مشتریان خود ارایه نمایند. این
          سامانه کلیه مراحل اطلاع رسانی برنامه ها, ثبت نام , گزارشات ,پرداخت
          هزینه ها وسایر ابزار های مدیریت گردشگری را به راحتی و با کمترین هزینه
          و به صورت سیستماتیک و یک پارچه انجام میدهد.از مزایای این سامانه از
          جمله مقرون به صرفه بودن ,امنیت بالای اطلاعات و سرعت بالا در راه اندازی
          می باشد.
        </p>
      </div>
    </div>
  );
};
export default About;
