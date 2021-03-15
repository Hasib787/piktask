import { Button, CardContent, CardMedia, Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import downloadIcon from '../../../../assets/download.svg';
import { ButtonWrapper, CardFooter, CardWrapper, LikeIcon, useStyles } from './Product.styles';

const Product = ({product}) => {
    const classes = useStyles();
    const [favourite, setFavourite] = useState(false);
    const likeRef = useRef()

    const handleClick = () => {
        setFavourite(true);
        if(favourite) {
            likeRef.current.classList.add("disabled");
            setFavourite(false);
        } else if(likeRef.current.classList.value.includes("disabled")) {
            likeRef.current.classList.remove("disabled");
            setFavourite(true);
        }
    };

    return (
        <CardWrapper className={classes.container}>
            <LikeIcon ref={likeRef} onClick={() => handleClick()} className="favourite">
                <FavoriteBorderIcon />
            </LikeIcon>
            
            <img className={classes.image} src={product.image} alt={product.name} />            

            <div>
                <CardContent>
                    <Link className={classes.titleLink} to={`/${product.category.toLowerCase()}/${product._id}`}>
                        <Typography variant="h2" className={classes.title}>{product.name}</Typography>
                    </Link>
                    <Typography variant="body1" className={classes.itemStatus}>
                        Download: <img className={classes.downloadIcon} src={downloadIcon} alt="Total Download"/> {product.total_downloads}
                        <FavoriteBorderIcon className={classes.heartIcon} /> {product.likes}
                    </Typography>
                </CardContent>

                <CardContent className={classes.cardFooter}>
                    <CardFooter>
                        <CardMedia
                            className={classes.authorImage}
                            image={product.author.profile_image}
                            title={product.author.name}
                        />
                        <Typography paragraph className={classes.profileName}>{product.author.profile_name}</Typography>
                    </CardFooter>
                    
                    <ButtonWrapper>
                        <Button className={classes.categoryButton}><ArrowDownwardIcon className={classes.buttonIcon} />Vector</Button>
                        <Button className={classes.productStatusButton}>Free</Button>
                    </ButtonWrapper>
                </CardContent>
            </div>
        </CardWrapper>
    )
}

export default Product
