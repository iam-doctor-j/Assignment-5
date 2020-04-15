import React from 'react';

export default function Product(props) {
    return(
        <tr>
            <td>
                { props.item.id }
            </td>
            <td>
                { props.item.productName }
            </td>
            <td>
                { props.item.Quantity }
            </td>
            <td>
                Rs. { props.item.Price }
            </td>
        </tr>
    );
}