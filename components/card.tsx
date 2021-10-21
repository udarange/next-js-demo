import React from "react";
import { CardData } from "../pages";

export default function Card({ cardData }: { cardData: CardData }) {

  return <div style={{
    display: "flex",
    flexDirection: "column",
    borderBottom: "1px solid lightgray",
    paddingBottom: "20px"
  }}>
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "10px 20px 6px"
    }}>
      <img
        src={cardData.user.pic}
        alt={"profile-pic"}
        style={{
          height: "40px",
          width: "40px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <p style={{
        fontSize: "13px",
        fontWeight: "bold",
        color: "blue",
        textAlign: "left",
        paddingLeft: "15px"
      }}>
        {cardData.user.name}
      </p>
    </div>

    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      <img
        src={cardData.item.image}
        alt={"cover-image"}
        style={{
          height: "280px",
          objectFit: "cover"
        }}
      />
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 15px",
        position: "absolute",
        bottom: "0px",
        width: "100%",
        background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 70%)"
      }}>
        <div>
          <p style={{
            fontSize: "15px",
            color: "white",
            margin: "0"
          }}>{cardData.item.title}</p>
          <p style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "white",
            margin: "0"
          }}>{`AED ${cardData.item.price}`}</p>
        </div>
        <i style={{ color: cardData.item.isFavourite ? "orange" : "white", fontSize: "24px" }} className="fa fa-heart-o"
           aria-hidden="true" />
      </div>
    </div>

    <p style={{
      color: "blue",
      margin: "10px 15px",
      fontSize: "13px",
      fontWeight: 500
    }}>
      <i style={{ paddingRight: 5, fontSize: 15 }} className="fa fa-heart" aria-hidden="true" />
      {`${cardData.item.likes} likes`}
    </p>
    <p style={{
      color: "gray",
      margin: "0px 15px",
      fontSize: "13px",
    }}>
      {cardData.item.description}
    </p>
    <p style={{
      maxWidth: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      margin: "5px 15px",
      color: "blue",
      fontSize: "13px"
    }}>
      {cardData.item.tags.join(" ")}
    </p>
    <button
      type={"button"}
      style={{
        background: "transparent",
        border: "none",
        textAlign: "left",
        margin: "5px 10px",
        width: "fit-content",
        color: "lightgray"
      }}
    >
      {`View ${cardData.item.comments} comments`}
    </button>

  </div>
}
