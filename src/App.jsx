import './App.css'
import { Header } from './Components/Header';
import { NewForm } from './Components/NewForm';
import { PuppiesList } from './Components/PuppiesList';
import { Search } from './Components/Search';
import { ShortList } from './Components/Shortlist';
import {dogs} from './data/dogs.ts'


function App() {

  return (
    <>    
    <PageWrapper>
       <Container> 
         <Header />
          <Main />
      </Container>
    </PageWrapper>  
    </>
  )
}

function Main(){
  return(
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
          <Search />
          <ShortList />
      </div>
      
      <PuppiesList dogs={dogs} />
      <NewForm />

    </main>
  );
}

function PageWrapper( {children}) {
  return (
         <div className="min-h-dvh bg-gradient-to-b from-cyan-200 to-white to-[60vh]"> 
          {children}
         </div>
  );
}

function Container( { children } ) {
  return (
    <div className="mx-auto max-w-5xl p-4 md:p-8"> 
      { children }
    </div>
  );
}


export default App
