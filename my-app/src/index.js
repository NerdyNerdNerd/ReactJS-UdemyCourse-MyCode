import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const tourData=[
    {
        "id": 1,
        "title": "Sunny Meadow",
        "desc": "A vibrant meadow under the bright summer sun.",
        "image": "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 2,
        "title": "Mountain Retreat",
        "desc": "A secluded cabin with a breathtaking mountain view.",
        "image": "https://images.unsplash.com/photo-1708597670612-70bd08ab2850?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
    {
        "id": 3,
        "title": "City Skyline at Night",
        "desc": "The city lights illuminate the skyline against the night sky.",
        "image": "https://images.unsplash.com/photo-1514939775307-d44e7f10cabd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        "id": 4,
        "title": "Autumn Forest",
        "desc": "A forest path covered with fallen autumn leaves.",
        "image": "https://unsplash.com/photos/an-aerial-view-of-a-forest-with-lots-of-trees-AzA5XFoERzg",
	},
    {
        "id": 5,
        "title": "Spring Blossoms",
        "desc": "Cherry blossoms in full bloom marking the arrival of spring.",
        "image": "https://unsplash.com/photos/focus-photography-of-pink-flowers-qeeHCFEPXp0",
    },
    {
        "id": 6,
        "title": "Winter Wonderland",
        "desc": "A serene snow-covered landscape in the heart of winter.",
        "image": "https://unsplash.com/photos/a-view-of-a-snow-covered-mountain-and-a-park-bench-iXlEieldqDs",
    },
    {
        "id": 7,
        "title": "Tropical Beach",
        "desc": "Crystal clear waters and white sand beaches under the tropical sun.",
        "image": "https://unsplash.com/photos/green-palm-tree-on-white-sand-beach-during-daytime-jmkMl20jNS0",
    },
    {
        "id": 8,
        "title": "Desert Dunes",
        "desc": "The golden sands of vast desert dunes at sunrise.",
        "image": "https://unsplash.com/photos/dessert-field-pVr6wvUneMk",
    },
    {
        "id": 9,
        "title": "Ancient Ruins",
        "desc": "The mysterious ruins of an ancient civilization, lost in time.",
        "image": "https://unsplash.com/photos/brown-concrete-ruins-during-daytime-GSCtoEEqntQ",
    },
    {
        "id": 10,
        "title": "Underwater Coral Reef",
        "desc": "A colorful coral reef, bustling with marine life.",
        "image": "https://unsplash.com/photos/corals-under-water-XYMm4LRKZLE",
    },
];

function App() {
    // const name="Joshua";
    return (
        <div className="wrapper">
        <Header />
        <Main />
        <Footer/>
         </div>);
};

const Header = ()=>{
    //const style={color: 'limegreen', fontSize: '50px', textTransform: "uppercase"};
    //uses style object
   // return <h1 style={style}>Tour Route</h1>
    //uses inline styling
    //return <h1 style={{ color:'limegreen', fontSize:'50px'}}>Tour Route</h1>
    return <header className="header">Tour Route</header>
};
const Main = ()=>{
    return (
        <main className="main">
           <div className="renderList">
            {
                // {Tourdata.map((tour)=><Tour name={tour.title} link={tour.image}/>)}
                tourData.map((tour) => (
                    <Tour tourObj={tour} key={tour.id} />
                ))
            }
           </div>
            {/* <Tour name='City Skyline at Night' location='The city lights illuminate the skyline against the night sky.' 
            link='https://images.unsplash.com/photo-1446062061624-594b6e3403d7?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
            price={125}/>
            <Tour name='Mountain Retreat' location='A secluded cabin with a breathtaking mountain view.' 
            link='https://images.unsplash.com/photo-1708597670612-70bd08ab2850?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price={150}/> */}
        </main>
    );
};
const Tour =(props)=>{
    console.log(props);
    return (
        <div className="tourWrapper">
            <img src={props.tourObj.image} alt={props.tourObj.title}/>
             <div className="tourBottom">
             <h2>{props.tourObj.title}</h2>
             <p>{props.tourObj.desc}</p>
        </div>
        </div>
    );
};

const Footer = ()=>{
    const hour = new Date().getHours();
    const openHours = 12;
    const closedHours = 22;
    const isOpen = hour>=openHours && hour <= closedHours;
    console.log(isOpen);
    // if (hour >= openHours && hour <=closedHours) {
    //     alert("We are currently open");
    // } else {
    //     alert("Sorry we are closed");
    // }

    return (<footer className="footer">{new Date().toLocaleTimeString()} We are the tour best company</footer>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

<App />


);