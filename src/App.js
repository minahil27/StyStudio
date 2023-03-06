import {Salons} from './components/salons';
import {Gallery} from './components/gallery';
import content from './content';
function App() {
 
  return (<>
        
      <Gallery></Gallery>
      <div className='listing'>
        {content.map(contents => (
         <Salons key = {contents.id} image = {contents.image} name = {contents.name} description = {contents.desc}>
         </Salons>

        ))} 
      
        </div>
        
    </>
  );
  }
  
  
  
  export default App;
  