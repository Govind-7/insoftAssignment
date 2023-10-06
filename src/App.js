import {Route, Switch} from 'react-router-dom'
import TutorSolution from './components/TutorSolution'
import Header from './components/Header'
import ExamSolution from './components/ExamSolution'
import Onlinestudy from './components/Onlinestudy'
import Home from './components/Home'
import ContactUs from './components/Contact'
import NotFound from './components/NotFound'
import Blogs from './components/Blogs'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/ExamSolution" component={ExamSolution} />
      <Route exact path="/Blogs" component={Blogs} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/TutorSolution" component={TutorSolution} />
      <Route exact path="/Onlinestudy" component={Onlinestudy} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
