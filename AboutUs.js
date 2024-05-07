import React, { useEffect } from 'react';
import './about.css'; // Import CSS file for styling

function AboutUs() {
    useEffect(() => {
        // Fetch and include nav-bar.html using JavaScript
        fetch('../NAV-BAR (header)/nav-bar.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('navbar-container').innerHTML = html;
            })
            .catch(error => {
                console.error('Error fetching nav-bar.html:', error);
            });
    }, []);

    return (
        <div>
            <div id="navbar-container"></div>
            <h1 className="about">About The City of Williamston</h1>
            <h2 className="history">History</h2>
            <p>{`The area that was later to become Williamston was originally the ‘summer home’ of a small group of the Tawas band of the Chippewa people. This land was used by them for planting what few crops they needed, holding an annual spring gathering of related bands of the tribe, and burying their dead. The most famous native American resident was Okemos, whose name survives as a postal address in nearby Meridian Township. Okemos means “Little Chief” in Chippewa and as in English, that phrase can mean either ‘physically small leader’, or ‘leader of subordinate authority’. It is unclear if this name was applied to Okemos because he was short, or because his authority was limited because he had few if any tribesmen below him, as both those descriptions are accurate! Unlike many native Americans, Okemos had a relatively well-documented life. For example, as an ally of the British in the War of 1812, he was so badly wounded during an attack on a U.S. Cavalry unit near Sandusky Ohio, that he was left for dead along with his cousin and all the other members of the attacking party. He and his cousin however did survive the attack, and lived on many years to recount the tale, However, Okemos bore a four to five-inch-long scar from a saber on the left side of his forehead the rest of his life as a reminder of that battle fought in his youth. Chief Okemos in full tribal gear, especially for the portrait, circa 1850.`}</p>

            <h2 className="welcome">Welcome to The City of Williamston!</h2>
            <img src="https://news.jrn.msu.edu/wp-content/uploads/2020/10/IMG_0669-1170x878.jpeg" alt="Williamston" width="500" height="300"/>
            <p>{`Nestled in the heart of Michigan, Williamston stands as a vibrant community blending small-town charm with modern amenities. Our city, with its rich history and promising future, offers residents and visitors alike a unique blend of culture, recreation, and opportunity.
            Established in 1945, Williamston has grown from its humble beginnings as a trading post into a bustling center of commerce and culture. Named after William Williams, a local military commander during the American Revolution, the city honors its heritage while embracing progress and innovation. At the heart of Williamston lies its people – a diverse tapestry of individuals, families, and businesses united by a shared sense of community. Our residents take pride in fostering a welcoming atmosphere, where neighbors know each other by name and lend a helping hand when needed. Williamston boasts a thriving economy supported by a diverse range of industries, including [mention prominent industries]. From locally-owned shops and restaurants to innovative startups and established enterprises, our business community thrives on collaboration and ingenuity. Beyond its economic vitality, Williamston is a haven for culture and recreation. Explore our historic downtown, where charming storefronts blend seamlessly with modern conveniences. Immerse yourself in the arts at our galleries and theaters, or embark on outdoor adventures in our parks and natural spaces. Education is a cornerstone of life in Williamston. Our city is home to top-rated schools, providing students with a world-class education and preparing them for success in an ever-changing world. Lifelong learning opportunities abound, ensuring that residents of all ages can continue to grow and thrive. As we look to the future, Williamston remains committed to preserving the qualities that make it special while embracing new opportunities for growth and development. Through collaboration and vision, we are shaping a city that is prosperous, inclusive, and sustainable for generations to come. Whether you're a long-time resident or a first-time visitor, we invite you to experience all that The City of Williamston has to offer. Join us as we continue to write the next chapter in our storied history – together. Welcome to Williamston – where community, opportunity, and quality of life intersect.`}</p>

            <iframe title="Williamston Video" id="video" src="https://www.youtube.com/embed/0sE8--pHSPs" width="500" height="300"></iframe>
        </div>
    );
}

export default AboutUs;

