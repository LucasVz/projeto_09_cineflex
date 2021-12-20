export default function Footer({horarios}){

    return(
        <>
            <div className="footer">
                <div className="footer-logo" >
                    <img src={horarios.posterURL} alt="" />
                </div>
                    <p className="texto-footer">{horarios.title}</p>
            </div>
        </>
    )
}