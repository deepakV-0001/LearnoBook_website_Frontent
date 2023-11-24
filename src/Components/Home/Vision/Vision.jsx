import '../Vision/Vision.css'
import Visi from './Frame.png'
const Vision = () => {
    return (
        <div className="vision-main-container">
            <div className="vision-img">
                <img src={Visi} alt='' />
                <p>Productivity Comes with LearnoBook</p>
            </div>
            <div className="vision-text-content">
                <h1>Our Vision</h1>
                <p className='par-1'>LearnoBook originally started because our team thought carrying books around was a hassle. Textbooks are big and heavy, and you have to switch them for each class. Losing a book or a notebook means losing all the data that you’ve organized on them.
                </p>
                <p>The purpose and dream of LearnoBook is to lighten the bags of students around the world by replacing thick and heavy paper texts with light, digital text-books. Technology has been improved extremely, but the way of studying has not caught up. With LearnoBook, studying becomes enjoyable and easier.</p>
            </div>
        </div>

    )
}
export default Vision;