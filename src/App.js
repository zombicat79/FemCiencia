import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import FooterNavbar from './components/footer_navbar/FooterNavbar';
import Main from './pages/main/Main';

function App() {
  return (
    <>
      <header>
        <HeaderNavbar />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <FooterNavbar />
      </footer>
    </>
  );
}

export default App;
