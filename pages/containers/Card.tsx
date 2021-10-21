import React from "react";

export default function Card() {
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
        src={"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
        alt={"user-name-logo"}
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
        tracymcgrady
      </p>
    </div>

    <div style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      <img
        src={"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1617135051000"}
        alt={"cover"}
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
          }}>Leaf iPhone Case Hard Plastic</p>
          <p style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "white",
            margin: "0"
          }}>AED 230</p>
        </div>
        <i style={{ color: "white", fontSize: "24px" }} className="fa fa-heart-o" aria-hidden="true" />
      </div>
    </div>

    <p style={{
      color: "blue",
      margin: "10px 15px",
      fontSize: "13px",
      fontWeight: 500
    }}>
      <i style={{ paddingRight: 5, fontSize: 15 }} className="fa fa-heart" aria-hidden="true" />
      32 likes
    </p>
    <p style={{
      color: "gray",
      margin: "0px 15px",
      fontSize: "13px",
      // fontWeight: 400
    }}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.`}
    </p>
    <p style={{
      maxWidth: "100%",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      margin: "5px 15px",
      color: "blue",
      fontSize: "13px"
    }}>{`#phones #apple #oneplus #smartphones #photography #cellphone #mobilephotography`}</p>
    <button type={"button"} style={{
      background: "transparent",
      border: "none",
      textAlign: "left",
      margin: "5px 10px",
      width: "fit-content",
      color: "lightgray"
    }}>
      View 12 comments
    </button>

  </div>
}
