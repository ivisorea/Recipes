import React  from 'react';


const AboutUs = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: "50px"}}>
           <div>
                <h1>About Us</h1>
            </div>
            <div style={{textAlign: "center"}}>
                <p>
                    I am a Food Blog is a recipe an travel blog written by husband and wife team Mike and Steph. <br /> 
                    In its 7 years of existence it has covered such diverse subjects as mini beef wellingtons, driving through iceland’s ring road, and making pho in a pressure cooker.<br />
                    Currently eating and cooking in California :)Interested in working with us?<br />
                    Occasionally we create sponsored posts for brands that are a good fit for I am a Food Blog.<br />
                    We’re also available for recipe development and photography.<br />
                    Send us a quick <a href="..." to="/pages/contactus" alt="contact"> email </a>for more info!
                </p>
                <img src="/team.jpg" alt="team"/>
            </div>
        </div>
    );
};

export default AboutUs;
