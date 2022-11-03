import { FormEvent, useState } from 'react';
import { Post } from '../../store/reducers/posts.reducer';
import Button from '../Button';
import styles from './styles.module.css';


type PostFormProps = {
  post?: Post | null;
  onSubmit(values: { title: string; body: string; }): void;
};

const PostForm = ({ onSubmit, post }: PostFormProps) => {
  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({title, body});
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_group}>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          />
      </div>
      <div className={styles.form_group}>
        <label>Body</label>
        <textarea
          onChange={({ target: { value } }) => setBody(value)}
          value={body}
        ></textarea>
      </div>

      <div className={styles.form_group}>
        <Button.Primary>
          + Add
        </Button.Primary>
      </div>
    </form>
  );
}

export default PostForm
