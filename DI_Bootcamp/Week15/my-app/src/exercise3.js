import React from "react";

const UserFavoriteAnimals = (props) => {
    return (
      <p>
        Animals:{" "}
        {props.colors.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </p>
    );
  };
  
  export default UserFavoriteAnimals;