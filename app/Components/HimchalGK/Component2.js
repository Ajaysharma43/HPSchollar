const Component2 = () => {
    const Button = () => (
      <button className="w-full bg-[#FDC800] text-white text-[14px] font-semibold py-2 rounded-[12px] mt-4 hover:brightness-105 transition">
        View All Details
      </button>
    );
  
    const Section = ({ title, items }) => (
      <div className="bg-[#FFFCF4] px-4 py-5">
        <h3 className="text-[16px] font-semibold mb-3 text-black">{title}</h3>
        <ul className="space-y-1 text-[14px] text-[#333]">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-1">›</span>
              {item}
            </li>
          ))}
        </ul>
        <Button />
        <hr className="mt-5 border-t border-dashed border-black/40" />
      </div>
    );
  
    return (
      <div className="w-full lg:w-[300px] xl:w-[320px] px-4 py-6 text-black">
        <Section
          title="Tourist Destinations"
          items={["Kullu", "Manali", "Dharamshala", "Dalhousie"]}
        />
        <Section
          title="Travel Guide"
          items={["How To Reach Himachal", "Fairs & Festivals", "Dharamshala", "Dalhousie"]}
        />
        <Section
          title="Tourist Destinations"
          items={["Kullu", "Manali", "Dharamshala", "Dalhousie"]}
        />
      </div>
    );
  };
  
  export default Component2;
  