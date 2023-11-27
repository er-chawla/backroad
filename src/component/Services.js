import { serviceArticles } from "../data";
import Title from "./Title";

const Services = () => {
  const serviceArticlesInfo = serviceArticles.map(
    ({ id, icon, text, title }) => {
      return (
        <article className="service" key={id}>
          <span className="service-icon">
            <i className={icon}></i>
          </span>
          <div className="service-info">
            <h4 className="service-title">{title}</h4>
            <p className="service-text">{text}</p>
          </div>
        </article>
      );
    }
  );

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="service" />
      <div className="section-center services-center">
        {serviceArticlesInfo}
      </div>
    </section>
  );
};
export default Services;
