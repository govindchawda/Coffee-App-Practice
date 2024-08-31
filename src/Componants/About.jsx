import { Servics } from "./Servics"

export const About = ()=>{
    return(
        <>
           <section id="about-us">
      <div class="container">
            <div class="about-us-box">
                <div class="about-us-img">
                    <img src='./about-img.png' />
                </div>
                <div class="about-us-data">
                    <h1>Lorem ipsum dolor <span>sit amet.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo quos, obcaecati quis, consequatur similique quibusdam veniam suscipit optio vel doloremque nulla?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quo quos, obcaecati quis, consequatur similique quibusdam veniam suscipit optio vel doloremque nulla?</p>
                    <a id="banner-btn" href="">Read more</a>
                </div>
          </div>
      </div>
   </section>
            <Servics/>
        </>
    )
}