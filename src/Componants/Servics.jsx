import { Detail } from "./Detail"
import { Port } from "./Port"

export const Servics = ()=>{
    return(
        <>
           <div className="container">
                <div className="ser">
                    <div className="ser1">
                        <img src="./1.png" alt="" />
                        <div className="i"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./2.png" alt="" />
                        <div className="i"><i class="fa fa-gratipay" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./3.png" alt="" />
                        <div className="i"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="ser">
                    <div className="ser1">
                        <img src="./4.png" alt="" />
                        <div className="i"><i class="fa fa-gratipay" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./5.png" alt="" />
                        <div className="i"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./6.png" alt="" />
                        <div className="i"><i class="fa fa-gratipay" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="ser">
                    <div className="ser1">
                        <img src="./7.png" alt="" />
                        <div className="i"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./8.png" alt="" />
                        <div className="i"><i class="fa fa-gratipay" aria-hidden="true"></i></div>
                    </div>
                    <div className="ser1">
                        <img src="./9.png" alt="" />
                        <div className="i"><i class="fa fa-heart" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div style={{width:"100%" , textAlign: "center", marginTop: "20px"}}><a className="sera" href="">Read More</a></div>
            </div> 
            <Port/>
        </>
    )
}