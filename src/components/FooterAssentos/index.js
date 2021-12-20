export default function FooterAssentos({assento}){

    return(
        <>
            <div className="footer">
                <div className="footer-logo" >
                    <img src={assento.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p className="texto-footer">{assento.movie.title}</p>
                    <p className="texto-footer">{assento.day.weekday} - {assento.name}</p>
                </div>
            </div>
        </>
    )
}