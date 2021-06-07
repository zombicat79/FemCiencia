import { Switch, Route } from 'react-router-dom';

import HeaderNavbar from './components/header_navbar/HeaderNavbar';
import FooterNavbar from './components/footer_navbar/FooterNavbar';
import Main from './pages/main/Main';
import Info from './pages/info/Info';
import Contact from './pages/contact/Contact';
import ArticleView from './pages/article_view/ArticleView';

function App(props) {
  return (
    <>
      <header>
        <HeaderNavbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/article/:id" render={(props) => <ArticleView {...props} />} />
        </Switch>
      </main>
      <footer>
        <FooterNavbar />
      </footer>
    </>
  );
}

export default App;
