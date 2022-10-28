import React from "react"
import Link from "@docusaurus/Link"
import './Card.css'

export default function Card(props) {
  return <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__body">
        <h3 style={{ verticalAlign: 'middle' }} className={'title'}>
          {props.name}
        </h3>
        {props.isCorporate && <h4 style={{ verticalAlign: 'middle' }}>Provided by {props.district}</h4>}
        <p>{props.description}</p>
      </div>
      <div className="card__footer">
        <div className="button-group button-group--block">
          <Link className="button button--secondary" to={props.href}>
            {props.isExternal ? "Launch" : "Learn More"}
          </Link>
        </div>
      </div>
    </div>
  </div>;
}