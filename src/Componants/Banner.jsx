import { About } from "./About"

export const Banner = ()=>{
    return(
        <>
            <div class="banner-mainbox">
      <div id="banner">
           <div class="container">
            <div class="banner-data">
               <h1>Welcome To<br />
                 React javascript</h1>
                <p>See how your users experience your website in realtime or view<br />
                    trends to see any changes in performance over time.</p>
                <a id="banner-btn" href="">Read More</a>
            </div>
        </div>
      </div>
   </div>
            <About/>
        </>
    )
}