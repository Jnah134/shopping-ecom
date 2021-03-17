import React from 'react';
import Clothes from './Clothes';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const ClothesList = () => {
  const { loading, clothes } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <h3>Clothes</h3>
      <div>
        {clothes.map((item) => {
          return <Clothes key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default ClothesList;
