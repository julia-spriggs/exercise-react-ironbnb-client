import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ApartmentDetails(props) {
    const { apartmentId } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        axios
        .get('https://ironbnb-m3.herokuapp.com/' + apartmentId)
        .then( response => {
            setDetails(response.data);
        })
        .catch(e => console.log('error getting apartments from API', e));
    }, [apartmentId])

    return (
        <div>
            <h1>this is the apartment details: {details}</h1>
        </div>
    );
}

export default ApartmentDetails;