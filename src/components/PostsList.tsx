import classNames from 'classnames';
import React from 'react';
import { Post } from '../types/Post';
import { setSelectedPost, setPostComments } from '../features/posts/postsSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getPostComments } from '../api/comments';

export const PostsList: React.FC = () => {
  const posts = useAppSelector((state) => state.posts.userPosts);
  const selectedPost = useAppSelector((state) => state.posts.selectedPost);
  const dispatch = useAppDispatch();

  return (
    <div data-cy="PostsList">
      <p className="title">Posts:</p>

      <table className="table is-fullwidth is-striped is-hoverable is-narrow">
        <thead>
          <tr className="has-background-link-light">
            <th>#</th>
            <th>Title</th>
            <th> </th>
          </tr>
        </thead>

        <tbody>
          {posts?.map((post: Post) => (
            <tr key={post.id} data-cy="Post">
              <td data-cy="PostId">{post.id}</td>
              <td data-cy="PostTitle">{post.title}</td>
              <td className="has-text-right is-vcentered">
                <button
                  type="button"
                  data-cy="PostButton"
                  className={classNames(
                    'button',
                    'is-link',
                    {
                      'is-light': post.id !== selectedPost?.id,
                    },
                  )}
                  onClick={() => {
                    dispatch(setSelectedPost(post));

                    const postComments = async () => {
                      const comments = await getPostComments(post.id);

                      dispatch(setPostComments(comments));
                    };

                    postComments();
                  }}
                >
                  {post.id === selectedPost.id ? 'Close' : 'Open'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
