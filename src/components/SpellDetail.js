import React from "react";
//TODO: make a generic li component and turned into a map function
const SpellDetail = props => {
  const spell = props.spell;
  return (
    <ul className="detail-item">
      {spell.castingTime ? (
        <li>
          <span className="cat">Casting Time: </span>
          {spell.castingTime}
        </li>
      ) : null}
      {spell.duration ? (
        <li>
          <span className="cat">Duration: </span>
          {spell.duration}
        </li>
      ) : null}
      {spell.range ? (
        <li>
          <span className="cat">Range: </span>
          {spell.Range}
        </li>
      ) : null}
      {spell.components ? (
        <li>
          <span className="cat">Components: </span>
          {spell.components.join(" ")}
        </li>
      ) : null}
      {spell.material ? (
        <li>
          <span className="cat">Material Components: </span>
          {spell.material}
        </li>
      ) : null}
      {spell.desc ? (
        <li>
          <p className="cat">Description</p>
          {spell.desc.map((line, i) => <p key={i}>{line}</p>)}
        </li>
      ) : null}
      {spell.higher ? (
        <li>
          <p className="cat">Higher Levels</p>
          {spell.higher ? spell.higher.map((line, i) => <p key={i}>{line}</p>) : null}
        </li>
      ) : null}
    </ul>
  );
};

export default SpellDetail;
