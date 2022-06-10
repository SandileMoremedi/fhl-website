import Image from "next/image";
const Sponsor = () => {
  return (
    <div className="sponsor">
      <h2>Our Sponsor</h2>
      <div className="image">
        <Image
          src="/sponsor.jpg"
          layout="fill"
          objectFit="contain"
          alt="Main Sponsor Logo"
        />
      </div>
    </div>
  );
};

export default Sponsor;
