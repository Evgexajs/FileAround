import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../style/style.css';
import '../style/Main/style.css';
import { postsFetchData } from '../actions/postDataAction';

function Main (props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(postsFetchData())
    }, []);

    const posts = useSelector (state => state.postData)
    return (
        <div className='center'>
            <div className='list'>
                <div className='list__name'><h3>Предложения</h3></div>
                <div className='list__main'>
                    <div className="posts">
                    {posts?.map((post) => {
                        return (
                        <div className='post' key={post.id}>
                            <div className='post__image'><img src={post.img} alt=""/></div>
                            <div className='post__footer'>
                                <div className='post__like'>like {post.like}</div>
                                <div className='post__comment'>comment {post.comment}</div>
                                <div className='post__share'>share {post.share}</div>
                            </div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;