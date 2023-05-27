import data from "./data";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {data.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
