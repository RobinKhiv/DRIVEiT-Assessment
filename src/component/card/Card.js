import React from "react";

export default function Card(props) {
  const { user } = props;

  return (
    <div className="card">
      <div className="card__item">
          <img className="card__img" src={user.avatar} alt={user.first_name} />
        <p className="card__text">{user.first_name} {user.last_name}</p>
        <a href={`mailto:${user.email}`} className="card__email">{user.email}</a>
      </div>
    </div>
  );
}
