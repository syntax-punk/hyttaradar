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
  onBookClick: (id: number) => void;
}

const DataBox: React.FC<DataBoxContent> = ({ content, onBookClick }) => {
  return (
    <article className="data-box" tabIndex={0}>
      <div className="db-banner" style={{
          backgroundImage: `url(${content.imageUrl})`
        }}>
        <span className="db-price">{content.price}</span>
      </div>
      <div className="db-title">
        <div className="db-header">{content.name}</div>
        <div className="db-rank">{"⭐️".repeat(content.rank)}</div>
        <div className="db-address">{content.address}</div>
      </div>
      <div className="db-book" tabIndex={0} onClick={(e) => { onBookClick(content.id) }}>Book</div>
      <div className="db-description ">{content.description}</div>
    </article>
  )
}

export default DataBox;