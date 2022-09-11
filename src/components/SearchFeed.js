import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?q=${searchTerm}&part=snippet&maxResults=50`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 2
      }}
    >
      <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color: 'white'
        }}
      >
        Search Results for: 
        <span
          style={{
            color: '#f31503',
            marginLeft: '.5rem'
          }}
        >
          {searchTerm}
        </span>
        videos
      </Typography>

      <Videos
        videos={videos}
      />
    </Box>
  );
}

export default SearchFeed;