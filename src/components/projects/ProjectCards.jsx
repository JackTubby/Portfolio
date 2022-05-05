import '../../Style Sheets/projects.css'
import purity from '../../images/purity.png'

export default function ProjectCards(props) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <div class="card">
                        <img src={purity} class="card-img-top" alt="..."></img>
                        <div class="card-body text-center">
                            <h5 class="card-title">Purity</h5>
                            <p class="card-text">This is sample text</p>
                            <a href="#" class="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}