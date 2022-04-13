import React, { useEffect, useState } from "react";

function LoginAPI(props) {
    const [urlToLogin, setUrlToLogin] = useState('')

    useEffect(() => {
        if (props.APIDetailsLogin.user.length > 0) {
            let formData = new FormData()
            formData.append('username', props.APIDetailsLogin.user)
            formData.append('password', props.APIDetailsLogin.pass)
            formData.append('authkey', 'abc123')

            const url = 'http://localhost/wordpress/?rest_route=/simple-jwt-login/v1/auth'
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data['success'] == true) {
                        console.log(data)
                        localStorage.setItem('jwt', data['data']['jwt'])
                        setUrlToLogin(`http://localhost/wordpress/?rest_route=/simple-jwt-login/v1/autologin&jwt=${data['data']['jwt']}`)
                    }
                    else {
                        console.log(data)
                        props.setServerMessage(data['data']['message'])
                    }
                })
        }

    }, [props.APIDetailsLogin])

    useEffect(() => {
        if (urlToLogin.length > 0) {
            console.log(urlToLogin)
            fetch(urlToLogin, {
                method: 'GET'
            })
                .then((response) => {
                    if (response.status == '200') {
                        props.setIsLoggedIn()
                        props.setUsername(props.APIDetailsLogin.user)
                        props.nextStep()
                    }
                    else {
                        console.log('error')
                    }
                })
        }
    }, [urlToLogin])

    return (
        <>
        </>
    )

}

export default LoginAPI