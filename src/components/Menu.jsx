import React from 'react';
import {Rating} from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import StarIcon from '@material-ui/icons/Star';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const Menu = ({ items }) => {
  const value = 3.5;
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <Box
                  sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={value}
                    readOnly
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  />
                </Box>
              </header>
              <h4 className='price'>${price}</h4>
              <p className='item-text'>{desc}</p>
              <button>Add To Cart</button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;