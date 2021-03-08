import React from 'react';

interface DataItem {
  id: number;
  name: string;
  address: string;
  description: string;
  imageUrl: string;
  googleMapsUrl: string;
  rank: number;
  price: string;
}

interface DataBoxContent {
  content: DataItem;
  onBoxClick: (id: number) => void;
}

const DataBox: React.FC<DataBoxContent> = ({ content, onBoxClick }) => {
  return (
    <article onClick={(e) => { onBoxClick(content.id) }}>
      <div className="data-box-header">{content.name}</div>
      <div className="data-box-image">{content.imageUrl}</div>
      <div className="data-box-address">{content.address}</div>
      <div className="data-box-description">{content.description}</div>
      <div className="data-box-rank">{content.rank}</div>
      <div className="data-box-price">{content.price}</div>
    </article>
  )
}

export default DataBox;