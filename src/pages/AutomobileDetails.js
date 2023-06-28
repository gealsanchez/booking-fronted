import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import SideBar from '../components/SideBar';

const AutomobileDetails = () => {
  const automobiles = useSelector((state) => state.automobiles);
  const { automobileId } = useParams();
  const automobile = automobiles.find((automobile) => automobile.id === parseInt(automobileId, 10));
  if (!automobile) {
    return <p className="automobile-details-not-found">automobile not found</p>;
  }

  return (
    <div className="automobile-details">
      <SideBar />
      <div className="automobile-details-container">
        <img className="automobile-details-image" src={automobile.photo} alt="automobile" />
        <table className="automobile-data">
          <tbody>
            <tr className="automobile-details-name">
              <td>automobile:</td>
              <td>{automobile.model}</td>
            </tr>
            <tr className="automobile-details-year gray-row">
              <td>year:</td>
              <td>{automobile.year}</td>
            </tr>
            <tr className="automobile-details-location">
              <td>Based in:</td>
              <td>{automobile.location}</td>
            </tr>
            <tr className="automobile-details-rate gray-row">
              <td>Charging rate:</td>
              <td>
                $
                {automobile.rate}
              </td>
            </tr>
            <tr className="gray-row">
              <td>
                <Link to={`/automobiles/${automobile.id}/reserve`}>
                  <button type="button" className="automobile-details-button"> Reserve</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AutomobileDetails;
