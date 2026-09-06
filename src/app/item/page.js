export default function Item(props){
    return(
        <div className="col-sm-4">
            <div className="card h-100">
                <img src={props.image} alt='' className="img-fluid"/>
                <div className="bg-white p-3">
                    <div className="new4" style={{fontFamily: 'Blinker, sans-serif'}}>By {props.author}</div>
                    <h2 className="mt-3 fs-4" style={{fontFamily: 'Cinzel, serif'}}>{props.title}</h2>
                    <div className="new3 mt-3" style={{fontFamily: 'Josefin Slab, serif'}}>{props.description}</div>
                    <div className="new2 mt-3" style={{fontFamily: 'Josefin Slab, serif'}}>{props.content}</div>
                    <div className="new1 mt-3" style={{fontFamily: 'Blinker, sans-serif'}}>{props.publishedAt}</div>
                </div>
            </div>
        </div>
    )
}