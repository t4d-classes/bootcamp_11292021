import { useForm } from '../hooks/useForm';

export const BookForm = (props) => {

  const [ bookForm, change, resetBookForm ] = useForm({
    title: '',
    isbn: '',
    authorId: 1,
    category: "Inspirational",
    price: 10.99,
    quantity: 0,
  });
  
  const submitBook = async () => {
    await props.onSubmitBook({ ...bookForm });
    
    resetBookForm();
  };

  return (
    <form>
      <label style={{display: 'block'}}>
        Title:
        <input type="text" name="title" value={bookForm.title} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        ISBN:
        <input type="text" name="isbn" value={bookForm.isbn} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Category:
        <input type="text" name="category" value={bookForm.category} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Author Id:
        <input type="int" name="authorId" value={bookForm.authorId} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Price:
        <input type="float" name="price" value={bookForm.price} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Quantity:
        <input type="int" name="quantity" value={bookForm.quantity} onChange={change} />
      </label>
      <button type="button" onClick={submitBook}>{props.buttonText}</button>
    </form>
  );


};