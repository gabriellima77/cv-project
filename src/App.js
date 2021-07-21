import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Preview from './components/Preview';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

const App = ()=> {
  const {isDark, themeHandler} = useTheme();
  const {isPreview, changePreview} = usePreview();

  const {
    firstName, lastName, email, phone, description,
    changeFirstName, changeLastName, changeEmail,
    changePhone, changeDescription
  } = useGeneral();

  const {
    xp, changeXp,
    addXp, removeXp
  } = useXp();

  const {
    education, changeEducation,
    addEducation, removeEducation,
  } = useEducation();


  return (
    <div className="App">
      <Header
        isDark={isDark}
        themeHandler={themeHandler}
      />
      <Buttons 
        isPreview={isPreview}
        changePreview={changePreview}
      />
      {
        (isPreview)
          ? <Preview
              general={{firstName, lastName, email, phone, description}}
              xp={xp}
              education={education}
            />
          : <Main
              data={{firstName, lastName, email, phone, description}}
              events={{
                changeFirstName, changeLastName, changeEmail,
                changePhone, changeDescription,
              }}
              education={education}
              educationEvents={{
                addEducation, changeEducation, removeEducation
              }}
              xp={xp}
              xpEvents={{
                addXp, changeXp, removeXp
              }}
            />
      }
      <Footer isDark={isDark}/>
    </div>
  );
}

const useTheme = ()=> {
  const [isDark, setIsDark] = useState(true);

  const themeHandler = ()=> {
    setIsDark(!isDark);
  }

  return {
    isDark,
    themeHandler,
  }
}

const usePreview = ()=> {
  const [isPreview, setIsPreview] = useState(false);

  const changePreview = (bool)=> {
    setIsPreview(bool);
  }

  return {
    isPreview,
    changePreview,
  }
}

const useGeneral = ()=> {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const changeFirstName = (e)=> setFirstName(e.target.value);
  const changeLastName = (e)=> setLastName(e.target.value);
  const changeEmail = (e)=> setEmail(e.target.value);
  const changePhone = (e)=> setPhone(e.target.value);
  const changeDescription = (e)=> setDescription(e.target.value);

  return {
    firstName, changeFirstName,
    lastName, changeLastName,
    email, changeEmail,
    phone, changePhone,
    description, changeDescription,
  }
}

const useXp = ()=> {
  const [xp, setXp] = useState([]);

  const addXp = ()=> {
    const newXp = {
      role: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    setXp ([...xp, newXp]);
  }

  const changeXp = (content)=> {
    const newXp = {...content};

    setXp(
      xp.map((exp)=> (exp.id === newXp.id)? newXp: exp)
    );
  }

  const removeXp = (id)=> {
    setXp(
      xp.filter((xp)=> (xp.id !== id))
    );
  }

  return {
    xp,
    addXp,
    changeXp,
    removeXp,
  }
}

const useEducation = ()=> {
  const [education, setEducation] = useState([]);

  const addEducation = ()=> {
    const newEducation = {
      school: '',
      study: '',
      from: '',
      to: '',
      id: uniqid(),
    };

    setEducation([...education, newEducation]);
  }

  const changeEducation = (content)=> {
    const newEducation = {
      ...content
    };

    setEducation(
      education.map((educ)=> (educ.id === newEducation.id)? newEducation: educ)
    );
  }

  const removeEducation = (id)=> {
    setEducation(
      education.filter((educ)=> (educ.id !== id))
    );
  }

  return {
    education,
    addEducation,
    changeEducation,
    removeEducation,
  }
}

export default App;
