import React from 'react'
import useApiContext from '../Context/ApiContext';
import EventRowComponent from './EventRowComponent';

function ProfileEventComponent() {
    const { esemenyek } = useApiContext();
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Név</th>
                <th>Ár</th>
                <th>Hely</th>
                <th>Idő</th>
                <th>Kapacitás</th>
            </tr>
        </thead>
        {
              esemenyek.map((elem, index) => {
                return <EventRowComponent elem={elem} key={index} index={index}/>
              })                
            }
        </table>
    </>
  )
}

export default ProfileEventComponent