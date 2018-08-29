import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleMenu } from '../../Actions/Navigation';
import { logout } from '../../Actions/Navigation';

class Menu extends PureComponent {

  navigate = route => {
    const { history, toggleMenu } = this.props;
    toggleMenu();
    setTimeout(() => history.push(route), 300);
  }

  logout = () => {
    const { toggleMenu, history, logout } = this.props;
    toggleMenu();
    setTimeout(() => {
      logout();
      history.push('/');
    }, 300);
  }

  render = () => {
    const { menuClasses, classes } = this.props;
    return (
      <div className={menuClasses}>
        <div>
          <a onClick={() => this.navigate('/classes')}>Classes</a>
          {
            classes.map(c => {
              const { className } = c;
              return (
                <a
                  key={className} 
                  onClick={() => this.navigate(`/projects/${className}`)}>{className}</a>
              );
            })
          }
          <a onClick={() => this.navigate('/billing')}>Billing</a>
          <a onClick={() => this.navigate('/project-dashboard')}>Project Dashboard</a>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

const mSTP = ({ Navigation, Database }) => {
  const { menuClasses } = Navigation;
  const { classes } = Database;
  return { menuClasses, classes}
}

export default withRouter(connect(mSTP, { toggleMenu, logout })(Menu));
