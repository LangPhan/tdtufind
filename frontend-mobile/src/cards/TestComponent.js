// src/components/TestComponent.js
import React from 'react';
import Post_bigCard from './Post_bigCard';

const TestComponent = () => {
  const testItem = {
    id: 1,
    username: 'TestUser',
    profile_image: 'test_image_url',
    image: 'test_post_image_url',
    likes: 10,
    comments: 5,
  };

  return <Post_bigCard {...testItem} />;
};

export default TestComponent;
