import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    dropdown:PropTypes.instanceOf(Array).isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickDropdown: PropTypes.func.isRequired,
  };

  /*on click of element of dropdown menu*/
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  onClickDropdown = (item) => {
    const { onClickDropdown } = this.props;
    onClickDropdown(item);
  }

  render() {
    const {
      onClick,
      onClickDropdown,
      props: {
        activeTab,
        dropdown,
        label,
      },
    } = this;

    let className = 'tab-list-item' + ' dropdown';  //make sure to insert a space

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <div
        className={className}
        onClick={onClick}
      >
        {label}
        <div className="dropdown-content">
          {
            dropdown.map((dropdownItem) => {
              return (<div key={dropdownItem.id} onClick={() => this.onClickDropdown(dropdownItem.id)}>
                {dropdownItem.id}
                <a className='addBtn'>+</a>
              </div>);
            })
          }
        </div>
      </div>
    );
  }
}

export default Tab;
