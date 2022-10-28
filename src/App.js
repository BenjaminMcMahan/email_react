import "./App.css";
import Header from "./components/Header";
import Advertisement from "./components/Advertisement";
import Coupon from "./components/Coupon";
import belt from "./images/belt.jpg";
import goatmilk from "./images/goatmilk.jpg";
import goldenface from "./images/goldenface.jpg";
import iphone from "./images/iphone.jpg";
import valvoline from "./images/valvoline.jpg";

function App() {
    return (
        <div className="container">
            <Header/>
            <Advertisement
                image={valvoline}
                business="Valvoline"
                service="Oil Change"
                description="Stay-in-your-car oil change, with safety and maintenance checks, in about 15 mins - by certified techs without touching keys/oil reset light"
                beforePrice="75.99"
                afterPrice="56.99"
            />
            <Coupon/>
            <Advertisement
                image={belt}
                business="Men's Belt"
                service="Barbados Leather Mens..."
                description="Color: Black and BrownIncluded Items: 2 beltsMaterial: Genuine Leather"
                beforePrice="14"
                afterPrice="2.49"
            />
            <Advertisement
                image={goatmilk}
                business="Dionis Vanilla Bean Goat Milk..."
                service="Skin Care"
                description="Product Size: 48 oz, 8.5 ozSkin Type: All Skin Types"
                beforePrice="20"
                afterPrice="14"
            />
            <Advertisement
                image={goldenface}
                business="Golden Face"
                service="Botox Injections"
                description="Botox injections remove the signs of aging such as the fine lines and wrinkles resulting in a revitalized, younger skin appearance"
                beforePrice="220"
                afterPrice="159"
            />
            <Advertisement
                image={iphone}
                business="Apple iPhone 11/XR Fully Unlo..."
                service="Electronics Condition: Refurbished (B Grade)"
                description="Carrier: GSM & CDMA UnlockedElectronics Condition: Scratch and Dent"
                beforePrice="529.95"
                afterPrice="269.98"
            />
        </div>
    );
}

export default App;
