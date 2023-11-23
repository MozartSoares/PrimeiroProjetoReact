import styles from './Perfil.module.css'

export default ({nomeUsuario}) => {
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={styles.name} >{nomeUsuario}</h1>
        </header>
    )
}
//*******************************/
// export default function() {
//     const usuario = {
//         nome: 'Mozart',
//         avatar: 'https://github.com/MozartSoares.png'
//     }

//     return (
//         <div>
//             <img className="perfil-avatar" src={usuario.avatar} alt="" />
//             <h3 className='perfil-titulo' >{usuario.nome}</h3>
//         </div>
//     )
// ******************************/
// const Perfil = () => {
//     const usuario = {
//         nome: 'Mozart',
//         avatar: 'https://github.com/MozartSoares.png'
//     }

//     return (
//         <div>
//             <img className="perfil-avatar" src={usuario.avatar} alt="" />
//             <h3 className='perfil-titulo' >{usuario.nome}</h3>
//         </div>
//     )
    
// }

// export default Perfil;