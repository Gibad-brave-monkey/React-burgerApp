import React from 'react';
import { Component } from 'react';
import AddBurgerForm from './AddBurgerForm';


class MenuAdmin extends Component {
    render() {
        return (
            <div className='menu-admin'>
                <h2> Управления Меню</h2>
                <AddBurgerForm addBurger={this.props.addBurger}/>
                <button onClick={this.props.loadSampleBurgers}>Загрузить бургер</button>
            </div>
        )
    }
}

export default MenuAdmin;