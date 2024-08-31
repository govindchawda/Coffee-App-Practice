import { Footer } from "./Footer"

export const Detail = ()=>{
    return(
        <>
            <div className="">
                <div className="detail">
                    <div className="detail-form">
                        <div>
                        Name: <br />
                        <input type="text" /> <br />
                        </div>
                        <div>
                        email: <br />
                        <input type="text" /> <br />
                        </div>
                       <div>
                       password: <br />
                        <input type="text" /> <br />
                       </div>
                       <div>
                       details: <br />
                      <input type="text" />
                       </div>
                       <div>
                        <button type="submit">Submit</button>
                       </div>
                    </div>
                    <div className="detail-loc">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEfboNEKR9F8LMV1U71eV7pSeOGRVSldcog&s" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}