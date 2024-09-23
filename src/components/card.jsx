import React, { useEffect } from "react";

const StackedCards = ({ cardData }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const stackArea = document.querySelector(".stack-area");

    function rotateCards() {
      let angle = 0;
      cards.forEach((card) => {
        if (card.classList.contains("active")) {
          card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
        } else {
          card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
          angle -= 10;
        }
      });
    }

    rotateCards();

    const handleScroll = () => {
      let proportion =
        stackArea.getBoundingClientRect().top / window.innerHeight;
      if (proportion <= 0) {
        let n = cards.length;
        let index = Math.ceil((proportion * n) / 2);
        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
          if (i <= index) {
            cards[i].classList.add("active");
          } else {
            cards[i].classList.remove("active");
          }
        }
        rotateCards();
      }
    };

    const handleResize = () => {
      const windowWidth = window.innerWidth;
      const left = document.querySelector(".left");
      if (left) {
        left.remove();
        if (windowWidth < 800) {
          stackArea.insertAdjacentElement("beforebegin", left);
        } else {
          stackArea.insertAdjacentElement("afterbegin", left);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    center: {
      width: "100%",
      height: "fit-content",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    stackArea: {
      width: "100%",
      height: "300vh",
      position: "relative",
      display: "flex",
      justifyContent: "center",
    },
    left: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "sticky",
      top: 0,
      boxSizing: "border-box",
      flexDirection: "column",
      flexBasis: "50%",
    },
    right: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "sticky",
      top: 0,
      flexBasis: "50%",
    },
    card: {
      width: "350px",
      height: "350px",
      boxSizing: "border-box",
      padding: "35px",
      borderRadius: "6mm",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      position: "absolute",
      top: "50%",
      left: "50%",
      transition: "0.5s ease-in-out",
    },
    title: {
      width: "420px",
      fontSize: "84px",
      fontFamily: "Poppins, sans-serif",
      fontWeight: 700,
      lineHeight: "88px",
    },
    subTitle: {
      width: "420px",
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      marginTop: "30px",
    },
    button: {
      fontFamily: "Poppins, sans-serif",
      fontSize: "14px",
      padding: "15px 30px",
      backgroundColor: "black",
      color: "white",
      borderRadius: "8mm",
      border: "none",
      outline: "none",
      cursor: "pointer",
      marginTop: "20px",
    },
    topBottom: {
      width: "100%",
      height: "100vh",
      fontFamily: "Poppins, sans-serif",
      fontSize: "70px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <div style={styles.center}>
      <div style={styles.stackArea} className="stack-area">
        <div style={styles.left} className="left">
          {/* <div style={styles.title}>Our Features</div>
          <div style={styles.subTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
            qui quis, facere, cupiditate, doloremque natus ex perspiciatis
            ratione hic corrupti adipisci ea doloribus!
            <br />
            <button style={styles.button}>See More Details</button>
          </div> */}
        </div>
        <div style={styles.right} className="right">
          <div className="cards">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="card"
                style={{
                  ...styles.card,
                  backgroundColor: card.background,
                  zIndex: cardData.length - index,
                }}
              >
                <div className="sub">{card.sub}</div>
                <div className="content">{card.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StackedCards;
