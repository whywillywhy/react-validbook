import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavigationUserInfo from './NavigationUserInfo';
import './index.scss';

let savePositionTop;

@connect((state) => ({
  user: state.sign.user,
}), {})

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: null
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.saveScroll = this.saveScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.saveScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll(e) {
    const scrollTop = e.srcElement.body.scrollTop;
    savePositionTop = scrollTop;
    this.setState({ scrollTop });
  }

  saveScroll() {
    // console.log(`saveScroll:${savePositionTop}`);
    this.setState({ scrollTop: savePositionTop });
  }

  render() {
    const { slug, first_name, last_name } = this.props.user;
    const { scrollTop } = this.state;

    const chooseNav = () => {
      let Nav;
      let displayUser;

      if (scrollTop <= 275 || !scrollTop) {
        Nav = 'navigation';
        displayUser = 'navigation-infouser-none';
      } else {
        Nav = 'navigation navigation-fixed';
        displayUser = 'navigation-infouser';
      }
      const result = { posTop: Nav, show: displayUser };
      return result;
    };

    const navigation = chooseNav();

    return (
      <div className={navigation.posTop}>
        <div className="navigation-wrap">
          <Link
            to={`/${slug}`}
            onlyActiveOnIndex={true}
            activeClassName="active"
          >
            Storyline
          </Link>
          <Link
            to={`/${slug}/books`}
            onlyActiveOnIndex={true}
            activeClassName="active"
          >
            Books
          </Link>
          <Link
            to={`/${slug}/tokens`}
            onlyActiveOnIndex={true}
            activeClassName="active"
          >
            Tokens
          </Link>
          <Link
            to={`/${slug}/people`}
            onlyActiveOnIndex={true}
            activeClassName="active"
          >
            People
          </Link>
          <Link
            to={`/${slug}/photos`}
            onlyActiveOnIndex={true}
            activeClassName="active"
          >
            Photos
          </Link>
        </div>
        {/* {showName &&
          <NavigationInfoUser
            userName={`${first_name} ${last_name}`}
            link={link}
            displayUser={navigation.show}
          />
        } */}
        <NavigationUserInfo
          userName={`${first_name} ${last_name}`}
          link={`/${slug}`}
          displayUser={navigation.show}
        />
      </div>

    );
  }
}

Navigation.propTypes = {
  user: PropTypes.object,
};
