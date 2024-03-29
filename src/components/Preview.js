import '../styles/previewStyles.css';
import ContentBox from './previewComponents/ContentBox';
import SideContent from './previewComponents/SideContent';

const Preview = (props)=> {
  const { general, xp, education } = props;
  const lorem50 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, nihil? Molestiae nesciunt fugit, in unde iusto sunt eum corrupti, aliquam adipisci quos enim numquam nemo fugiat laboriosam velit perferendis quis inventore dicta vel fuga aperiam. Laborum eligendi obcaecati aliquam eos facilis suscipit, commodi voluptatem dolorum pariatur! Quia ad hic pariatur.';

  return (
    <div className="preview">
      <SideContent general={general}/>
      <div className="main-content">
        <div className="description">
          <p>{general.description || lorem50}</p>
        </div>
        <div className="educ">
          <h3>Education</h3>
        </div>
        {education.map((educ)=> (<ContentBox key={educ.id}data={educ} />))}
        <div className="exp">
          <h3>Experience</h3>
        </div>
        {xp.map((exp)=> (<ContentBox key={exp.id} data={exp} />))}
      </div>
    </div>
  );
}

export default Preview;
