export function Salons(props){
    return( <>
      
        <div className = "salon-list"> 
        <div key = {props.id} className="salon-card">
            <img src = {props.image} alt="salon img" className="salon-image"></img>
        
        {/*<div className="salon-content">*/}
            <h3 className="salon-name"> {props.name}</h3>
            <p className="salon-description"> {props.description}</p>
        {/*</div>*/}
        </div>
        </div>
        </>
    )
}
