const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const val = e.target.elements.search.value;
    if (!val) console.log('empty');
    else {
      console.log('smt');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input type='text' name='search' className='input' placeholder='dog' />
      <button type='submit'>search</button>
    </form>
  );
};
export default Form;
