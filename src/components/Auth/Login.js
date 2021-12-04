import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => {
    return (
        <div className='login-container'>
            <nav className='login'>
                <h2>Авторизация</h2>
                <p>Введите логин и пароль вашего аккаунта GitHub</p>
                <button className='github'
                    onClick={() => props.authentificate()}
                     >Войти
                </button>
            </nav>
        </div>
    )
};

Login.propTypes = {
    authentificate: PropTypes.func.isRequired
}

export default Login;