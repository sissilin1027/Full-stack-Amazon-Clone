import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id={23465653}
            title="Star Wars The Child Plush Toy, 11-inch Small Yoda-like Soft Figure from The Mandalorian"
            price={24.99}
            rating={10}
            image="https://images-na.ssl-images-amazon.com/images/I/81o5JaJv0-L._AC_SL1500_.jpg"
          />
          <Product
            id={22346899}
            title=" All New, Made for Amazon, featuring The Mandalorian: The Child, Stand for Amazon Echo Dot (3rd Gen) "
            price={24.95}
            image="https://images-na.ssl-images-amazon.com/images/I/51ffTH3F8WL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id={12563453}
            title="KRK RP5 Rokit G4 Studio Monitor, Black (RP5G4-NA)"
            price={179.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91Zahfb0NFL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={56834535}
            title="Introducing Amazon Halo - Health & wellness band and membership - Winter + Silver - Medium
            "
            price={64.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61-LCUkfn8L._AC_SL1002_.jpg"
          />

          <Product
            id={79809375}
            title="All-new Blink Outdoor – wireless, weather-resistant HD security camera with motion detection -1 camera kit"
            price={99.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51KWwlVd1PL._SL1000_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id={990348035}
            title="Pioneer CDJ-2000NXS2 Pro-DJ Multi-Player - Black Bundle with DJM-900NXS2 Mixer and Austin Bazaar Polishing Cloth "
            price={6597.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81wilpF5ueL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
