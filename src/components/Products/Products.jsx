import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyle from './styles';


const Products = ({products, onAddTocart}) => {
    const classes = useStyle();
 
    return(
     
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} md={4} lg={3}>
                            <Product product={product} onAddTocart={onAddTocart} />
                        </Grid>
                    ))}
            </Grid>
        </main>
    );
    
}

export default Products;