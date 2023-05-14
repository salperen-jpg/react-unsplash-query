import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useImagesContext } from '../context';

const url = `https://api.unsplash.com/search/photos?&client_id=${
  import.meta.env.VITE_ACCESS_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useImagesContext();
  const { isLoading, data, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const response = await axios(`${url}&query=${searchTerm}`);
      return response.data;
    },
  });

  if (isLoading) {
    return <div className='loading'></div>;
  }

  if (isError) {
    return <div className='error'>There was an error...</div>;
  }

  return (
    <section>
      <div className='section-center gallery'>
        {data.results.map((photo) => {
          const srcImg = photo?.urls?.regular;
          return <img src={srcImg} key={photo.id} />;
        })}
      </div>
    </section>
  );
};
export default Gallery;
