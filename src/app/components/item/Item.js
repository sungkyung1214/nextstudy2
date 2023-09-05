import { createFactory } from 'react';
import './item.css'
export default function Item({item}) {
    const{
        name,
        image_link,
        price,
        description,
        updated_at,
        category,
        product_type,
        product_link

    }=item;
    return(
        <>
            <div className='wrap'>
                <div className='img_item'>
                    <img src={image_link} alt='name' />
                </div>
                <div className='info_item'>
                    <strong className='tit_item'>{name}</strong>
                    <strong className='num_price'>${price}</strong>
                    <span className='txt_info'>
                        {creategory ? '${category}/': ""} {product_type}
                    </span>
                    <button variant='contained' color='suceess'></button>
                </div>
            </div>
        </>
    );
}