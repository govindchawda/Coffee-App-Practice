import { Detail } from "./Detail"

export const Port = ()=>{
    return(
        <>
            <section className="port">
                <div className="container">
                    <div className="portdata">
                        <h2>Services</h2>
                        <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
                        <div className="portflex">
                            <div className="pflex1">
                            <div style={{width:"100%",textAlign:"center"}}>
                            <img src="./tea1.png" alt="" />
                            </div>
                            <h3>Original Coffee</h3>
                            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                            </div>
                            <div className="pflex1">
                            <div style={{width:"100%",textAlign:"center"}}>
                            <img src="./tea2.png" alt="" />
                            </div>
                            <h3>Original Coffee</h3>
                            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                            </div>
                            <div className="pflex1">
                            <div style={{width:"100%",textAlign:"center"}}>
                            <img src="./tea3.png" alt="" />
                            </div>
                            <h3>Original Coffee</h3>
                            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         <Detail/>
        </>
    )
}