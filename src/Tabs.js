import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    onClickDropdownItem: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
        onClickDropdownItem,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div>
        <ol className="tab-list">
          {children.map((child) => {
            const { dropdown, label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                dropdown = {dropdown}
                key={label}
                label={label}
                onClick={onClickTabItem}
                onClickDropdown={onClickDropdownItem}
              ></Tab>
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
