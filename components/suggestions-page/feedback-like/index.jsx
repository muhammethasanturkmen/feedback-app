"use client"
import "./feedback-like.css";
import React, { useState } from 'react';

export default  function LikeButton() {
   
    const [likes, setLikes] = useState(112);  
    const [liked, setLiked] = useState(false); 

    const handleLike = () => {
        if (liked) {
            setLikes(likes - 1); 
        } else {
            setLikes(likes + 1); 
        }
        setLiked(!liked); 
    };

    return (
        <div className="like-and-comments">
            <div className="likes">
                <button onClick={handleLike} style={{ color: liked ? 'red' : 'gray' }}>
                    {liked ? 'Beğenildi' : 'Beğen'}
                </button>
                <p>{likes}</p>
            </div>
        </div>
    );
}
