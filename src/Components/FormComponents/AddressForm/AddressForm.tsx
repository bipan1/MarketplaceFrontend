import { useEffect, useRef, useState } from 'react'
import { useLoadScript } from "@react-google-maps/api";
import { FaMapMarkerAlt } from 'react-icons/fa';

type Props = {
    classNames : string
}

const AddressForm = ({classNames}: Props) => {
    const [address, setAddress] = useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey:(process.env.REACT_APP_GOOGLE_MAP_API_KEY as string),
        libraries : ["places"]
    });

    useEffect(() => {
        if (!isLoaded || loadError) return;

        const options = {
            componentRestrictions: { country: "au" },
            types: ['address'], 
        };

        const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, options);
        console.log(autocomplete);
        autocomplete.addListener("place_changed", () => handlePlaceChanged(autocomplete));
    }, [isLoaded, loadError]);

    const handlePlaceChanged = async (address : any) => {
        if (!isLoaded) return;
        const addressComponents = address.getPlace();
        const formattedAddress = addressComponents.formatted_address;
        setAddress(formattedAddress);
    };


  return (
    <div className="relative flex items-center bg-white">
      <FaMapMarkerAlt size={24} className="text-green-600 text-lg absolute pointer-events-none pl-2" />
      <input value={address} className={`${classNames} outline-none`} ref={inputRef} />
    </div>
        
  )
}

export default AddressForm