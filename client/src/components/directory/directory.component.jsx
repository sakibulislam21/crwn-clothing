import "./directory.style.scss";
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector'


const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({id, ...othersSectionProps}) => (
        <MenuItem key={id} {...othersSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps =  createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);