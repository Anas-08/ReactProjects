const Hero = () =>{
    return(
        <>
            <main className="hero">
                <div className="text-content ">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                    <div className="btn-content">
                        <button className="btn_one">Shop Now</button>
                        <button className="btn_two">Category</button>
                    </div>

                    <div className="shopping">
                        <p>Also Available On</p>

                        <div className="brand-icon">
                            <img src="/images/amazon.png" alt="amazon" />
                            <img src="/images/flipkart.png" alt="flipkart" />

                        </div>

                    </div>
                </div>

                <div className="img-content ">
                   <img className="img_shoe" src="/images/shoe_image.png" alt="Shoe Image" />
                    
                </div>

            </main>
        </>
    )
}

export default Hero