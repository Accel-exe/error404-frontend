import styles from './Form.module.css'


export const FormLogin = () => {
    return (
        <div className={styles.form}>
            <h2>Login</h2>
            <div className={styles.inputDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <div className={styles.btnLogin}>
                <p>Nao Possui uma conta? <span>Register</span></p>
                <button>Login</button>
            </div>
        </div>
    )
}

export const FormRegister = () => {
    return (
        <div className={styles.form}>
            <h2>Register</h2>
            <div className={styles.inputDiv}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"/>
            </div>
            <div className={styles.inputDiv}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"/>
            </div>
            <div className={styles.btnLogin}>
                <p>Ja possui uma conta? <span>Login</span></p>
                <button>Register</button>
            </div>
        </div>
    )
}
