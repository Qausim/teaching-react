// @ts-ignore
import styles from './styles.module.css';
import { memo, useCallback, useEffect, useMemo, useState } from "react";
// @ts-ignore
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import styled from 'styled-components';
import StyledButton from '../StyledComponents/button';
import React from 'react';
import Axios, { AxiosError } from 'axios';


type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const getPosts = async () => {
  const { data } = await Axios.get('https://jsonplaceholder.typicode.com/posts');
  return data as PostType[];
};


const PostsWrapper = styled.div`
  label {
    display: block;
    text-align: left;
  }

  & > p {
    margin-bottom: 32px;
  }
`;

const Posts = () => {
  const [errored, setErrored] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [show, setShow] = useState(true);

  const fetchPosts = useCallback(async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      setErrored(true);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  console.log('RENDERING POSTS...');

  const postList = useMemo(() => {
    const postList = posts.map(({ id, title, body }) => {
      return (
        <div key={id} className={styles.post}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      );
    });

    return postList;
  }, [posts]);

  return errored ? <p>Something went wrong :(</p> : (
    <PostsWrapper>
      <button
        onClick={() => setShow(!show)
      }>
        {show ? 'Hide' : 'Show'}
      </button>

      {show && postList}

      {posts.length ? <br /> : null}

      <StyledButton
        primary
        rounded
        onClick={fetchPosts}
      >
        <Check width={18} height={18} />
      </StyledButton>
      <br />
    </PostsWrapper>
  );
};

export default memo(Posts);
