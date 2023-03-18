import React, { useState } from "react";

function RenderList() {
  const [datas, setDatas] = useState([
    { name: "nadhif" },
    { name: "Jaeludin" },
  ]);

  const renderDatas = () => {
    datas.map((data) => {
      return <div>{data.name}</div>;
    });
  };

  return (
    <div>
      <p>The data is not shown, make the changes so the datas shown</p>

      {renderDatas()}
    </div>
  );
}

export default RenderList;
