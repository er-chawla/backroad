import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  const tourInfo = tours.map(
    ({ id, src, date, title, body, country, days, price }) => {
      return (
        <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={src} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>{body}</p>
            <div className="tour-footer">
              <p>
                <span>
                  <i className="fas fa-map"></i>
                </span>
                {country}
              </p>
              <p>{days}</p>
              <p>{price}</p>
            </div>
          </div>
        </article>
      );
    }
  );
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">{tourInfo}</div>
    </section>
  );
};
export default Tours;
