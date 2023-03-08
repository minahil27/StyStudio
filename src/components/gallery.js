import {Salons} from './salons';
import content from '../content';
import { SearchBar } from './searchbar';
export function Gallery(props){
 
    return( <>
      
      <div className="gallery-text"> <h1 > Gallery </h1> </div>
      <SearchBar/>
        {/*salon listing starts here*/}
        <div className='listing'>
        {content.map(contents => (
         <Salons key = {contents.id} image = {contents.image} name = {contents.name} description = {contents.description}>
         </Salons>

        ))} 
        </div> {/*salon listing starts here*/}
        <div className='salon-reg'><h4 className='salon-reg-text'>Want to become the best salon in your area?</h4> <button className='btn'>Register Now!!</button></div>
        <div className='salon-appointment'><h4 className='salon-reg-text'>Book your appointment today in one of the best salons </h4> <button className='btn'> Book An Appointment</button></div>
        </>
    )
}