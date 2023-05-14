import { useImagesContext } from '../context';

const Form = () => {
  const { setSearchTerm } = useImagesContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.elements.search.value;
    if (!val) return;
    setSearchTerm(val);
  };

  return (
    <section className='section-center'>
      <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='search' className='input' placeholder='dog' />
        <button type='submit' className='btn'>
          search
        </button>
      </form>
    </section>
  );
};
export default Form;
