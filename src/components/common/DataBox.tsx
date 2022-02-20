import React from 'react';

export interface DataItem {
  id: number;
  name: string;
  address: string;
  city: string;
  postcode: string;
  country: string;
  description: string;
  heroimage: string;
  createdby: string;
  price: string;
  rank: number;
  coordinations: string;
  createdat: string;
  album?: string[];
  new?: boolean;
}

interface DataBoxContent {
  content: DataItem;
  onBookClick: (id: number) => void;
}

const DataBox: React.FC<DataBoxContent> = ({ content, onBookClick }) => {
  return (
    <article className={`data-box${content.new ? ' new-item' : ''}`} tabIndex={0}>
      <div
        className="db-banner"
        style={{
          backgroundImage: `url(${content.heroimage})`
        }}
      >
        <span className="db-price">{content.price} NOK</span>
      </div>
      <div className="db-title">
        <div className="db-header">{content.name}</div>
        <div className="db-rank">{' ⭐️ '.repeat(content.rank)}</div>
        <div className="db-address">{`${content.address}, ${content.postcode}, ${content.city}`}</div>
      </div>
      <div
        className="db-book"
        tabIndex={0}
        onClick={(e) => {
          onBookClick(content.id);
        }}
      >
        Book
      </div>
      <div className="db-description ">{content.description}</div>
    </article>
  );
};

export default DataBox;
