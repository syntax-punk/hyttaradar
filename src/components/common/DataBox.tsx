import React from 'react';

export interface DataItem {
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
    <article className="data-box" onClick={(e) => { onBoxClick(content.id) }}>
      <div className="db-banner">
        <span className="db-image">{content.imageUrl}</span>
        <span className="db-price">{content.price}</span>
      </div>
      <div className="db-title">
        <div className="db-header">{content.name}</div>
        <div className="db-rank">{content.rank}</div>
        <div className="db-address">{content.address}</div>
      </div>
      <div className="db-book">Book Me</div>
      <div className="db-description">{content.description}</div>
    </article>
  )
}

export default DataBox;