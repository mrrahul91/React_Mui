import React from "react";
import { Stack, ImageList, ImageListItem, Box, ImageListItemBar } from "@mui/material";
export const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 600, height: 600 }} cols={3} rowHeight={170}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=170&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title}/>
          </ImageListItem>
        ))}
      </ImageList>

      {/* <ImageList
        variant="woven"
        sx={{ width: 500, height: 500 }}
        cols={3}
        gap={8}
      >
        {itemData2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList> */}

      <Box sx={{ width: 500, height: 500, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData3.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=250&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1600268330186-76564be81357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "	https://plus.unsplash.com/premium_photo-1674831527054-f8d0a89e368d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "	 https://plus.unsplash.com/premium_photo-1671616724629-c2fa8455c28f",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "	 https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: " https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: " https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: " https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: " https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: " https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
];

const itemData3 = [
  {
    img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6 ",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1600268330186-76564be81357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "	https://plus.unsplash.com/premium_photo-1674831527054-f8d0a89e368d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1600268330186-76564be81357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },

  {
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
  {
    img: "https://images.unsplash.com/photo-1629385697093-57be2cc97fa6?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ayesha",
  },
];
