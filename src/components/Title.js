/**
 * Created by bruce on 2017/1/21.
 */
import React from 'react';

const Title = () => {
    return (
        <h1 style={{textAlign: 'center'}}>
            <span>Todo App</span>
            <a
                style={{
                    fontSize: 14,
                    fontWeight: "normal",
                    marginLeft: 4
                }}
                href="https://github.com/brucezz/Todos"
                target="_blank">
                view on GitHub
            </a>
        </h1>
    );
};

export default Title;