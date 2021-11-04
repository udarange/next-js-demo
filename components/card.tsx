import React, { useState } from "react";
import { CardData } from "../pages";
import styled from "styled-components";
import axios from "axios";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  padding-bottom: 20px;
  
  .likes {
    color: blue;
    margin: 10px 15px;
    font-size: 13px;
    font-weight: 500;
  }
  
  .fa-heart {
    padding-right: 5px;
    font-size: 15px;
  }
  
  .description {
    color: gray;
    margin: 0px 15px;
    font-size: 13px;
  }
  
  .tagline {
    max-width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 5px 15px;
    color: blue;
    font-size: 13px;
  }
  
  .comments {
    background: transparent;
    border: none;
    text-align: left;
    margin: 5px 10px;
    width: fit-content;
    color: lightgray;
  }
`;

const CardHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px 6px;
  
  img {
    height: 40px;
    width: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  p {
    font-size: 13px;
    font-weight: bold;
    color: blue;
    text-align: left;
    padding-left: 15px;
  }
`;

const CardBodyContainer = styled.div`
  width: 100%;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  position: relative;
  
  img {
    height: 280px;
    object-fit: cover;
  }

  .fa-heart {
    color: orange;
    cursor: pointer;
  }

  .fa-heart-o {
    color: white;
    cursor: pointer;
  }
`;

const CoverImageOverlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 70%);
  
  .title {
    font-size: 15px;
    color: white;
    margin: 0px;
  }
  
  .price {
    font-size: 15px;
    font-weight: bold;
    color: white;
    margin: 0px;
  }
`;

export default function Card({ cardData }: { cardData: CardData }) {
  const [currentCardData, setCurrentCardData] = useState(cardData)

  function toggleFavourite() {
    const data = { isFavourite: !currentCardData.item.isFavourite };

    axios.post(`http://localhost:3000/api/items/${currentCardData._id}`, data)
    .then(response => {
      // @ts-ignore
      setCurrentCardData(response.data)
    })
    .catch(error => {
      console.log(error);
    });
  }

  return <CardContainer>
    <CardHeaderContainer>
      <img src={currentCardData.user.pic} alt={"profile-pic"} />
      <p>{currentCardData.user.name}</p>
    </CardHeaderContainer>

    <CardBodyContainer>
      <img src={currentCardData.item.image} alt={"cover-image"} />
      <CoverImageOverlay>
        <div>
          <p className="title">{currentCardData.item.title}</p>
          <p className="price">{`AED ${currentCardData.item.price}`}</p>
        </div>
        <i className={currentCardData.item.isFavourite ? "fa fa-heart" : "fa fa-heart-o"}
           aria-hidden="true"
           onClick={() => toggleFavourite()}
        />
      </CoverImageOverlay>
    </CardBodyContainer>

    <p className="likes">
      <i className="fa fa-heart" aria-hidden="true" />
      {`${currentCardData.item.likes} likes`}
    </p>
    <p className="description">{currentCardData.item.description}</p>
    <p className="tagline">
      {currentCardData.item.tags.join(" ")}
    </p>
    <button type={"button"} className="comments">
      {`View ${currentCardData.item.comments} comments`}
    </button>

  </CardContainer>
}
