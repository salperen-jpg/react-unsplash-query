import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const Gallery = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['images'],
    queryFn: async () => {
      const response = await axios(
        'https://api.unsplash.com/search/photos?page=1&query=dog&client_id=ihAgO_sB6bzHdaOJz2lueO-NYuIapOSWHohKDJV35Eo'
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (isError) {
    return <div className='error'>There was an error...</div>;
  }

  return <section className='gallery'></section>;
};
export default Gallery;
