import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [clothes, setClothes] = React.useState(null);

  return <h3>{id}</h3>;
};

export default SingleProduct;
