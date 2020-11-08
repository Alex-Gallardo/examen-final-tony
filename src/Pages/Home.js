import React, { useState } from 'react';
import './Home.css'

const Home = () => {

    // ESTADO DE DATOS BASICOS
    const [data, setData] = useState({
        numero1: '0',
        numero2: '0',
        mode: '+',
        res: 0
    })
    // ESTADO DEL TEXTAREA
    const [text, setText] = useState('')

    // URL
    const url = 'https://api.mathjs.org/'

    // HACER LA PETICION A LA API Y TRAER LOS DATOS
    const enviarDatos = (e) => {
        e.preventDefault()
        fetch(url + 'v4/?' + new URLSearchParams({ expr: data.numero1 + data.mode + data.numero2 }), { method: 'GET', mode: 'cors' }).then((res) => {
            return res.json()
        }).then((res) => {
            setData({ ...data, res })
        })
    }

    // GUARDAR (ESTADO) LOS DATOS DE LOS INPUTS
    const computeData = (e, name) => {
        switch (name) {
            // INPUT 1
            case 'n1':
                setData((state) => {
                    state.numero1 = e.target.value
                    return state
                })
                break
            // INPUT 2
            case 'n2':
                setData((state) => {
                    state.numero2 = e.target.value
                    return state
                })
                break
        }
    }

    // GUARDAR (ESTADO) LOS DATOS DEL SELECT
    const computeSelect = (e) => {
        setData((state) => {
            state.mode = e.target.value
            return state
        })
    }

    // SI ES VOCAL MOSTRAR UNA ALERTA
    const computeP = (e) => () => {
        if (e === 'a' || e === 'e' || e === 'i' || e === 'o' || e === 'u') {
            window.Alert({
                title: 'Letra',
                body: 'Es una vocal',
                type: "alert"
            })
        }
    }

    // GUARDAR (ESTADO) DATOS DEL TEXTAREA
    const compureTextArea = (e) => {
        setText(e.target.value)
    }

    return (
        <div className='container' >
            <h1>Ingresa los datos</h1>
            <form className='form-control' >
                <input type='number' onChange={(e) => computeData(e, 'n1')} />
                <input type='number' onChange={(e) => computeData(e, 'n2')} />
                <select onChange={computeSelect} defaultValue='+'>
                    <option value='+' selected={true}>Suma</option>
                    <option value='-'>Resta</option>
                    <option value='*'>Multiplicacion</option>
                    <option value='/'>Division</option>
                </select>
                <button type='submit' onClick={enviarDatos}>Enviar</button>
            </form>
            <div className='cont_numbers'>
                {/* MOSTAR LAS LETRAS OBTENIDAS */}
                {text === '' ? Array(data.res).fill({}).map(() => {
                    const letra = String.fromCharCode(Math.round(Math.random() * (122 - 97)) + 97)
                    return <p onClick={computeP(letra)}>{letra}</p>
                })
                    : text.split('').map((letra) => {
                        return <p onClick={computeP(letra)}>{letra}</p>
                    })}
            </div>
            <textarea onChange={compureTextArea} className='textArea' />
        </div>
    );

}
export default Home;