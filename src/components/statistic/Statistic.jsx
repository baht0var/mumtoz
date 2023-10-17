import React from "react";
const data = [
    {number: 18, text:"text1"},
    {number: 28, text:"text2"},
    {number: 88, text:"text3"},
];
const Statistic = () => {
  return (
    <div >
        <h2 className="pb-10 text-5xl font-serif font-bold">Статистика в сифрах</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-3 gap-5">
          {data.map((elem, id) => {
            return (
                <div className="border-2 border-black/80 rounded-2xl ">
                <p className="text-9xl text-[#D76B0B] py-2 px-5">{elem.number}</p>
                <p className="text-4xl text-[#D76B0B] pb-5 px-5">{elem.text}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Statistic;
