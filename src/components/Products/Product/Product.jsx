import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

export const Product = ({ product, onAddTocart }) => {
    const classes = useStyles();
 
  
  return (
    <Card className={classes.root}>
      <CardMedia  height="200px" className={classes.media} component="img" alt={product.name} image={product.image.url}  title={product.name} />
        <CardContent>
            <div className={classes.CardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                </Typography>
            
            </div>
            <Typography dangerouslySetInnerHTML={{ __html: product.description }}  variant="body2" color="textSecondary" component="p" />
             
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Add to Cart" onClick={() => onAddTocart(product.id, 1)}>
                <AddShoppingCart />
            </IconButton>    
        </CardActions>
    </Card>
  )
}

export default Product;