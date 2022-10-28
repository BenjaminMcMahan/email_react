

const Advertisement = (props) => {
    console.log(props)

    const style = {
        color: 'gray',
        opacity: .5
    };

    return (
        <div className='border border-2 p-3 d-flex'>
            <div className="row">
                <div className="col">
                    <img src={props.image} alt='' />
                </div>
            </div>
            <div className="row ms-4">
                <div className="col col-sm-12">
                    <h2>{props.business}</h2>
                    <h3 style={style}>{props.service}</h3>
                </div>
                <div className="col">
                    <p>{props.description}</p>
                    <span className="thenPrice">${props.beforePrice}</span>
                    <span className="nowPrice text-success p-2">${props.afterPrice}</span>
                    <button className="bg-success btn-lg text-white ms-5">View Deal</button>
                </div>
            </div>
        </div>
    )
};

export default Advertisement;