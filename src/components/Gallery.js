import {Salons} from './salons';
import content from '../content';
import { SearchBar } from './searchbar';
export function Gallery(props){
 
    return(<>
    
    <div className='bg-image'>
        <div className="gallery-text"> <h1> Gallery </h1> </div>
      
      <div><SearchBar/>
      </div>
      {/*salon listing starts here*/}
      <div className='salon-container'>
        {content.map(contents => (
         <Salons key = {contents.id} image = {contents.image} name = {contents.name} description = {contents.description}>
         </Salons>

        ))} 
        
        </div> {/*salon listing starts here*/}
        <div className='salon-reg'><h4 className='salon-reg-text'>Want to become the best salon in your area?</h4> <button className='btn-foot'>Register Now!!</button></div>
        <div className='salon-appointment'><h4 className='salon-reg-text'>Book your appointment today in one of the best salons </h4> <button className='btn-foot'> Book An Appointment</button></div>
        </div></> 
    )
}