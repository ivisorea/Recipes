import React  from 'react';


const AboutUs = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "50px"}}>
           <div>
                <h1>About Us</h1>
            </div>
            <div style={{textAlign: "center"}}>
            <p>
                    <br /> 
                    We are a team of developers passionate about food.
                    <br />
                    We wanted to start applying our knowledge learned at <b>WBS Coding School</b> by making this Recipe Blog.
                    <br />
                    Do you want to collaborate with us?
                    <br />
                    Send us a quick 
                    <a href='/pages/contactus' alt="contact"> email </a>
                    for more info!
                </p>
                <img src="/team.jpg" alt="team"/>
            </div>
        </div>
    );
};

export default AboutUs;
